import { useEffect } from "react"
import { API_OPTION } from "../../utils/mockedData"
import { addUpComingMovies } from "../../utils/moviesSlice"
import { useDispatch } from "react-redux"

const useUpComingMovies = ()=>{
    const dispatch = useDispatch();
    const getUpComingMovies = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming",API_OPTION)
        const json = await data.json()
        dispatch(addUpComingMovies(json.results))
    }
    useEffect(()=>{
        getUpComingMovies();
    },[])
}
export default useUpComingMovies;