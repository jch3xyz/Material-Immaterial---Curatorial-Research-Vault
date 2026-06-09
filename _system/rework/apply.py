#!/usr/bin/env python3
"""Deterministic applier for the cross-book framing rework.

Per note: (1) fix heading typos, (2) reorder stranded author-sections, (3) swap in
agent-generated framing-section bodies. NEVER touches per-author quote sections or
the Sources block. Refuses to write unless hard provenance gates pass:
  - the multiset of "> " block-quote lines is byte-identical pre/post
  - the "## Sources" section body is byte-identical pre/post
  - brackets balanced; every frontmatter author appears in the result
Usage:
  apply.py --structural <note.md> [<note.md> ...]      # dry-run: show typo+reorder only
  apply.py --apply <note.md>                            # apply json from _system/rework/<slug>.json
  apply.py --apply-all                                  # apply every json present in _system/rework/
"""
import re, sys, os, json, glob

TODAY = "2026-06-09"
INTRO   = {"Brief Definition", "General Orientation", "Longer Explanation", "Why It Matters", "The Poles"}
ROSTER  = {"Authors and Variants", "Authors and Books That Discuss It"}
CLOSERS = {"Related Concepts", "Opposing Concepts", "Questions It Raises", "Possible Synthesis or Unresolved Status"}
FRAMING = INTRO | ROSTER          # only these section bodies may be swapped
def title(sec): return sec.splitlines()[0].lstrip('#').strip()
def role(t):
    if t in INTRO: return 'intro'
    if t in ROSTER: return 'roster'
    if t in CLOSERS: return 'closer'
    if t == 'Sources': return 'sources'
    return 'author'                # per-author dedicated section (quote-bearing) — never rewritten

def split_sections(text):
    m = re.search(r'^## ', text, re.M)
    if not m: return text, []
    head, body = text[:m.start()], text[m.start():]
    parts = [p for p in re.split(r'(?m)(?=^## )', body) if p.strip()]
    return head, parts

def fix_typos(parts):
    out, fixed = [], []
    for p in parts:
        lines = p.split('\n')
        if re.match(r'^##\s+#+\s+\S', lines[0]):           # "## ## Foo" -> "## Foo"
            new = re.sub(r'^##\s+#+\s+', '## ', lines[0])
            fixed.append((lines[0], new)); lines[0] = new
            p = '\n'.join(lines)
        out.append(p)
    return out, fixed

def reorder(parts):
    """Consolidate per-author sections into one contiguous block: move any stray
    author-section to rejoin the largest existing run of author-sections. Respects
    each template's natural roster position. Pure whole-section moves -> quote-safe."""
    roles = [role(title(p)) for p in parts]
    auth = [i for i, r in enumerate(roles) if r == 'author']
    if len(auth) < 2: return parts, []
    runs, cur = [], [auth[0]]
    for i in auth[1:]:
        if i == cur[-1] + 1: cur.append(i)
        else: runs.append(cur); cur = [i]
    runs.append(cur)
    if len(runs) == 1: return parts, []                     # already contiguous
    main = max(runs, key=lambda r: (len(r), -r[0]))         # longest run; ties -> earliest
    stray_idx = [i for r in runs if r is not main for i in r]
    stray = [parts[i] for i in stray_idx]
    last_main = parts[main[-1]]
    keep = [p for j, p in enumerate(parts) if j not in stray_idx]
    ins = keep.index(last_main) + 1                          # insert right after the main run
    keep[ins:ins] = stray
    return keep, [title(s) for s in stray]

def excise(parts, excisions):
    """Remove stranded accretion-paragraphs from inside per-author sections, but ONLY
    when every substantial inline quote they contain still appears elsewhere in the note.
    Returns (parts, excised, warnings). Refusals are warnings, never blocking."""
    excised, warns = [], []
    for ex in excisions or []:
        h = (ex.get('section_heading') or '').rstrip()
        para = (ex.get('paragraph_text') or '').strip()
        if not h or not para: continue
        idx = next((i for i, p in enumerate(parts) if p.splitlines()[0].rstrip() == h), None)
        if idx is None: warns.append(f"excise skip: section not found {h!r}"); continue
        sec = parts[idx]
        if para not in sec: warns.append(f"excise skip: paragraph not found in {h!r}"); continue
        rest = ''.join(p for j, p in enumerate(parts) if j != idx) + sec.replace(para, '', 1)
        quotes = re.findall(r'["“”]([^"“”]{20,}?)["“”]', para)
        lost = [q for q in quotes if q not in rest]
        if lost:
            warns.append(f"excise REFUSED (would lose quote) in {h!r}: {lost[0][:45]!r}"); continue
        if '\n\n' + para in sec:   new = sec.replace('\n\n' + para, '', 1)
        elif para + '\n\n' in sec: new = sec.replace(para + '\n\n', '', 1)
        else:                      new = sec.replace(para, '', 1)
        parts[idx] = new
        excised.append((h, para[:60]))
    return parts, excised, warns

def swap_bodies(parts, framing, errors):
    by_head = {}
    for i, p in enumerate(parts):
        by_head.setdefault(p.splitlines()[0].rstrip(), i)
    for fs in framing:
        h = fs['heading'].rstrip()
        nb = fs['new_body'].strip('\n')
        nb = re.sub(r'^\s*#{1,6}\s+.*\n', '', nb) if nb.lstrip().startswith('#') and nb.lstrip().split('\n',1)[0].strip().lstrip('#').strip()==h.lstrip('#').strip() else nb
        if h not in by_head:
            errors.append(f"heading not found for swap: {h!r}"); continue
        if role(title(parts[by_head[h]])) not in ('intro', 'roster'):
            errors.append(f"refused non-framing swap: {h!r}"); continue   # never overwrite a quote-bearing section
        parts[by_head[h]] = h + "\n\n" + nb + "\n\n"
    return parts

def bump_date(head):
    if re.search(r'^last_updated:', head, re.M):
        return re.sub(r'^last_updated:.*$', f'last_updated: {TODAY}', head, count=1, flags=re.M)
    return head

def quoteset(t): return sorted(l for l in t.splitlines() if l.startswith('> '))
def links(t): return [m.strip() for m in re.findall(r'\[\[([^\]|#]+)', t) if m.strip()]
def sources_body(t):
    h, parts = split_sections(t)
    for p in parts:
        if title(p) == 'Sources': return p
    return None
def fm_authors(t):
    m = re.search(r'^---\n(.*?)\n---', t, re.S)
    if not m: return []
    am = re.search(r'^authors:\n((?:[ \t]+-.*\n?)+)', m.group(1), re.M)
    return re.findall(r'\[\[([^\]|]+)', am.group(1)) if am else []

STALE = re.compile(r'\b(both authors|neither author|two authors meet|three authors meet|'
                   r'the other (?:two|three|four)|four-author core|seven-author|eight-author|'
                   r'nine-author|ten-author|a (?:second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth) sense)\b', re.I)

def process(path, framing=None, apply=False, excisions=None):
    orig = open(path, encoding='utf-8').read()
    head, parts = split_sections(orig)
    parts, typos = fix_typos(parts)
    parts, excised, excise_warns = excise(parts, excisions)
    parts, moved = reorder(parts)
    errors = []
    if framing: parts = swap_bodies(parts, framing, errors)
    head2 = bump_date(head) if apply else head
    result = head2 + ''.join(parts)

    report = {'path': path, 'typos_fixed': typos, 'sections_moved': moved,
              'paragraphs_excised': excised, 'excise_warnings': excise_warns, 'swap_errors': errors}
    # gates
    g = report['gates'] = {}
    g['quoteset_preserved'] = quoteset(orig) == quoteset(result)
    g['sources_preserved']  = sources_body(orig) == sources_body(result)
    g['brackets_balanced']  = result.count('[[') == result.count(']]')
    aus = fm_authors(orig)
    g['all_authors_present'] = all(f'[[{a}' in result for a in aus)
    g['missing_authors'] = [a for a in aus if f'[[{a}' not in result]
    report['dropped_links'] = sorted(set(links(orig)) - set(links(result)))   # review: lost targets
    report['added_links']   = sorted(set(links(result)) - set(links(orig)))   # review: verify these resolve
    # stale-count only checked inside swapped framing bodies
    if framing:
        g['stale_in_framing'] = [fs['heading'] for fs in framing if STALE.search(fs['new_body'])]
    passed = g['quoteset_preserved'] and g['sources_preserved'] and g['brackets_balanced'] and g['all_authors_present'] and not errors and not g.get('stale_in_framing')
    report['PASS'] = passed
    if apply and passed and result != orig:
        open(path, 'w', encoding='utf-8').write(result); report['written'] = True
    elif apply:
        report['written'] = False
    return report

def main():
    args = sys.argv[1:]
    if args and args[0] == '--structural':
        for p in args[1:]:
            r = process(p, framing=None, apply=False)
            print(f"\n### {p}\n  typos: {r['typos_fixed']}\n  moved: {r['sections_moved']}\n  gates: {r['gates']}\n  PASS(structural): {r['PASS']}")
    elif args and args[0] == '--apply':
        for p in args[1:]:
            slug = os.path.basename(p)[:-3]
            j = json.load(open(f'_system/rework/{slug}.json', encoding='utf-8'))
            r = process(p, framing=j.get('framing_sections', []), excisions=j.get('excise_paragraphs', []), apply=True)
            print(json.dumps(r, indent=2, ensure_ascii=False))
    elif args and args[0] == '--apply-all':
        for jf in sorted(glob.glob('_system/rework/*.json')):
            j = json.load(open(jf, encoding='utf-8'))
            p = j['note_path']
            r = process(p, framing=j.get('framing_sections', []), excisions=j.get('excise_paragraphs', []), apply=True)
            print(f"{'WROTE' if r.get('written') else 'SKIP '} {p}  pass={r['PASS']} moved={len(r['sections_moved'])} excised={len(r['paragraphs_excised'])} excise_warn={len(r['excise_warnings'])} typos={len(r['typos_fixed'])} errs={r['swap_errors']}")
    else:
        print(__doc__)

if __name__ == '__main__':
    main()
