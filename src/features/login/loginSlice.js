import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  token: "",
  isLoading: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    submitDetails: (state, action) => {
      state.isLoading = true;
      axios.get(import.meta.env.VITE_API).then((res)=>{console.log(res)});
    },
  },
});

export const { submitDetails } = loginSlice.actions;
export default loginSlice.reducer;
