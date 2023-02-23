import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import searchUserServices from "./searchUserServices";

const initialState = {
    isLoading:false,
    success:false,
    error:"",
    codes:[],
}

export const searchUser = createAsyncThunk("searchUserSlice/searchUser",async(state)=>{
    try {
        const res = await searchUserServices.searchUser(state);
        return res;
    } catch (error) {
        console.log(error);
    }
})

const searchUserSlice = createSlice({
    name:"searchUser",
    initialState,
    reducers:{},
    extraReducers:{
        [searchUser.pending]:(state)=>{
            state.isLoading=true;
        },
        [searchUser.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.codes = action.payload.data.codes;
            state.success = action.payload.data.success;
        },
        [searchUser.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error = action.payload.error;
        },
    },
})

export default searchUserSlice.reducer; 