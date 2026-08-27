# TikTok Clone

A TikTok-style vertical video feed built with React, Vite, and Firebase Firestore.

Videos scroll vertically with snap behavior; click a video to play/pause. Each post shows channel, description, a scrolling song ticker, and like/comment/share counters.

## Stack

- React 18 + Vite
- MUI icons
- Firebase Firestore (modular v12 SDK) — optional

## Getting started

```bash
npm install
npm run dev
```

With no Firebase configured, the app shows a bundled demo feed.

To use your own Firestore backend, copy `.env.example` to `.env` and fill in your Firebase web config, then create a `posts` collection with documents shaped like:

```json
{
  "url": "https://example.com/video.mp4",
  "channel": "username",
  "description": "caption",
  "song": "song name",
  "likes": 0,
  "comments": 0,
  "shares": 0
}
```

If Firestore is unreachable or its rules deny access, the app falls back to the demo feed automatically.
