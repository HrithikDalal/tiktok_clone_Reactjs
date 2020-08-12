  import React, { useState, useEffect } from "react";
import './stylesheets/App.css';
import Video from './components/Video';
import db from "./firebase";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  
  return (
    <div className="app">
      <div className="app_videos">
        {videos.map(
            ({ url, channel, description, song, likes, comments, shares }) => (
              <Video
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
