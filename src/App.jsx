import React, { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import './stylesheets/App.css';
import Video from './components/Video';
import db from './firebase';
import demoVideos from './data/demoVideos';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (!db) {
      setVideos(demoVideos);
      return;
    }

    const unsubscribe = onSnapshot(
      collection(db, 'posts'),
      (snapshot) => {
        const posts = snapshot.docs.map((doc) => doc.data());
        setVideos(posts.length > 0 ? posts : demoVideos);
      },
      () => {
        // Firestore unreachable or rules deny access — show the demo feed.
        setVideos(demoVideos);
      }
    );

    return unsubscribe;
  }, []);

  return (
    <div className="app">
      <div className="app_videos">
        {videos.map(
          ({ url, channel, description, song, likes, comments, shares }) => (
            <Video
              key={url}
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              comments={comments}
              description={description}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
