import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://code-cluster-api.onrender.com";

const initialState = {
  token: "",
  message:"",
  isLogin: false,
  isLoading: false,
};



// sending login request 

export const sendLoginData = createAsyncThunk(
  "login/postLoginData",
  async (userData) => {
    try {
      const res = await axios.post(url + "/login", userData);
      return res.data;
    } catch (error) {
      console.log(err);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [sendLoginData.pending]: (state) => {
      state.isLoading = true;
      console.log("pending.....");
    },
    [sendLoginData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLogin = action.payload.isLogin;
      if (action.payload.isLogin) {
        state.token = action.payload.token;
      }
      state.message = action.payload.message;
      console.log(action);
    },
    [sendLoginData.rejected]: (state) => {
      state.isLoading = false;
      console.log("------------ some error occured -------------")
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
