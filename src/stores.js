import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import userRegister from "./slices/userSignup"

const store = configureStore({
    reducer: {
       user: userReducer,userRegister
    },
});

export default store;