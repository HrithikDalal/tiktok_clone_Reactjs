# TikTok Clone

> ⚠️ **Not actively maintained.** This is a portfolio/learning project from 2020. It was fully modernized in August 2026 (dependencies current, 0 known vulnerabilities at that time), but it receives no ongoing maintenance or support.

A TikTok-style vertical video feed built with **React 18**, **Vite**, and **Firebase Firestore**. Videos snap-scroll vertically like the TikTok mobile app; click a video to play or pause it. Each post shows the channel name, caption, a scrolling song ticker with a spinning record animation, and like/comment/share counters.

![React](https://img.shields.io/badge/React-18-61dafb) ![Vite](https://img.shields.io/badge/Vite-6-646cff) ![Firebase](https://img.shields.io/badge/Firebase-12-ffca28) ![Maintenance](https://img.shields.io/badge/maintained-no-red)

## Features

- **Vertical snap-scroll feed** — one video per viewport, CSS scroll-snap
- **Click to play/pause** on the video itself
- **Like button** with optimistic count increment
- **Song ticker** — marquee-scrolling track name with a spinning record icon
- **Live backend (optional)** — posts stream in realtime from Firestore via `onSnapshot`
- **Demo fallback** — with no Firebase configured (or if Firestore is unreachable / rules deny access), the app renders a bundled feed of open-licensed sample clips instead of a blank page

## Tech stack

| Layer | Choice |
| --- | --- |
| Build tool | Vite 6 |
| UI | React 18, MUI icons (`@mui/icons-material`) |
| Data | Firebase Firestore (modular v12 SDK), optional |
| Styling | Plain CSS per component (`src/stylesheets/`) |

## Project structure

```
├── index.html                  # Vite entry
├── vite.config.js
├── .env.example                # Firebase config template
└── src/
    ├── main.jsx                # React 18 createRoot bootstrap
    ├── App.jsx                 # Feed: Firestore subscription + demo fallback
    ├── firebase.js             # Firebase init from env vars (null if unconfigured)
    ├── data/demoVideos.js      # Bundled fallback feed
    ├── components/
    │   ├── Video.jsx           # <video> card, play/pause
    │   ├── VideoFooter.jsx     # channel, caption, song marquee, record
    │   └── VideoSidebar.jsx    # like / comment / share buttons
    └── stylesheets/            # per-component CSS
```

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

With no Firebase configured, the app runs entirely on the bundled demo feed — no setup needed.

### Using your own Firestore backend

1. Create a Firebase project with a Firestore database, and a web app in it.
2. Copy `.env.example` to `.env` and fill in the web-app config values (`.env` is gitignored).
3. Create a `posts` collection with documents shaped like:

```json
{
  "url": "https://example.com/video.mp4",
  "channel": "username",
  "description": "caption text",
  "song": "song name - artist",
  "likes": 0,
  "comments": 0,
  "shares": 0
}
```

4. Make sure your Firestore security rules allow reads on `posts`, e.g.

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /posts/{post} {
      allow read: if true;
      allow write: if false;
    }
  }
}
```

If the rules deny access or the project is unreachable, the app silently falls back to the demo feed.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Dev server with HMR on port 3000 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |

## Security notes

- Firebase **web config is not a secret** (it ships in every client bundle); access control lives entirely in Firestore security rules. It is still kept in `.env` here so the repo stays reusable.
- A Firebase config for the original `tiktok-clone-70c14` project exists in old git history. That project's Firestore rules deny all access, so it is inert.

## History

- **2020** — built as a learning project (Create React App, React 16, Firebase 7, Material-UI 4).
- **2026-08** — modernized: CRA → Vite, React 16 → 18, Firebase namespaced → modular v12, `@material-ui` → `@mui`, abandoned `react-ticker` replaced with a CSS marquee, Firebase config moved to env vars, demo-feed fallback added. All 234 `npm audit` vulnerabilities eliminated.
