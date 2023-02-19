import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:[],
    isLoading:false,
    success:false,
    error:"",
}

const searchUserSlice = createSlice({
    name:"searchUser",
    initialState,
    reducers:{},
    extraReducers:{},
})

export default searchUserSlice.reducer; 