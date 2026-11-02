"""Dependency-free checks for broken project-relative links and public assets."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import re
import sys
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1] / 'site'
errors = []

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.path = path
        self.ids = set()
        self.refs = []
        self.feed(path.read_text())

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            if attrs['id'] in self.ids:
                errors.append(f'{self.path.relative_to(ROOT)}: duplicate id {attrs["id"]}')
            self.ids.add(attrs['id'])
        for key in ('href', 'src'):
            if attrs.get(key):
                self.refs.append(attrs[key])
        if tag == 'img' and 'alt' not in attrs:
            errors.append(f'{self.path.relative_to(ROOT)}: image missing alt text')

pages = {p.resolve(): Page(p) for p in ROOT.rglob('*.html')}
def check_ref(source, ref):
    parts = urlsplit(ref)
    if parts.scheme or parts.netloc:
        return
    if parts.path.startswith('/'):
        errors.append(f'{source.relative_to(ROOT)}: root-relative path breaks project hosting: {ref}')
        return
    dest = (source.parent / unquote(parts.path)).resolve() if parts.path else source.resolve()
    if dest.is_dir():
        dest /= 'index.html'
    if not dest.is_relative_to(ROOT.resolve()) or not dest.is_file():
        errors.append(f'{source.relative_to(ROOT)}: missing target {ref}')
        return
    if parts.fragment:
        fragment = unquote(parts.fragment)
        ids = pages[dest].ids if dest in pages else None
        if dest.suffix == '.svg':
            ids = {node.attrib.get('id') for node in ET.parse(dest).iter()}
        if ids is not None and fragment not in ids:
            errors.append(f'{source.relative_to(ROOT)}: missing fragment {ref}')

for path, page in pages.items():
    for ref in page.refs:
        check_ref(path, ref)
for css in ROOT.rglob('*.css'):
    for ref in re.findall(r'url\([\'"]?([^\)\'\"]+)[\'"]?\)', css.read_text()):
        check_ref(css, ref)
if errors:
    print('\n'.join(errors))
    sys.exit(1)
print(f'Checked {len(pages)} pages: local links, anchors, SVG symbols, styles, and images are valid.')
