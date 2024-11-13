import MovieCard from "./MovieCard";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React,{useRef} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { CleanHands } from "@mui/icons-material";

const MovieList = ({title,movies})=>{
  
    const scrollRef = useRef(null);
    const handleBack = ()=>{
        console.log("handleback");
        if(scrollRef.current){
            scrollRef.current.scrollBy({left:-300,behavior:"smooth"})
        }
       

    }
    const handleForward = ()=>{
        console.log("handleForward");
        console.log(scrollRef.current);
        if(scrollRef.current){
            scrollRef.current.scrollBy({left:300,behavior:"smooth"})
        }
        
    }
    
    return (
        <>
        <h1 className="text-xl mx-8 font-bold text-white">{title}</h1> 
        <div className="flex">
              <span className="flex text-white cursor-pointer h-8  my-auto ">
                 <ArrowBackIcon onClick={handleBack}/>
              </span> 

            <div className=" MovieCardContainer flex overflow-x-auto scrollbar-hide" 
              style={{maxWidth:"100vw"}} ref={scrollRef}>
           
            {movies && movies?.map((movie)=>(
                
               <div className="flex"  > <MovieCard key={movie.id} posterPath={movie.poster_path}/> </div>
                   
                   
             )) }
               
             </div>
             <span className=" text-white cursor-pointer h-8  my-auto "><ArrowForwardIcon onClick={handleForward}/></span> 
             
             </div>

    </>     
    )
   
       
   
}
export default MovieList;




