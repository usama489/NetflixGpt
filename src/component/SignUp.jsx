import Header from "./Header";
import { BACKGROUND_IMAGE } from "../../utils/mockedData";
const HomePage = () => {
  return (
    <>
    <div className="relative">
      <Header />

      <div className="absolute inset-0 bg-gradient-to-t from-black opacity-60"></div>

      <img src={BACKGROUND_IMAGE} />

      <div className="  absolute top-40 left-[30rem] h-[25rem] w-[36%] mx-auto border-solid border-2 border-white text-white ">
        <h1 className="text-5xl font-extrabold  text-center">
          Unlimited movies, TV shows and more
        </h1>
        <p className="text-center mt-4 font-bold leading-6">
          Starts at ₹149. Cancel at any time.
        </p>
        <h3 className="leading-6 font-normal">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className="flex justify-center mt-4">
          <input
            type="email"
            placeholder="Enter Email address"
            className="text-[1rem] w-[50%] h-12 border-solid border-2 border-black bg-black rounded-lg p-3"
          />
          <button className="ml-4 border-solid bg-red-600 h-10 w-15 rounded-lg p-2 font-normal my-auto">
            Get Started
          </button>
        </div>
      </div>
    </div>
    {/* --------------------------------------------------------------------------------------------------------------- */}
    <div className="bg-black text-white h-screen  border-solid border-2 border-red-600 ">
        <div className="w-[80%] mx-auto  border-solid border-2 border-green-500 mt-4">
        <h2 className="mt-0 mb-4">Trending Now</h2>
        {/* <TrendingNow/>
      <span className="inline-block h-56 ml-4 w-40 border-solid border-2 border-white">usama</span>
      <span className="inline-block h-56 ml-4 w-40 border-solid border-2 border-white">talha khan</span> */}

        </div>
      
      {/* <div className="bg-black">
         <label className="" for="country"></label>
         <select classname="bg-red-700" id="country">
           <option value="India">India</option>
           <option value="Global">Global</option>
         </select>


       </div> */}
 
    
    
      </div>


      
      


    </>
  );
};
export default HomePage;
