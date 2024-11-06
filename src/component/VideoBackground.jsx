import { API_OPTION } from "../../utils/mockedData";
import { useEffect } from "react";

const VideoBackground = ({movieId})=>{
    //fetch trailer video-->need api call-->need movie id
    // console.log(movieId);
    const getMovieVideos = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/1034541/videos?language=en-US",API_OPTION)
        const json = await data.json();
        // console.log(json.results);
        const filterData = json.results.filter((items)=>items.type == "Trailer");
        // filterData length is not 0 means it exist
        //so, trailer exist so display it otherwise display any video clip present in result
        const trailer = filterData.length?filterData[0] : json.results[0];
        console.log(trailer);
    }
    useEffect(()=>{
        getMovieVideos();
    },[])
    return(
        <div></div>
    )
}
export default VideoBackground;