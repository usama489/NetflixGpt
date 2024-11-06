import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTION } from "../../utils/mockedData";


// hook is nothing but a javascript function
const useNowPlayingMovies = ()=>{

    //fetch Data from Movies API and Update stored movies
    const dispatch = useDispatch();

    const getNowPlayingMovies =async  ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",API_OPTION)
        const json = await data.json();
        // console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));

        

        


    };
    useEffect(()=>{
        getNowPlayingMovies();

    },[])

};
export default useNowPlayingMovies;