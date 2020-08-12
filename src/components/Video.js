import React ,{ useRef,useState } from 'react'
import VideoFooter from './VideoFooter'
import '../stylesheets/Video.css'
import VideoSidebar from './VideoSidebar'

function Video({ url, channel, description, song, likes, comments, shares }) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress =() =>
    {
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }
        else{
            videoRef.current.play(); 
            setPlaying(true);  
        }
    };


    return (
        <div className="video_card">
            <video 
                className="video" 
                src={url}
                loop
                onClick={onVideoPress}
                ref={videoRef}
            ></video>
            <VideoFooter 
                channel={channel}
                description={description}
                song={song}
            />
            <VideoSidebar 
                likes={likes}
                shares={shares}
                comments={comments}
            />
                
        </div>
    )
}

export default Video;

