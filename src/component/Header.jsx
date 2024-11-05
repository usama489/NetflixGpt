// import {NETFLIX_LOGO } from "../../utils/mockedData";
// import { Link } from "react-router-dom";
// import { useSelector,useDispatch } from "react-redux";

// const Header = ()=>{
//     const user = useSelector((state)=>state.user);
//     console.log(user);

//     return(
//         <div className="h-24 absolute  flex w-full justify-between items-center z-10  inset-0  bg-gradient-to-b
//          from-slate-950">
//             <img className="h-16 " alt="logo image not available" src={NETFLIX_LOGO}/>
//             <Link to="/login">
//             <button className="text-lg my-auto mr-4 w-20 font-bold border-solid bg-white rounded-xl h-10">SignIn</button>
//             </Link>

//         </div>
//     )
// }
// export default Header;

// Header.js
import { NETFLIX_LOGO } from "../../utils/mockedData";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../../utils/firebase";
import { removeUser } from "../../utils/userSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        // Sign-out successfull
        dispatch(removeUser());
        navigate("/login");
      })
      .catch((error) => {
        console.log("signout button failed to signout a user");
      });
  };
  console.log(user);

  return (
    <>
      

    <div className="h-24 absolute flex w-full justify-between items-center z-10 inset-0 bg-gradient-to-b from-slate-950 ">
      <div> <img className="h-16" alt="logo image not available" src={NETFLIX_LOGO} /></div>
    
      <div className=" flex justify-center items-center ">
 
          {user?.displayName!== null && user ? (
            <>
            <img className="  h-10 w-10 mr-2 " src={user?.photoURL}/>
            
            
            <button
              onClick={handleSignOut}
              className="text-lg text-black my-auto mr-4 w-20 font-bold border-solid bg-white rounded-xl h-10"
            >
              SignOut
            </button>
           
            </>
            
          ) : (
           
            <Link to="/login">
              <button className="text-lg my-auto mr-4 w-20 font-bold border-solid bg-white rounded-xl h-10">
                SignIn
              </button>
            </Link>
            
          )}
          </div>
    </div>

      
      
      
        </>
  
  );
};

export default Header;
