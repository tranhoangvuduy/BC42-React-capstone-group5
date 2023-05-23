import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import movieReducer from "./Admin/Slices/movieSlice";
import theatherReducer from "./Admin/Slices/theaterSlice";

const store = configureStore({
    reducer: {
       user: userReducer,
       movieReducer:movieReducer,
       theatherReducer:theatherReducer,
    },
});
export default store;