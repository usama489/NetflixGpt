import { BACKGROUND_IMAGE, NETFLIX_LOGO } from "../../utils/mockedData";
import { checkValidData } from "../../utils/Validate";
import { useState, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
   
    if (message) return;

    if (!isSignInForm) {
      //signup logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/63952886?v=4"
          }).then(() => {
            // Profile updated!
            const {uid,email,displayName,photoURL} = auth.currentUser; //updated auth info of the current user
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
            navigate("/browse")
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message)
          });
         
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //signin logic
    
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-"+errorMessage);
        });
    }
  };
  return (
    <>
      <div className="relative">
          <Header/>
        </div>

        <div className="w-screen"></div>
        <img className="absolute h-screen w-screen " src={BACKGROUND_IMAGE} />
        <div className="h-screen relative flex justify-center items-center  inset-0 bg-gradient-to-b
         from-slate-950 ">
        
           
            <form onSubmit={(e) => e.preventDefault()} className=" w-96 min-h-96 mt-20 p-4 bg-gradient-to-t from-slate-950 ">
            <h1 className="text-3xl  inline-block mx-[58px] mt-10 mb-5 text-white">
              {isSignInForm ? "SignIn" : "SignUp"}
            </h1>
              <input
                ref={email}
                type="email"
                placeholder="Email Address"
                className="flex w-[70%] p-2 mx-auto bg-gray-800 border-solid border-[1px] border-white rounded-lg text-white mb-5"
              ></input>
              <input
                ref={password}
                type="password"
                placeholder="Password"
                className="flex w-[70%] p-2 mx-auto bg-gray-800 border-solid border-[1px] border-white rounded-lg mb-5"
              ></input>
              {!isSignInForm && (
                <input
                  ref={name}
                  type="text"
                  placeholder="Name"
                  className="flex w-[70%] p-2 mx-auto bg-gray-800 border-solid border-[1px] border-white rounded-lg mb-5"
                ></input>
              )}
              <p className="text-sm text-red-400 ml-10 mb-2">{errorMessage}</p>
              <button
                onClick={handleButtonClick}
                type="button"
                className="bg-red-500 p-2 rounded-md w-[70%] flex mx-auto justify-center "
              >
                {isSignInForm ? "SignIn" : "SignUp"}
              </button>
              <h3 className="w-[70%] mt-5 flex justify-center mx-auto text-white">
                Forgot password?
              </h3>
              <input
                className="ml-14 mt-5"
                type="checkbox"
                id="remember"
                name="remember"
                value="RememberMe"
              />
              <label className="text-white" htmlFor="remember">
                {" "}
                Rememeber me
              </label>
              <h3 className="text-gray-500 w-[70%] mt-5 flex mx-auto">
                {isSignInForm ? "New to Netflix" : "Already registered?"}
                <span
                  onClick={() => {
                    setIsSignInForm(!isSignInForm);
                  }}
                  className="text-white ml-1 cursor-pointer"
                >
                  {isSignInForm ? "SignUp now" : "SignIn Now"}
                </span>{" "}
              </h3>
            </form>
          </div>
        
    
    </>
  );
};
export default Login;
