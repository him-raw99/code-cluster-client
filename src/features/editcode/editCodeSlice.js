import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import editCodeServices from "./editCodeServices";

const token = localStorage.getItem("token");


const initialState = {
    isLoading:false,
    title:"",
    code:"",
    id:"",
    isPublic:false,
    show:false,
    token: token ? token : "",
    success:false,
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

const editCodeSlice = createSlice({
    name:"editCode",
    initialState,
    reducers:{
        showCode:(state,action)=>{
            state.show=true;
            state.title=action.payload.title;
            state.id=action.payload.id;
            state.isPublic=action.payload.isPublic;
        }
    },
    extraReducers:{
        [getFullCode.pending]:(state)=>{
            state.isLoading=true;
            console.log("pending-getting full code");
        },
        [getFullCode.fulfilled]:(state,action)=>{
            state.isLoading=false;
            console.log("done ✌️  getting full code");
            state.code=action.payload.code.code;
            
        },
        [getFullCode.rejected]:(state)=>{
            state.isLoading=false;
            console.log("an error occured while getting full code");
        },
    }
})

export const {showCode} = editCodeSlice.actions;
export default editCodeSlice.reducer;