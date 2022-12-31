import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authServices from "./authServices";

const token = localStorage.getItem("token");

const initialState = {
  token: token ? token : "",
  message: "",
  isLogin: token ? true : false,
  isLoading: false,
};


export const sendLoginData = createAsyncThunk(
  "login/postLoginData",
  async (userData) => {
    try {
      const res = await authServices.login(userData);
      return res.data;
    } catch (error) {
      console.log(err);
    }
  }
);

export const sendSignupData = createAsyncThunk(
  "login/postSignupData",
  async (userData) => {
    try {
      const res = await authServices.signup(userData);
      return res.data;
    } catch (error) {
      console.log(err);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = "";
      state.isLogin = false;
      state.message = "Logged out";
      authServices.logout();
    },
  },
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
      console.log("done✌️");
    },

    [sendLoginData.rejected]: (state) => {
      state.isLoading = false;
      console.log("------------ some error occured -------------");
    },
    [sendSignupData.pending]: (state) => {
      state.isLoading = true;
      console.log("pending.....");
    },

    [sendSignupData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLogin = action.payload.isLogin;

      if (action.payload.isLogin) {
        state.token = action.payload.token;
      }

      state.message = action.payload.message;
      console.log("done✌️");
    },

    [sendSignupData.rejected]: (state) => {
      state.isLoading = false;
      console.log("------------ some error occured -------------");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
