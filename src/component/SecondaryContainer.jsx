import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies && (
      <div className="bg-black">
        <div className="-mt-36 pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"UpComing Movies"} movies={movies.upComingMovies} />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;

// import MovieList from "./MovieList";
// import { useSelector} from "react-redux";

// const SecondaryContainer = ()=>{
//     const movies = useSelector(store=>store.movies.nowPlayingMovies);
//     // console.log(movies[0].poster_path);

//     return(
//         <div className="-mt-40 pl-10 z-10    bg-black  ">
//             {
//                 movies && movies.length>0 ?
//                  (
//                     <>

//                  <MovieList title={"Now Playing"} movies={movies} posterPath={movies[0]?.poster_path}/>
//                  <MovieList title={"Popular"} movies={movies} posterPath={movies[0]?.poster_path}/>
//                  <MovieList title={"Trending"} movies={movies} posterPath={movies[0]?.poster_path}/>
//                  </>

//                 ) :
//                  <p>Loading Movies...</p>
//                  }

//         </div>
//     )
// }
// export default SecondaryContainer;
