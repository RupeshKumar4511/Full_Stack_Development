import { createSlice } from "@reduxjs/toolkit";
const privacySlice = createSlice({
    name:"Privacy",
    initialState:false,
    reducers:{
      toggle:(state)=>{
        return state= !state
        
      }
    }
  });


export const privacyActions = privacySlice.actions;

export default privacySlice;