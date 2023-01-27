import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoading:false,
    codeState:{},
    token:"",
    id:"",
}

const editCodeSlice = createSlice({
    name:"editCodeSlice",
    initialState,
    reducers:{
        editCode:(state,action)=>{
            state.codeState = action.payload;
        },
        setToken:(state,action)=>{
            state.token=action.payload;
        },
        setId:(state,action)=>{
            state.id=action.payload;
        },
    },
    extraReducers:{},
})


export const {editCode , setToken , setId} = editCodeSlice.actions;
export default editCodeSlice.reducer;