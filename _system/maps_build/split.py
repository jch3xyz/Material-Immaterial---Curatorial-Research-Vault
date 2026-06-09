#!/usr/bin/env python3
"""Deterministic split of the monolithic index maps into dedicated pages.

Reads maps/Concept Index.md, maps/Argument Index.md, maps/Reading Pathways.md and emits:
  maps/concept-clusters/<Cluster> (Concepts).md          (19)
  maps/argument-clusters/<Author> (Arguments).md         (11, Han's 3 books merged)
  maps/argument-clusters/<Theme> (Arguments).md          (11)
  maps/reading-pathways/<Title> (Pathway).md             (book-specific only)
Cross-book pathways are NOT emitted here — they are collected into the manifest for the
generation workflow to consolidate into vault-wide pathways. Existing curated bullets are
copied VERBATIM. A manifest (maps_build/manifest.json) records every page for the hub step.

Usage: split.py --dry   (print plan)   |   split.py --write   (create files + manifest)
"""
import re, os, sys, json

ROOT = os.getcwd()
TODAY = "2026-06-09"
CROSS_BOOK_MARKERS = ["across the vault", "across art history", "two valences", "bridge to", "pairing"]

def read(p): return open(os.path.join(ROOT, p), encoding="utf-8").read()

def sanitize(title):
    s = title
    if "/" in s:                                  # "A / B / C" -> "A, B & C"
        parts = [p.strip() for p in s.split("/")]
        s = (parts[0] + " & " + parts[1]) if len(parts) == 2 else ", ".join(parts[:-1]) + " & " + parts[-1]
    m = re.match(r"^(.*?)\s*\(([^()]+)\)\s*$", s)  # trailing "(Author)" -> "— Author"
    if m: s = f"{m.group(1).strip()} — {m.group(2).strip()}"
    s = s.replace(":", " -").replace("?", "")
    return re.sub(r"\s+", " ", s).strip()

def split_h(text, marker_level):
    """Split text into (heading_line, body) blocks at the given heading level (e.g. '### ')."""
    pat = re.compile(r"(?m)^%s(?!#)" % re.escape(marker_level))
    idxs = [m.start() for m in pat.finditer(text)]
    blocks = []
    for i, start in enumerate(idxs):
        end = idxs[i+1] if i+1 < len(idxs) else len(text)
        chunk = text[start:end]
        head = chunk.splitlines()[0][len(marker_level):].strip()
        body = "\n".join(chunk.splitlines()[1:]).strip("\n")
        blocks.append((head, body))
    return blocks

def section(text, h2_title):
    """Return the body of a top-level '## h2_title' section."""
    m = re.search(r"(?m)^## %s\s*$" % re.escape(h2_title), text)
    if not m: return ""
    start = m.end()
    nxt = re.search(r"(?m)^## (?!#)", text[start:])
    return text[start: start + (nxt.start() if nxt else len(text)-start)]

def page(title, hub, body, extra_frontmatter=""):
    return (f"---\ntype: map\nstatus: generated\nlast_updated: {TODAY}\n{extra_frontmatter}---\n\n"
            f"# {title}\n\n{body.strip()}\n\n## Related\n\n- [[{hub}]] — back to the index\n")

manifest = {"concept_clusters": [], "argument_authors": [], "argument_themes": [],
            "pathways": [], "cross_book_pathways": []}
planned = []  # (path, content)

# ---------- 1. Concept clusters ----------
ci = read("maps/Concept Index.md")
clusters = split_h(section(ci, "Thematic Clusters"), "### ")
for head, body in clusters:
    base = f"{sanitize(head)} (Concepts)"
    path = f"maps/concept-clusters/{base}.md"
    planned.append((path, page(head, "Concept Index", body)))
    manifest["concept_clusters"].append({"title": head, "base": base, "path": path})

# ---------- 2. Arguments: by author (merge Han's 3 books) ----------
ai = read("maps/Argument Index.md")
by_author = split_h(section(ai, "By Author"), "### ")
authors = {}  # author -> list of (book, body)
for head, body in by_author:
    if " — " in head:
        author, book = head.split(" — ", 1)
    else:
        author, book = head, ""
    authors.setdefault(author.strip(), []).append((book.strip(), body))
for author, books in authors.items():
    base = f"{sanitize(author)} (Arguments)"
    path = f"maps/argument-clusters/{base}.md"
    parts = []
    for book, body in books:
        parts.append((f"## {book}\n\n{body}".strip() if book else body))
    planned.append((path, page(f"Arguments — {author}", "Argument Index", "\n\n".join(parts))))
    manifest["argument_authors"].append({"title": author, "base": base, "path": path})

# ---------- 3. Arguments: by theme ----------
by_theme = split_h(section(ai, "By Theme"), "### ")
for head, body in by_theme:
    base = f"{sanitize(head)} (Arguments)"
    path = f"maps/argument-clusters/{base}.md"
    planned.append((path, page(head, "Argument Index", body)))
    manifest["argument_themes"].append({"title": head, "base": base, "path": path})

# ---------- 4. Reading pathways (book-specific only) ----------
rp = read("maps/Reading Pathways.md")
book_sections = split_h(rp, "## ")
for bh, bbody in book_sections:
    if not bh.startswith("Pathways through"):
        continue
    book = bh.replace("Pathways through", "").strip()
    for ph, pbody in split_h(bbody, "### "):
        title = ph.replace("Pathway:", "").strip()
        cross = any(mk in title.lower() for mk in CROSS_BOOK_MARKERS)
        rec = {"title": title, "book": book, "body": pbody}
        if cross:
            manifest["cross_book_pathways"].append(rec)
            continue
        base = f"{sanitize(title)} (Pathway)"
        path = f"maps/reading-pathways/{base}.md"
        content = page(title, "Reading Pathways", pbody, "")
        # tag the book it belongs to
        content = content.replace("## Related\n", f"## Related\n\n- Part of *{book}*\n", 1)
        planned.append((path, content))
        manifest["pathways"].append({"title": title, "base": base, "path": path, "book": book})

# ---------- output ----------
if "--write" in sys.argv:
    for d in ["maps/concept-clusters", "maps/argument-clusters", "maps/reading-pathways", "_system/maps_build"]:
        os.makedirs(os.path.join(ROOT, d), exist_ok=True)
    for path, content in planned:
        open(os.path.join(ROOT, path), "w", encoding="utf-8").write(content)
    json.dump(manifest, open(os.path.join(ROOT, "_system/maps_build/manifest.json"), "w"), indent=2, ensure_ascii=False)
    print(f"WROTE {len(planned)} pages + manifest")
print(f"concept_clusters: {len(manifest['concept_clusters'])}")
print(f"argument_authors: {len(manifest['argument_authors'])} -> {[a['title'] for a in manifest['argument_authors']]}")
print(f"argument_themes:  {len(manifest['argument_themes'])}")
print(f"pathways (book-specific): {len(manifest['pathways'])}")
print(f"cross_book_pathways (deferred to workflow): {len(manifest['cross_book_pathways'])} -> {[p['title'] for p in manifest['cross_book_pathways']]}")
print("\nconcept cluster filenames:")
for c in manifest["concept_clusters"]: print("  ", c["base"])
