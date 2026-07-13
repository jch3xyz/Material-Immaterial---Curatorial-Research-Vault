#!/usr/bin/env python3
"""
Normalize special characters in the staged content/ tree so Quartz's file-slug
and its wikilink-href slug agree.

Quartz emits a page file keeping characters like ':' '(' '[' '@' '!', but the
community link transformer strips them when generating the href — so a link to
"…Aesthetics: 100…" points at a slug the file was never emitted under, and 404s.

Fix: apply ONE identical transform to (a) every path segment of every filename
and directory, and (b) every wikilink target, so whatever slug Quartz computes
is the same on both sides. Files with no special characters are untouched, so
already-working links never regress. Runs only on the disposable staging copy;
the source vault is never modified.

Usage: sanitize-content.py <content-dir>
"""
import os, re, sys, unicodedata

root = sys.argv[1]

STRIP = re.compile(r"[()\[\]{}:;,!?@%&'\"’‘“”·|]")  # removed from segments (both sides)
DASHES = re.compile(r"[–—]")                          # en/em dash -> hyphen
WS = re.compile(r"[ \t]+")
WIKILINK = re.compile(r"(!?)\[\[([^\]]+)\]\]")


def safe_seg(seg: str) -> str:
    seg = unicodedata.normalize("NFC", seg)
    seg = DASHES.sub("-", seg)
    seg = STRIP.sub("", seg)
    seg = WS.sub(" ", seg).strip()
    return seg


def fix_wikilink(m: re.Match) -> str:
    bang, inner = m.group(1), m.group(2)
    path, alias = (inner.split("|", 1) + [None])[:2]
    if "#" in path:
        pathpart, anchor = path.split("#", 1)
        anchor = "#" + anchor
    else:
        pathpart, anchor = path, ""
    newpath = "/".join(safe_seg(s) for s in pathpart.split("/"))
    out = newpath + anchor + (("|" + alias) if alias is not None else "")
    return f"{bang}[[{out}]]"


def main() -> int:
    # 1) Rewrite wikilink targets in every markdown file.
    md_files = []
    for dirpath, _, files in os.walk(root):
        for f in files:
            if f.endswith(".md"):
                md_files.append(os.path.join(dirpath, f))
    for p in md_files:
        txt = open(p, encoding="utf-8").read()
        new = WIKILINK.sub(fix_wikilink, txt)
        if new != txt:
            open(p, "w", encoding="utf-8").write(new)

    # 2) Rename files then directories (deepest-first) to their safe segment.
    collisions = 0
    renamed = 0
    for dirpath, dirnames, files in os.walk(root, topdown=False):
        for name in files:
            base, ext = os.path.splitext(name)
            safe = safe_seg(base) + ext
            if safe != name:
                src, dst = os.path.join(dirpath, name), os.path.join(dirpath, safe)
                if os.path.exists(dst):
                    print(f"  COLLISION (file): {src} -> {safe}")
                    collisions += 1
                    continue
                os.rename(src, dst); renamed += 1
        # dir rename handled when we visit the parent (topdown=False visits children first)
        for name in dirnames:
            safe = safe_seg(name)
            if safe != name:
                src, dst = os.path.join(dirpath, name), os.path.join(dirpath, safe)
                if os.path.exists(dst):
                    print(f"  COLLISION (dir): {src} -> {safe}")
                    collisions += 1
                    continue
                os.rename(src, dst); renamed += 1

    print(f"sanitize: renamed {renamed} paths, {collisions} collisions")
    return 1 if collisions else 0


if __name__ == "__main__":
    sys.exit(main())
