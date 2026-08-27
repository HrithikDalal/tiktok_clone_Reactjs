// Fallback feed shown when Firestore is not configured or unreachable.
// All clips are open-licensed sample videos.
const demoVideos = [
  {
    url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
    channel: 'bigbuckbunny',
    description: 'Bunny business 🐰',
    song: 'Forest Frolic - Demo Artist',
    likes: 950,
    comments: 130,
    shares: 42
  },
  {
    url: 'https://test-videos.co.uk/vids/jellyfish/mp4/h264/360/Jellyfish_360_10s_1MB.mp4',
    channel: 'oceanvibes',
    description: 'Jellyfish drifting 🌊',
    song: 'Deep Blue - Demo Artist',
    likes: 1204,
    comments: 87,
    shares: 65
  },
  {
    url: 'https://test-videos.co.uk/vids/sintel/mp4/h264/360/Sintel_360_10s_1MB.mp4',
    channel: 'sintelmovie',
    description: 'Adventure awaits ⚔️',
    song: 'Open Road - Demo Artist',
    likes: 2310,
    comments: 245,
    shares: 118
  },
  {
    url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    channel: 'naturedaily',
    description: 'Bloom where you are planted 🌸',
    song: 'Good Vibes - Demo Artist',
    likes: 780,
    comments: 54,
    shares: 23
  }
];

export default demoVideos;
