import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice"

const appStore = configureStore(
    {
        //app reducer
        reducer:{
            //contain each slice reducer
            user:userReducer,

        },
    }
);
export default appStore;
