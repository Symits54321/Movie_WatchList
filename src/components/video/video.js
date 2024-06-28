import { useDispatch, useSelector } from 'react-redux';
import { movieActions,movieSelector } from '../../redux/reducers/movieReducer';


function VideoComp () {

    let {currMovieData} = useSelector(movieSelector) ;

    let {title,videoUrl}=currMovieData;

    return(

        <div>
        {videoUrl!="" ? (
            <iframe
                width="560"
                height="315"
                src={videoUrl}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        ) : (
            <p>No video available</p>
        )}
       </div>
    );
}

export default VideoComp;