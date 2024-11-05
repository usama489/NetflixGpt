import { createBrowserRouter,RouterProvider } from "react-router-dom";

import Login from "./Login";
import Browse from "./Browse";

// Body is a parent component and inside Body component we cannot navigate only we can navigate in child component
const Body = ()=>{
    
    const appRouter = createBrowserRouter(
        [
            {
                path:"/",
                element:<Login/> // NOT AUTHENTICATED
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
    //this code is to check authentication when loggedin it will setup store also adn logged out remove user.
    //but i wanna fix bug that user cannot goto browse page directly without login for that we navigate when signin or signout
    //but navigate cannot use in Body comp bcoz of parent so we used in Header bcoz Header 38 will be availabel alobg with
    //all components

   

    return(
        <div><RouterProvider router={appRouter}/></div>
    )
}
export default Body;