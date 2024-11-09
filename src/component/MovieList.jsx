import MovieCard from "./MovieCard";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React,{useRef} from "react";

const MovieList = ({title,movies})=>{
    const scrollRef = useRef(null);
    const handleBack = ()=>{
        if(scrollRef.current){
            scrollRef.current.scrollBy({left:-200,behavior:"smooth"})
        }
       

    }
    const handleForward = ()=>{
        if(scrollRef.current){
            scrollRef.current.scrollBy({left:200,behavior:"smooth"})
        }
        
    }
    
    return (
        <div className="title w-full flex-nowrap">
            <h1 className="text-xl mx-8 font-bold text-white">{title}</h1>

        <div className="MovieListContainer  flex items-center  -ml-7  w-full">
            <span className="flex text-white cursor-pointer h-8  my-auto "><ArrowBackIcon onClick={handleBack}/></span>
            {/* scrollbar movie card container */}
            <div className="MovieCardContainer flex  overflow-x-hidden scrollbar-hide   " ref={scrollRef}>
            
              
                <div className="flex ml-2  mt-2">
                
                  
               {movies && movies?.map((movie)=>(<MovieCard key={movie.id} posterPath={movie.poster_path}/>)) }
              
           

            </div>
           
           
            </div>
            <span className="flex  text-white h-8  my-auto cursor-pointer "><ArrowForwardIcon onClick={handleForward}/></span>
            

        </div>
        </div>
    )
   
       
   
}
export default MovieList;
