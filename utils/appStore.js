import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice"
import moviesReducer from "../utils/moviesSlice"

const appStore = configureStore(
    {
        //app reducer
        reducer:{
            //contain each slice reducer
            user:userReducer,
            movies:moviesReducer,

        },
    }
);
export default appStore;
