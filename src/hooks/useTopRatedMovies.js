import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../../utils/moviesSlice";
import { API_OPTION } from "../../utils/mockedData";
import { useEffect } from "react";
const useTopRatedMovies = ()=>{
    const dispatch = useDispatch();
     //fetching popular movies
     const getTopRatedMovies= async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", API_OPTION)
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results))
        console.log(json.results);
    }
    useEffect(()=>{
        getTopRatedMovies();
       

    },[])
 

}
export default useTopRatedMovies;