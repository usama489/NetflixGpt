import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer";
import Header from "./Header";
import useUpComingMovies from "../hooks/useUpComingMovies";



const Browse = ()=>{

useNowPlayingMovies(); //fetching 20 bmovies succesfully
useTopRatedMovies();   //fetching Top Rated Movies
useUpComingMovies();




    
    return(
        <div className="">
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
           
       
        </div>


    )
}
export default Browse;