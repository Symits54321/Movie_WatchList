

import { useDispatch, useSelector } from 'react-redux';
import { movieActions,movieSelector } from '../../redux/reducers/movieReducer';
import React, { useRef, useEffect, useState } from 'react';


import YouTube from 'react-youtube';
import style from "./video.module.css";


 function VideoComp () {

    let {currMovieData} = useSelector(movieSelector) ;

    let {title,videoUrl}=currMovieData;

    const playerRef = useRef(null);
    const [playerWidth, setPlayerWidth] = useState('640px'); // Initial width or adjust as needed
    

    // Youtube 

    const getYouTubeVideoIdSubstring = (url) => {
        if (typeof url !== 'string') {
            return null; // Return null or handle error as appropriate
        }
    
        let videoId = null;
        const startIndex = url.indexOf('v=');
        if (startIndex !== -1) {
            const endIndex = url.indexOf('&', startIndex);
            videoId = endIndex === -1 ? url.substring(startIndex + 2) : url.substring(startIndex + 2, endIndex);
        }
        return videoId;
    };

    const videoId = getYouTubeVideoIdSubstring(videoUrl);

   

  
   
   


    const opts = {
        width: '100%', // Set width dynamically
       
        playerVars: {
          autoplay: 1,
        },
      };





    return(

        <div ref={playerRef} className={style.videoContainer}>
        {videoId!="" ? (
            <YouTube videoId={videoId} opts={opts} />
        ) : (
            <p>No video available</p>
        )}
       </div>
    );
}

export default VideoComp;