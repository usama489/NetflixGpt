import MovieCard from "./MovieCard";
const MovieList = ({title,movies})=>{
    console.log(movies)
    
    return (
        <div className="">
              <h1 className="text-xl mx-2 font-bold text-white">{title}</h1>
            <div className="flex overflow-x-scroll">
              
                <div className="flex ml-2">
               {movies && movies?.map((movie)=>(<MovieCard key={movie.id} posterPath={movie.poster_path}/>)) }
           

            </div>
           
            </div>
            

        </div>
    )
   
       
   
}
export default MovieList;