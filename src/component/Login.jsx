import { BACKGROUND_IMAGE,NETFLIX_LOGO } from "../../utils/mockedData";
import { useState } from "react";
const Login = ()=>{
    const [isSignInForm,setIsSignInForm] = useState(true);
    return(
       
        <>
        <div className="relative ">
            <div className="h-24 absolute  flex w-full justify-between items-center z-10 ">
               <img className="h-16 " alt="logo image not available" src={NETFLIX_LOGO}/>
            </div>

           <div className="w-screen "></div>
               <img className="absolute " src={BACKGROUND_IMAGE} />
               <div class="relative flex justify-center items-center h-screen inset-0 bg-gradient-to-b from-slate-950  ">
                   <div class="bg-black h-[70%] w-[30%] text-white p-6 bg-opacity-65">
                    <h1 className="text-3xl  inline-block mx-[58px] mt-10 mb-5">{isSignInForm?"SignIn":"SignUp"}</h1>
                   <input type="text" placeholder="Email Address" className="flex w-[70%] p-2 mx-auto bg-gray-800 border-solid border-[1px] border-white rounded-lg text-white mb-5"></input>
                   <input type="password" placeholder="Password" className="flex w-[70%] p-2 mx-auto bg-gray-800 border-solid border-[1px] border-white rounded-lg mb-5"></input>
                   {!isSignInForm && <input type="text" placeholder="Name" className="flex w-[70%] p-2 mx-auto bg-gray-800 border-solid border-[1px] border-white rounded-lg mb-5"></input>}
                   <button className="bg-red-500 p-2 rounded-md w-[70%] flex mx-auto justify-center ">{isSignInForm?"SignIn":"SignUp"}</button>
                   <h3 className="w-[70%] mt-5 flex justify-center mx-auto">Forgot password?</h3>
                   <input  className="ml-14 mt-5"  type="checkbox" id="remember" name="remember" value="RememberMe"/>
                   <label className="" for="remember"> Rememeber me</label>
                   <h3 className="text-gray-500 w-[70%] mt-5 flex mx-auto">{isSignInForm?"New to Netflix":"Already registered?"}
                    <span onClick={()=>{setIsSignInForm(!isSignInForm)} }className="text-white ml-1 cursor-pointer">{isSignInForm?"SignUp now":"SignIn Now"}</span> </h3>
                </div>
            </div>
            
          
        </div>
        
            
        
        </>
    )
}
export default Login;