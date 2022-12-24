import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    password: "",
    name: "",
    isLoading:false
};

const signupSlice = createSlice({
    name: "signup",
    initialState,
});

export default signupSlice.reducer;