import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import editCodeServices from "./editCodeServices";

const initialState={
    isLoading:false,
    codeState:{},
}

export const getFullCode = createAsyncThunk("editCode/getFullCode", async(state)=>{
    try{
        const res = await editCodeServices.getFullCode(state);
        return res.data;
    }
    catch(err){
        console.log(err);
    }
})

const editCodeSlice = createSlice({
    name:"editCodeSlice",
    initialState,
    reducers:{
        editCode:(state,action)=>{
            state.codeState = action.payload;
        },
    },
    extraReducers:{
        [getFullCode.pending]:(state)=>{
            state.isLoading=true;
        },
        [getFullCode.fulfilled]:(state,action)=>{
            console.log("done✌️-getting-full-code");
            state.codeState = action.payload.code;
            state.isLoading=false;
        },
        [getFullCode.rejected]:(state)=>{
            state.isLoading=false;
            console.log("-------------------- error has occured while getting codes ------------");
        },
    },
})


export const {editCode , setToken , setId} = editCodeSlice.actions;
export default editCodeSlice.reducer;