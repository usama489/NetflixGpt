import {NETFLIX_LOGO } from "../../utils/mockedData";
import { Link } from "react-router-dom";
import Login from "./Login";
const Header = ()=>{
    return(
        <div className="h-24 absolute border-solid border-2 border-x-red-50 flex w-full justify-between items-center z-10">
            <img className="h-16 " alt="logo image not available" src={NETFLIX_LOGO}/>
            <Link to="/login"><button className="text-lg my-auto mr-4 w-20 font-bold border-solid bg-white rounded-xl h-10">SignIn</button>
            </Link>
          
        </div>
    )
}
export default Header;
//ml-4 border-solid bg-red-600 h-10 w-15 rounded-lg p-2 font-normal my-auto
//text-lg my-auto mr-4 w-20 font-bold border-solid bg-white rounded-xl h-10 hover:cursor-pointer