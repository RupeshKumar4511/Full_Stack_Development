import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name:"counter",
    initialState:{countVal:0},
    reducers:{
      Increment:(state)=>{
         state.countVal++;
      },
      Decrement:(state)=>{
        state.countVal--;
      },
      Add:(state,action)=>{
        state.countVal += Number(action.payload.num);
      },
  
      substract:(state,action)=>{
        state.countVal -= Number(action.payload.num);
        
      },
  
    }
  })



export const counterActions = counterSlice.actions;
export default counterSlice;