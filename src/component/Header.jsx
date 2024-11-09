import { NETFLIX_LOGO, PHOTO_URL, SUPPORTED_LANGUAGES } from "../../utils/mockedData";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../../utils/firebase";
import { removeUser } from "../../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect,useState } from "react";
import { addUser } from "../../utils/userSlice";
import { toggleGptSearchView } from "../../utils/gptSlice";
import { changeLanguage } from "../../utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);
  // console.log(showGptSearch);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  //my header can be loaded multiple times in a single section so, it will keep attaching event listener in a browser
  //it kind of put onAuthStateChanged called eeverytime useEffect called.but when my component unmount is should subscribe
  // the store.
  //onAuthStateChanged return unSubscribe function which remove user when component unmount
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
          navigate("/browse")
          // ...
        } else {
          // User is signed out
          console.log("signed out");
          dispatch(removeUser())
          navigate("/")
        }
      });
      //unSubscribe when component unMount.
      return ()=>unSubscribe();

},[])

const handleGptSearchClick = ()=>{
  //Togle Gpt Search Button
  dispatch(toggleGptSearchView())
}

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        // Sign-out successfull
        // dispatch(removeUser());
        // navigate("/login");
      })
      .catch((error) => {
        console.log("signout button failed to signout a user");
      });
  };
  // console.log(user);
  const handleLanguageChange = (e)=>{
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value))
   
  }



  return (
   
      

    <div className="h-24 absolute flex w-full justify-between items-center z-10 inset-0 bg-gradient-to-b from-slate-950 ">
      <div> <img className="h-16" alt="logo image not available" src={NETFLIX_LOGO} /></div>
    
      <div className=" flex justify-center items-center  ">
 
          {user || user?.displayName === true ? (
            <>
            {showGptSearch &&
           
              <select className="" onChange={handleLanguageChange}>
                {
                  SUPPORTED_LANGUAGES.map((lang)=> <option key = {lang.identifier} value={lang.identifier}>{lang.name}</option>
                 )
                }
             
            </select>
              }

         
                

            
          
            <button className="text-white bg-purple-400 h-10 w-20 rounded-sm mr-2" onClick={handleGptSearchClick}>{showGptSearch?"HomePage":"GptSearch"}</button>
             <img className="  h-10 w-10 mr-2 " src={PHOTO_URL}/>
              <button onClick = {handleSignOut} className="text-lg text-black my-auto mr-4 w-20 font-bold border-solid bg-white rounded-xl h-10">
               Signout
            </button>
           
            </>
          ):(
            <Link to="/login"><button>SignIn</button></Link>
          )}
   
          </div>
         
    </div>
    
  
  );
};

export default Header;
