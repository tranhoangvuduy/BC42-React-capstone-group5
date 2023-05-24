import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiSignup } from "../API/userAPI";

export const signup = createAsyncThunk("user/signup", async (values) => {
    const data = await apiSignup(values)
    return data.content
});

const initialState = {
    user: null,
    isLoading: false, 
    error: null,
}

const userSignup = createSlice({
    name: "signup", 
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder.addCase(signup.pending, (state) => {
            return {...state, isLoading: true, error: null};
        })
        builder.addCase(signup.fulfilled, (state,action) => {
            return {...state, isLoading: false, user: action.payload}
        })
        builder.addCase(signup.rejected, (state,action) => {
            return {...state, isLoading: false, error: action.error.message}
        })
    }
})

export default userSignup.reducer;