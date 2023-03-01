import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import dashboardServices from "./dashboardServices"

const initialState = {
  isLoading: false,
  codes: [],
  profile:{},
  success:false,
};

export const getCode = createAsyncThunk("dashboard/getAllCodes", async(token)=>{
    try{
        const res = await dashboardServices.getCodes(token);
        return res.data ;
    }
    catch(err){
        console.log(err);
    }
});


export const getProfile = createAsyncThunk("dashboard/getAllProfile", async(token)=>{
    try{
        const res = await dashboardServices.getProfile(token);
        return res.data ;
    }
    catch(err){
        console.log(err);
    }
});

const dashboardSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset:(state)=>{
      state.codes=[];
    }
  },
  extraReducers: {
    [getCode.pending]:(state)=>{
        state.isLoading = true;
        console.log("pending-getting-codes...");
    },
    [getCode.fulfilled]:(state,action)=>{
      state.codes=action.payload.codes;
      state.isLoading = false;
      state.success=action.payload.success,
      console.log("done✌️-getting-codes");
    },
    [getCode.rejected]:(state)=>{
        state.isLoading = false;
        console.log("-------------------- error has occured while getting codes ------------");
    },
    [getProfile.pending]:(state)=>{
        state.isLoading = true;
        console.log("pending-getting-profile...");
    },
    [getProfile.fulfilled]:(state,action)=>{
      const profile = {email:action.payload.email,username:action.payload.username,viewCount:action.payload.viewCount,numberOfCodes:state.codes.length};
      state.profile = profile;
      state.success=action.payload.success,
      state.isLoading = false;
      console.log("done✌️-getting-profile");
    },
    [getProfile.rejected]:(state)=>{
        state.isLoading = false;
        console.log("-------------------- error has occured while getting profile ------------");
    }
  },
});

export const {reset} = dashboardSlice.actions;
export default dashboardSlice.reducer;
