import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import searchUserServices from "./searchUserServices";

const initialState = {
  isLoading: false,
  success: false,
  error: "",
  codes: [],
  code:{},
};

export const searchUser = createAsyncThunk(
  "searchUserSlice/searchUser",
  async (state) => {
    try {
      const res = await searchUserServices.searchUser(state);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const searchFullCode = createAsyncThunk(
  "searchUserSlice/searchFullCode",
  async (state) => {
    try {
      const res = await searchUserServices.searchFullCode(state);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const searchUserSlice = createSlice({
  name: "searchUser",
  initialState,
  reducers: {
    reset:(state)=>{
      state.error="";
    }
  },
  extraReducers: {
    [searchUser.pending]: (state) => {
      console.log("pending-getting-user...");
      state.isLoading = true;
    },
    [searchUser.fulfilled]: (state, action) => {
      console.log("done✌️-getting-user");
      state.isLoading = false;
      state.codes = action.payload.codes;
      state.success = action.payload.success;
      if(!state.success){
        state.error=action.payload.message;
      }
    },
    [searchUser.rejected]: (state, action) => {
      console.log(
        "-------------------- error has occured while getting users ------------"
      );
      state.isLoading = false;
      state.error = action.payload.error;
    },
    [searchFullCode.pending]: (state) => {
      console.log("pending-getting-users-full-code...");
      state.isLoading = true;
    },
    [searchFullCode.fulfilled]: (state, action) => {
      console.log("done✌️-getting-users-full-code");
      state.isLoading = false;
      state.code = action.payload.code;
      state.success = action.payload.success;
    },
    [searchFullCode.rejected]: (state, action) => {
      console.log(
        "-------------------- error has occured while getting codes ------------"
      );
      state.isLoading = false;
      state.error = action.payload.error;
    },
  },
});


export const {reset} = searchUserSlice.actions;
export default searchUserSlice.reducer;
