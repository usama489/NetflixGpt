import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_IMAGE } from "../../utils/mockedData";

//Gpt Search Page
const GptSearch = ()=>{
    
    return(
        <>
        <div className="relative overflow-x-hidden ">
           {/* <GptSearch/> */}
           <img className="absolute -z-10  h-full w-screen  border-style border-2 border-red-400 " src={BACKGROUND_IMAGE} />
           <GptSearchBar/>
           <GptMovieSuggestion/>
           
           

        </div>

        </>

    )
}
export default GptSearch;