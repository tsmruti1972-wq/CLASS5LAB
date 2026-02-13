# CLASS5LAB
SMU Freshman Year Guide — a simple two-page site to help incoming students navigate their first year at SMU.

Files:
- [index.html](index.html) — Freshman landing guide with orientation, checklist, and FAQ
- [contact.html](contact.html) — Essential contacts and quick form
- [css/styles.css](css/styles.css) — styling
- [js/main.js](js/main.js) — small interactions (nav toggle, form handler, year)

- [index.html](index.html) — Freshman landing guide with orientation, checklist, and FAQ
- [info.html](info.html) — Informative page with official SMU links and resources


Quick start:

```bash
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

The Chatling.ai assistant is embedded on both pages. Edit the `chatbotId` in `index.html` and `contact.html` to use a different bot if needed.

Video: To add your SMU video to the landing page, place the file named `SMU.mp4` in the project root (next to `index.html`). The hero will load `/SMU.mp4` automatically. Optionally add a poster image at `img/smu-poster.jpg` for a fallback thumbnail.