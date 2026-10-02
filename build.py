"""src/ 를 묶어 한 파일짜리 index.html 을 만든다.

    python build.py

- src/index.html 의 <!--APP_JS--> · <!--APP_CSS--> 자리에 app.js · app.css 를 넣는다.
- __ASSET:파일이름__ 표시는 src/assets 의 파일을 data URI 로 바꿔 넣는다.
- __TEXT:경로__ 표시는 src/경로 파일의 내용(알지오3D 자료 문자열 등)을 그대로 넣는다.
- 결과 index.html 하나만 있으면 인터넷 연결(알지오매스·그림판3D) 말고는 따로 필요한 파일이 없다.
"""
import base64, mimetypes, pathlib, re, sys

ROOT = pathlib.Path(__file__).parent
SRC = ROOT / "src"
MIME = {".webp": "image/webp", ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml",
        ".woff2": "font/woff2", ".gif": "image/gif"}


def text(m):
    p = SRC / m.group(1)
    if not p.exists():
        sys.exit(f"없는 파일: {p}")
    return p.read_text(encoding="utf-8").strip()


def asset(m):
    p = SRC / "assets" / m.group(1)
    if not p.exists():
        sys.exit(f"없는 자산: {p}")
    return f"data:{MIME.get(p.suffix) or mimetypes.guess_type(p.name)[0]};base64,{base64.b64encode(p.read_bytes()).decode()}"


html = (SRC / "index.html").read_text(encoding="utf-8")
js = (SRC / "app.js").read_text(encoding="utf-8")
css = (SRC / "app.css").read_text(encoding="utf-8")
html = html.replace("<!--APP_JS-->", f'<script type="module">\n{js}\n</script>', 1)
html = html.replace("<!--APP_CSS-->", f"<style>\n{css}\n</style>", 1)
html = re.sub(r"__TEXT:([\w./-]+)__", text, html)
html = re.sub(r"__ASSET:([\w.-]+)__", asset, html)
(ROOT / "index.html").write_text(html, encoding="utf-8", newline="\n")
print(f"index.html {len(html.encode()) / 1e6:.2f} MB")
