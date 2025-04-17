import { useRef } from 'react';
import {useDispatch} from 'react-redux';
import { counterActions } from '../store/counter';
import { privacyActions } from '../store/privacy';
export default function Controls(){

  const dispatch = useDispatch();
  const numberElement = useRef();

  const handleIncrement =()=>{
    dispatch(counterActions.Increment())
  }

  const handleDecrement =()=>{
    dispatch(counterActions.Decrement())
  }

  const handleAddition =()=>{
    dispatch(counterActions.Add({num:numberElement.current.value}))
    numberElement.current.value ="";
  }
  
  const handleSubstract =()=>{
    dispatch(counterActions.substract({num:numberElement.current.value}));
    numberElement.current.value ="";
  }

  const handlePrivacy =()=>{
    dispatch(privacyActions.toggle());
  }

 
    return (
        <div className="col-lg-6 mx-auto">
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={handleIncrement}>+1</button>
        <button type="button" className="btn btn-success btn-lg px-4" onClick={handleDecrement}>-1</button>

        <button type="button" className="btn btn-warning btn-lg px-4" onClick={handlePrivacy}>Privacy</button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-4">
      <input type="text" className="form-control" placeholder="Enter Number" ref={numberElement}/>
        <button type="button" className="btn btn-info btn-lg px-4 gap-3" onClick={handleAddition}>Add</button>
        <button type="button" className="btn btn-danger btn-lg px-4" onClick={handleSubstract}>Substract</button>

        
        
      </div>


    </div>
        
    )
}