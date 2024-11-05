import { createBrowserRouter,RouterProvider } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Browse from "./Browse";
import {onAuthStateChanged} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser,removeUser } from "../../utils/userSlice";


const Body = ()=>{
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter(
        [
            {
                path:"/",
                element:<SignUp/> // NOT AUTHENTICATED
            },
            {
                path:"/login",    // USER CLICKED ON SIGNUP BUTTON OF HOMEPAGE
                element:<Login/>
            },
            {
                path:"/browse",   // AUTHENTICATED USER
                element:<Browse/>
            }
        ]

    )
    /* we can dispath action when user signin in Login.jsx or when user signup but disptahcing action again
    an again is not a recommended way instaed of that we should use onAuthStateChanged given by firebase
    it will aware about signin and signout means whenerver authentication state get change.*/
    //but i want to run this ony once at initial for that using useEffect
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayName,photoURL} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
              // ...
            } else {
              // User is signed out
              dispatch(removeUser())
            }
          });

    },[])
   

    return(
        <div><RouterProvider router={appRouter}/></div>
    )
}
export default Body;