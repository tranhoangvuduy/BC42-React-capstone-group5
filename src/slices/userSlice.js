import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiSignin } from "../API/userAPI";

export const signin = createAsyncThunk("user/signin", async (values) => {
    try {
        const data = await apiSignin(values)
        
        localStorage.setItem("user", JSON.stringify(data.content));

        return data.content
    } catch (error) {
        throw error.response?.data?.content
    }
});

const initialState = {
    user: localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")) : null,
    isLoading: false, 
    error: null,
}

const userSlice = createSlice({
    name: " user", 
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder.addCase(signin.pending, (state) => {
            return {...state, isLoading: true, error: null};
        })
        builder.addCase(signin.fulfilled, (state,action) => {
            return {...state, isLoading: false, user: action.payload}
        })
        builder.addCase(signin.rejected, (state,action) => {
            return {...state, isLoading: false, error: action.error.message}
        })
    }
})

export default userSlice.reducer;