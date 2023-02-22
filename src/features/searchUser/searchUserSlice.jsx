import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import searchUserServices from "./searchUserServices";

const initialState = {
    user:[],
    isLoading:false,
    success:false,
    error:"",
}

export const searchUser = createAsyncThunk("searchUserSlice/searchUser",async(state)=>{
    try {
        const res = await searchUserServices.searchUser(state);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
})

const searchUserSlice = createSlice({
    name:"searchUser",
    initialState,
    reducers:{},
    extraReducers:{},
})

export default searchUserSlice.reducer; 