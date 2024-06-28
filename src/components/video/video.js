import { useDispatch, useSelector } from 'react-redux';
import { movieActions,movieSelector } from '../../redux/reducers/movieReducer';

import YouTube from 'react-youtube';

function VideoComp () {

    let {currMovieData} = useSelector(movieSelector) ;

    let {title,videoUrl}=currMovieData;
    

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
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    };





    return(

        <div>
        {videoId!="" ? (
            <YouTube videoId={videoId} opts={opts} />
        ) : (
            <p>No video available</p>
        )}
       </div>
    );
}

export default VideoComp;