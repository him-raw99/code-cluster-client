import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import editCodeServices from "./editCodeServices";

const initialState={
    isLoading:false,
    codeState:{},
    backToDashboard:false,
    err:"",
    delete:false,
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

export const updateCode = createAsyncThunk("editCode/updateCode", async(state)=>{
    try{
        const res = await editCodeServices.updateCode(state);
        return res.data;
    }
    catch(err){
        console.log(err);
    }
})

export const newCode = createAsyncThunk("editCode/newCode", async(state)=>{
    try{
        const res = await editCodeServices.newCode(state);
        return res.data;
    }
    catch(err){
        console.log(err);
    }
})

export const deleteCode = createAsyncThunk("editCode/deleteCode", async(state)=>{
    try{
        const res = await editCodeServices.deleteCode(state);
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
        reset:(state)=>{
            state.isLoading=false;
            state.codeState={};
            state.backToDashboard=false;
            state.err="";
        },
        close:(state)=>{
            state.backToDashboard=!state.backToDashboard;
            state.isLoading=!state.isLoading;
        },
        deleteModal:(state)=>{
            state.delete = !state.delete;
        }
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
        [updateCode.pending]:(state)=>{
            state.isLoading=true;
        },
        [updateCode.fulfilled]:(state,action)=>{
            console.log("done✌️-updating-full-code");
            console.log(action.payload);
            state.isLoading=false;
            state.backToDashboard = action.payload.success;
        },
        [updateCode.rejected]:(state)=>{
            state.isLoading=false;
            console.log("-------------------- error has occured while updating codes ------------");
        },
        [newCode.pending]:(state)=>{
            state.isLoading=true;
        },
        [newCode.fulfilled]:(state,action)=>{
            console.log("done✌️-posting-new-code");
            state.isLoading=false;
            state.err=action.payload.message;
            state.backToDashboard = action.payload.success;
        },
        [newCode.rejected]:(state)=>{
            state.isLoading=false;
            console.log("-------------------- error has occured while posting new codes ------------");
        },
        [deleteCode.pending]:(state)=>{
            state.isLoading=true;
        },
        [deleteCode.fulfilled]:(state,action)=>{
            console.log("done✌️-deleting-code");
            state.isLoading=false;
            console.log(action.payload);
            state.backToDashboard = action.payload.success;
        },
        [deleteCode.rejected]:(state)=>{
            state.isLoading=false;
            console.log("-------------------- error has occured while deleting codes ------------");
        },
    },
})


export const {reset , close , deleteModal} = editCodeSlice.actions;
export default editCodeSlice.reducer;