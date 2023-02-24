import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import searchUserServices from "./searchUserServices";

const initialState = {
  isLoading: false,
  success: false,
  error: "",
  codes: [],
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

const searchUserSlice = createSlice({
  name: "searchUser",
  initialState,
  reducers: {},
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
    },
    [searchUser.rejected]: (state, action) => {
      console.log(
        "-------------------- error has occured while getting codes ------------"
      );
      state.isLoading = false;
      state.error = action.payload.error;
    },
  },
});

export default searchUserSlice.reducer;
