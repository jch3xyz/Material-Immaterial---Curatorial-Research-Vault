#!/usr/bin/env python3
"""Write tension-cluster pages, Symbol/Metaphor indexes, and pathway pages from the
maps-generation workflow result + the manifest (verbatim glosses). Verifies full
coverage (every tension/symbol/metaphor placed once) and that pathway links resolve.

Usage: write_pages.py <workflow_result.json> [--write]
"""
import re, os, sys, json, glob

ROOT = os.getcwd(); TODAY = "2026-06-09"
RESULT = sys.argv[1]
WRITE = "--write" in sys.argv
res = json.load(open(RESULT, encoding="utf-8"))
man = json.load(open(os.path.join(ROOT, "_system/maps_build/manifest.json"), encoding="utf-8"))

# vault note basenames for link verification
NOTES = set()
for d in ["concepts","tensions","definitions","metaphors","symbols","arguments","references","books","authors","maps"]:
    for f in glob.glob(os.path.join(ROOT, d, "*.md")): NOTES.add(os.path.basename(f)[:-3])
for sub in ["concept-clusters","argument-clusters","tension-clusters","reading-pathways"]:
    for f in glob.glob(os.path.join(ROOT, "maps", sub, "*.md")): NOTES.add(os.path.basename(f)[:-3])

def sanitize(title):
    s = title
    if "/" in s:
        p = [x.strip() for x in s.split("/")]; s = (p[0]+" & "+p[1]) if len(p)==2 else ", ".join(p[:-1])+" & "+p[-1]
    m = re.match(r"^(.*?)\s*\(([^()]+)\)\s*$", s)
    if m: s = f"{m.group(1).strip()} — {m.group(2).strip()}"
    return re.sub(r"\s+"," ", s.replace(":"," -").replace("?","")).strip()

def fm(extra=""): return f"---\ntype: map\nstatus: generated\nlast_updated: {TODAY}\n{extra}---\n\n"
planned = []; problems = []

def verify_coverage(kind, tax, full_list):
    placed = [e for th in tax["themes"] for e in th["entries"]]
    seen = {}
    for e in placed: seen[e] = seen.get(e,0)+1
    dupes = [e for e,c in seen.items() if c>1]
    missing = [e for e in full_list if e not in seen]
    extra = [e for e in placed if e not in set(full_list)]
    if dupes: problems.append(f"{kind}: assigned to >1 theme: {dupes}")
    if missing: problems.append(f"{kind}: NOT assigned ({len(missing)}): {missing}")
    if extra: problems.append(f"{kind}: unknown titles assigned: {extra}")
    if tax.get("unassigned"): problems.append(f"{kind}: agent left unassigned: {tax['unassigned']}")

# ---- 1. Tension cluster pages ----
ten_tax = res["tensions"]; verify_coverage("tensions", ten_tax, man["tensions"])
g = man["gloss_tensions"]
for th in ten_tax["themes"]:
    bullets = "\n".join(f"- [[{e}]]{g.get(e,' —')}" for e in th["entries"])
    body = f"{th['blurb'].strip()}\n\n{bullets}"
    base = f"{sanitize(th['title'])} (Tensions)"
    content = fm() + f"# {th['title']}\n\n{body}\n\n## Related\n\n- [[Tension Index]] — back to the index\n"
    planned.append((f"maps/tension-clusters/{base}.md", content))

# ---- 2. Symbol Index + Metaphor Index (single pages, by theme) ----
def index_page(kind, tax, glosses, full_list, title, hub_intro):
    verify_coverage(kind, tax, full_list)
    secs = []
    for th in tax["themes"]:
        bl = "\n".join(f"- [[{e}]]{glosses.get(e,' —')}" for e in th["entries"])
        secs.append(f"## {th['title']}\n\n{th['blurb'].strip()}\n\n{bl}")
    return fm() + f"# {title}\n\n{hub_intro}\n\n" + "\n\n".join(secs) + "\n\n## Related\n\n- [[Home]]\n"
planned.append(("maps/Symbol Index.md",
    index_page("symbols", res["symbols"], man["gloss_symbols"], man["symbols"],
               "Symbol Index", "All symbol notes in `symbols/`, grouped by theme. (Metaphors live in [[Metaphor Index]].)")))
planned.append(("maps/Metaphor Index.md",
    index_page("metaphors", res["metaphors"], man["gloss_metaphors"], man["metaphors"],
               "Metaphor Index", "All metaphor notes in `metaphors/`, grouped by theme. (Symbols live in [[Symbol Index]].)")))

# ---- 3. Vault-wide pathway pages ----
def links_of(t): return [m.strip() for m in re.findall(r'\[\[([^\]|#]+)', t) if m.strip()]
for p in res["pathways"]:
    title, body = p["title"], p["body"].strip()
    dangling = sorted({l for l in links_of(body) if l not in NOTES})
    if dangling: problems.append(f"pathway '{title}': dangling links: {dangling}")
    base = f"{sanitize(title)} (Pathway)"
    content = fm() + f"# {title}\n\n{body}\n\n## Related\n\n- [[Reading Pathways]] — back to the index · vault-wide pathway\n"
    planned.append((f"maps/reading-pathways/{base}.md", content))

print(f"planned pages: {len(planned)}  (tensions {len(ten_tax['themes'])} themes, "
      f"symbols {len(res['symbols']['themes'])} themes, metaphors {len(res['metaphors']['themes'])} themes, "
      f"pathways {len(res['pathways'])})")
print(f"PROBLEMS: {len(problems)}")
for pr in problems: print("  !!", pr)

if WRITE and not problems:
    os.makedirs(os.path.join(ROOT,"maps/tension-clusters"), exist_ok=True)
    for path, content in planned: open(os.path.join(ROOT,path),"w",encoding="utf-8").write(content)
    print(f"\nWROTE {len(planned)} pages")
elif WRITE:
    print("\nNOT WRITTEN — resolve PROBLEMS first")
