import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { API_OPTION } from "../../utils/mockedData";
import { addTrailerVideo } from "../../utils/moviesSlice";
import { useEffect } from "react";
const useMovieTrailer = ()=>{
    const dispatch = useDispatch();
    const trailerVideo = useSelector(store=>store.movies?.trailerVideo)
    // 1.const [trailerKey,setTrailerKey] = useState();
    //fetch trailer video-->need api call-->need movie id
 
    const getMovieVideos = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/1034541/videos?language=en-US",API_OPTION)
        const json = await data.json();
        // console.log(json.results);
        const filterData = json.results.filter((items)=>items.type == "Trailer");
        // filterData length is not 0 means it exist
        //so, trailer exist so display it otherwise display any video clip present in result
        const trailer = filterData.length?filterData[0] : json.results[0];
        console.log(trailer);
        dispatch(addTrailerVideo(trailer))
        console.log(trailerVideo);
        // 2. setTrailerKey(trailer.key)
    }
    useEffect(()=>{
        getMovieVideos();
    },[])

}
export default useMovieTrailer;