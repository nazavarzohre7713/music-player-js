# 🎵 Web Music Player
![Music Player Screenshot](img/musicPlayer.gif)

ج

A simple, lightweight **web-based music player** built with **HTML, CSS, and JavaScript**.  
Upload local audio files, manage them in a playlist, and control playback (play/pause/next/prev). The player also reads embedded cover art via **jsmediatags** and shows a clickable progress bar with elapsed time and duration.

---

## ✨ Features
- Add local audio files (via file input) and auto-build a playlist
- Play / Pause / Next / Previous controls
- Click a playlist item to jump to that track
- Album cover from metadata (fallback image if not found)
- Progress bar with click-to-seek
- Current time and total duration display
- Active track highlighting

---

## 🛠 Tech Stack
- **HTML5** for structure  
- **CSS3** for styling  
- **Vanilla JavaScript** for logic  
- **[jsmediatags](https://github.com/aadsm/jsmediatags)** to read cover art (ID3 tags)

---

## 🚀 Getting Started

1. **Clone or download** this repository.
2. Ensure the project has (at least) the following files:
   ```text
   /
   ├─ index.html
   ├─ style.css
   ├─ script.js
   └─ img/
      └─ 1.avif   # default cover (fallback)
   ```
3. Open `index.html` in your browser.

> Tip: You can also host it with **GitHub Pages**: Settings → Pages → Deploy from branch → select `main` and root directory.

---

## 📦 Include jsmediatags (if you haven’t already)
Add the CDN script **before** your `script.js`:
```html
<script src="https://cdn.jsdelivr.net/npm/jsmediatags@3.9.7/dist/jsmediatags.min.js"></script>
<script src="./script.js"></script>
```

---

## 🧠 How it works (high‑level)
- Selected files are stored in an in‑memory `files[]` array.
- `currentIndex` tracks the currently playing audio.
- `play()`, `pause()`, `next()`, and `prev()` control the `<audio>` element.
- Clicking on a playlist item sets `currentIndex` and calls `play()`.
- `timeupdate` updates the progress bar and time labels.
- `jsmediatags.read(file)` extracts embedded cover art; if missing, a default image is used.

---

## 🧩 Key DOM IDs & Classes (match your HTML)
- Buttons: `#add`, `#play`, `#next`, `#prev`
- Inputs: `#fileInput`
- Audio: `#audio`
- Cover image: `#cover`
- Playlist container: `.playlist` (each item: `.lilist` with `.active` on the current track)
- Progress UI: `#progress-container` and inner `#progress`
- Time labels: `#current-time`, `#duration`

---

## ⌨️ Keyboard ideas (optional)
Consider adding:
- **Space** → Play/Pause
- **ArrowRight/ArrowLeft** → Seek ±5s
- **N / P** → Next / Previous

---

## 🧪 Troubleshooting
- **No cover art?** Many audio files don’t include embedded images. A default cover (`img/1.avif`) will be shown.
- **Files won’t play after refresh?** Files are stored in memory only; re‑add them after page reload.
- **Progress not moving?** Ensure the audio is playing and your file format is supported by the browser (e.g., MP3, M4A, OGG).

---

## 🔮 Roadmap
- Shuffle & Repeat
- Volume control and mute button
- Drag‑and‑drop file adding
- Save playlist (IndexedDB / localStorage)
- Responsive UI (mobile‑first) and theming

---

## 📝 License
MIT — feel free to use, modify, and share.

---

## 🙌 Credits
- Cover extraction by **jsmediatags**
- Icons (if used) by **Font Awesome**

---

### Short GitHub Description (1‑liner)
> A simple web music player with playlist, cover art, and seekable progress bar — built in JavaScript.
