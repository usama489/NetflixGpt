import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer";
import Header from "./Header";
import useUpComingMovies from "../hooks/useUpComingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import "./browse.css";


const Browse = ()=>{
   

    const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)
    console.log(showGptSearch);

useNowPlayingMovies(); //fetching 20 movies succesfully.
useTopRatedMovies();   //fetching Top Rated Movies.
useUpComingMovies();




    
    return(
        <div className="">
            <Header/>
            {
                 showGptSearch ? (<GptSearch/>) : (<><MainContainer/><SecondaryContainer/></>)

            }
           
            
           
       
        </div>


    )
}
export default Browse;