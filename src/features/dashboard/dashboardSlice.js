import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import dashboardServices from "./dashboardServices"

const initialState = {
  isLoading: false,
  codes: [],
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

const dashboardSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [getCode.pending]:(state)=>{
        state.isLoading = true;
        console.log("pending-getting-codes...");
    },
    [getCode.fulfilled]:(state,action)=>{
      state.codes=action.payload.codes;
      state.isLoading = false;
      state.success=true,
      console.log("done✌️-getting-codes");
    },
    [getCode.rejected]:(state)=>{
        state.isLoading = false;
        console.log("-------------------- error has occured while getting codes ------------");
    }
  },
});

export const {} = dashboardSlice.actions;
export default dashboardSlice.reducer;
