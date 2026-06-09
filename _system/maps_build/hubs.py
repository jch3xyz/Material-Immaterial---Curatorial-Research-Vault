#!/usr/bin/env python3
"""Rewrite the index maps as HUBS linking to the new dedicated pages, update Home,
and delete the old combined Symbol/Metaphor index. Run after split.py + write_pages.py."""
import re, os, json, glob

ROOT = os.getcwd(); TODAY = "2026-06-09"
man = json.load(open("_system/maps_build/manifest.json", encoding="utf-8"))
res = json.load(open("/tmp/maps_result.json", encoding="utf-8"))

def read(p): return open(os.path.join(ROOT, p), encoding="utf-8").read()
def write(p, c): open(os.path.join(ROOT, p), "w", encoding="utf-8").write(c)
def fm(): return f"---\ntype: map\nstatus: generated\nlast_updated: {TODAY}\n---\n\n"

def blurb_of(path, maxlen=170):
    """First prose line of a generated page (between '# title' and first bullet/heading)."""
    t = read(path)
    m = re.search(r"(?ms)^# .+?\n+(.*?)(\n- \[\[|\n## )", t)
    if not m: return ""
    s = re.sub(r"\s+", " ", m.group(1)).strip()
    return (s[:maxlen] + "…") if len(s) > maxlen else s

def count_links(path):
    return len(re.findall(r"^- \[\[", read(path), re.M))

# ---------- Concept Index: keep Alphabetical, replace Thematic Clusters with links ----------
ci = read("maps/Concept Index.md")
alpha = ci[:re.search(r"(?m)^## Thematic Clusters", ci).start()].rstrip()
lines = ["## Thematic Clusters",
         "",
         "Each cluster now has its own page. The full alphabetical list is above.",
         ""]
for c in man["concept_clusters"]:
    b = blurb_of(c["path"]) or f"{count_links(c['path'])} concepts"
    lines.append(f"- [[{c['base']}|{c['title']}]] — {b}")
write("maps/Concept Index.md", alpha + "\n\n" + "\n".join(lines) + "\n")

# ---------- Argument Index: By Author + By Theme link lists ----------
out = [fm().rstrip(), "", "# Argument Index", "",
       "All argument notes in `arguments/`, split into dedicated pages.", "",
       "## By Author", ""]
for a in man["argument_authors"]:
    out.append(f"- [[{a['base']}|{a['title']}]] — {count_links(a['path'])} arguments")
out += ["", "## By Theme", ""]
for a in man["argument_themes"]:
    out.append(f"- [[{a['base']}|{a['title']}]] — {count_links(a['path'])} arguments")
write("maps/Argument Index.md", "\n".join(out) + "\n")

# ---------- Tension Index: By Theme link list (blurbs from the generated taxonomy) ----------
def base_for(title, suffix):
    s = title
    if "/" in s:
        p = [x.strip() for x in s.split("/")]; s = (p[0]+" & "+p[1]) if len(p)==2 else ", ".join(p[:-1])+" & "+p[-1]
    m = re.match(r"^(.*?)\s*\(([^()]+)\)\s*$", s)
    if m: s = f"{m.group(1).strip()} — {m.group(2).strip()}"
    s = re.sub(r"\s+", " ", s.replace(":", " -").replace("?", "")).strip()
    return f"{s} ({suffix})"
out = [fm().rstrip(), "", "# Tension Index", "",
       "All ~116 tension notes in `tensions/`, organized by theme. Each theme has its own page.", "",
       "## By Theme", ""]
for th in res["tensions"]["themes"]:
    out.append(f"- [[{base_for(th['title'],'Tensions')}|{th['title']}]] — {th['blurb'].strip()}")
write("maps/Tension Index.md", "\n".join(out) + "\n")

# ---------- Reading Pathways: vault-wide + by-book ----------
out = [fm().rstrip(), "", "# Reading Pathways", "",
       "Nonlinear suggested paths through the vault. Each pathway is a sequence of notes chosen to "
       "develop a particular question. Every pathway now has its own page.", "",
       "## Vault-wide pathways", "",
       "Cross-cutting paths that run a single thread through the whole corpus.", ""]
for p in res["pathways"]:
    base = base_for(p["title"], "Pathway")
    desc = re.sub(r"\s+", " ", p["body"].split("\n\n")[0]).strip()
    desc = (desc[:150] + "…") if len(desc) > 150 else desc
    out.append(f"- [[{base}|{p['title']}]] — {desc}")
# by book, preserving book order from manifest
out += ["", "## Pathways by book", ""]
seen = []
for p in man["pathways"]:
    if p["book"] not in seen: seen.append(p["book"])
for book in seen:
    out.append(f"### {book}")
    out.append("")
    for p in man["pathways"]:
        if p["book"] == book:
            out.append(f"- [[{p['base']}|{p['title']}]]")
    out.append("")
write("maps/Reading Pathways.md", "\n".join(out).rstrip() + "\n")

# ---------- Home: point Browse at the two new indexes ----------
home = read("maps/Home.md")
home = home.replace("- [[Symbol and Metaphor Index]] — figures and motifs",
                    "- [[Symbol Index]] — recurring symbols, emblems, cases\n- [[Metaphor Index]] — figures, images, and motifs")
write("maps/Home.md", home)

# ---------- delete old combined index ----------
old = os.path.join(ROOT, "maps/Symbol and Metaphor Index.md")
if os.path.exists(old): os.remove(old); print("deleted maps/Symbol and Metaphor Index.md")

print("rewrote hubs: Concept Index, Argument Index, Tension Index, Reading Pathways; updated Home")
