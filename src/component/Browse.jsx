import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer";
import Header from "./Header";
import { useEffect } from "react";



const Browse = ()=>{

useNowPlayingMovies(); //fetching 20 bmovies succesfully




    
    return(
        <div className="">
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
           
       
        </div>


    )
}
export default Browse;