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
      console.log(import.meta.env.VITE_API);
      axios
        .get(import.meta.env.VITE_API)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});

export const { submitDetails } = loginSlice.actions;
export default loginSlice.reducer;