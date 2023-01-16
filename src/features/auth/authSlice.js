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
    } catch (err) {
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
      console.log(error);
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
      console.log("pending-login.....");
    },

    [sendLoginData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLogin = action.payload.isLogin;

      if (action.payload.isLogin) {
        state.token = action.payload.token;
      }

      state.message = action.payload.message;
      console.log("done✌️-login");
    },

    [sendLoginData.rejected]: (state) => {
      state.isLoading = false;
      console.log("------------ some error occured while login -------------");
    },
    [sendSignupData.pending]: (state) => {
      state.isLoading = true;
      console.log("pending-signup.....");
    },

    [sendSignupData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLogin = action.payload.isLogin;

      if (action.payload.isLogin) {
        state.token = action.payload.token;
      }

      state.message = action.payload.message;
      console.log("done✌️-signup");
    },

    [sendSignupData.rejected]: (state) => {
      state.isLoading = false;
      console.log("------------ some error occured while signing up -------------");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
