import { createBrowserRouter,RouterProvider } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Browse from "./Browse";



const Body = ()=>{
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

    return(
        <div><RouterProvider router={appRouter}/></div>
    )
}
export default Body;