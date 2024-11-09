import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({movieId})=>{
    const trailerVideo = useSelector(store=>store.movies?.trailerVideo)
    // console.log(movieId)
    useMovieTrailer(movieId);
  
    return(
        <div className="mb-120">
            <iframe className="h-screen aspect-video  w-full  " src={"https://www.youtube.com/embed/" + trailerVideo?.key+"?&autoplay=1&mute=1&rel=0&modestbranding=1&showinfo=0&controls=0"}
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
             
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 pointer-events-none"></div>
             </div>
        
    )
}
export default VideoBackground; 