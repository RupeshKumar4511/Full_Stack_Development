import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './counter';
import privacySlice from './privacy'


const counterStore = configureStore({
  reducer:{counter:counterSlice.reducer,
    Privacy:privacySlice.reducer
  }
 
});


export default counterStore;


