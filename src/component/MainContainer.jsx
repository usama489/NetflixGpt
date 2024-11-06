import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = ()=>{
    //fetching 20 movie data
    const movies = useSelector(store=>store.movies?.nowPlayingMovies);
    // console.log(movies);

    //rid of earling returning
    if (!movies || movies.length === 0) {
        return <div>Loading...</div>; // or any fallback UI
    }

    const mainMovie = movies[0];
    // console.log(mainMovie);

    // Destructure properties safely
    const { original_title, overview,id } = mainMovie || {};
    // console.log(id);
    return(
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id}/>
        </div>
    )
}
export default MainContainer;