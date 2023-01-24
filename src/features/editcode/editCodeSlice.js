import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import editCodeServices from "./editCodeServices";

const initialState = {
  isLoading: false,
  title: "",
  code: "",
  id: "",
  isPublic: false,
  show: false,
  success: false,
};

export const getFullCode = createAsyncThunk(
  "editCode/getFullCode",
  async (states) => {
    try {
      const res = await editCodeServices.getFullCode(states);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const editCode = createAsyncThunk("editCode/editCode", async (states) => {
  try {
    const res = await editCodeServices.editCode(states);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const editCodeSlice = createSlice({
  name: "editCode",
  initialState,
  reducers: {
    showCode: (state, action) => {
      state.show = true;
      state.title = action.payload.title;
      state.id = action.payload.id;
      state.isPublic = action.payload.isPublic;
    },
    hideCode: (state) => {
      state.show = false;
    },
    changeVisibility: (state) => {
      console.log("visibility changed");
      state.isPublic = !state.isPublic;
    },
    changeTitle: (state, action) => {
      state.title = action.payload;
    },
    changeCode: (state, action) => {
      state.code = action.payload;
    },
  },
  extraReducers: {
    [getFullCode.pending]: (state) => {
        console.log("pending-getting full code");
        state.isLoading = true;
    },
    [getFullCode.fulfilled]: (state, action) => {
      console.log("done ✌️  getting full code");
      state.code = action.payload.code.code;
      state.success = action.payload.success;
      state.isLoading = false;
    },
    [getFullCode.rejected]: (state) => {
        console.log("an error occured while getting full code");
        state.isLoading = false;
    },
    [editCode.pending]: (state) => {
        console.log("pending-editing code");
        state.isLoading = true;
    },
    [editCode.fulfilled]: (state, action) => {
      console.log("done ✌️  editing code : ");
      state.isLoading = !action.payload.success;
    },
    [editCode.rejected]: (state) => {
        console.log("an error occured while editing code");
        state.isLoading = false;
    },
  },
});

export const { showCode, hideCode, changeVisibility, changeTitle, changeCode } =
  editCodeSlice.actions;
export default editCodeSlice.reducer;
