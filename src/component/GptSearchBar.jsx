import lang from "../../utils/languageConstants"
import {useDispatch, useSelector} from "react-redux";
import {useRef} from "react";
import client from "../../utils/client"
import { API_OPTION } from "../../utils/mockedData";
import { addGptMovieResult } from "../../utils/gptSlice";

const GptSearchBar = () => {
  // const dispatch = useDispatch();

  const langKey = useSelector((store)=>store.config.lang);
  const searchText = useRef(null)
  const gptQuery = "act as movie recommendation system and suggest some movies for the query: " + searchText?.current?.value + ". only give me names of 5 movies, comma separated like the example result given ahead.Example Result: Gadar, Koi Mil Gaya, Don, Sholay, Mai hoon na";
  const searchMovieTMDB = async (movie)=>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTION)
    const json = await data.json();
    return json.results;
  }


  const handleGptSearchClick = async  ()=>{
    const gptResults = await client.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',

  });
  // const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
  // const promiseArray = gptMovies.map(movie=>searchMovieTMDB(movie))
  //[Promise, Promise, Promise, Promise, Promise]
  // const tmdbResults = await Promise.all(promiseArray)
  // dispatch(addGptMovieResult);
  


}; 

  return (
    <div className="w-screen h-screen flex justify-center my-32">
    <div className="container bg-black border-style  w-[50%] h-20 mx-auto flex justify-center items-center rounded-lg">
      <form className="h-14 min-w-[100%] flex   justify-center p-1" onSubmit = {(e)=>e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="w-3/4 rounded-sm p-2"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="text-white ml-2 bg-red-400 w-32 h-18 rounded-sm font-bold text-lg font-mono" onClick={handleGptSearchClick}>{lang[langKey].search}</button>
        {/* when we click on button it bydefault submit the form means its refresh also */}
      </form>
    </div>
    </div>
  );
};
export default GptSearchBar;

















// const GptSearchBar = () => {
//     return (
//       <div className="flex items-center justify-center min-h-screen  border-2 border-green-400">
//         <div className="container bg-black border-2 border-green-400 w-[50%] h-24 flex justify-center items-center">
//           <form className="h-16 w-full flex border-2 border-red-400 justify-center">
//             <input
//               type="text"
//               className="w-3/4 rounded-sm"
//               placeholder="What would you like to watch today?"
//             />
//             <button className="text-white ml-2 bg-red-400 w-32 h-18 rounded-sm">Search</button>
//           </form>
//         </div>
//       </div>
//     );
//   };
  
//   export default GptSearchBar;
  