import lang from "../../utils/languageConstants"
import {useSelector} from "react-redux"
const GptSearchBar = () => {
  const config = useSelector((store)=>store.config.lang);

  return (
    <div className="w-screen h-screen flex justify-center my-32">
    <div className="container bg-black border-style  w-[50%] h-20 mx-auto flex justify-center items-center rounded-lg">
      <form className="h-14 min-w-[100%] flex   justify-center p-1">
        <input
          type="text"
          className="w-3/4 rounded-sm p-2"
          placeholder={lang[config].gptSearchPlaceholder}
        />
        <button className="text-white ml-2 bg-red-400 w-32 h-18 rounded-sm font-bold text-lg font-mono">{lang[config].search}</button>
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
  