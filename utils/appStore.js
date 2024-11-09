import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice"
import moviesReducer from "../utils/moviesSlice"
import gptReducer from "../utils/gptSlice"
import configReducer from "../utils/configSlice"


const appStore = configureStore(
    {
        //app reducer
        reducer:{
            //contain each slice reducer
            user:userReducer,
            movies:moviesReducer,
            gpt:gptReducer,
            config:configReducer,

        },
    }
);
export default appStore;
