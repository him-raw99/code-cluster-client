import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
  isLoading: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    submitDetails: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.isLoading = true;
    },
  },
});

console.log(loginSlice);

export const { submitDetails } = loginSlice.actions;
export default loginSlice.reducer;
