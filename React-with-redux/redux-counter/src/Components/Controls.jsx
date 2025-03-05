import { useRef } from 'react';
import {useDispatch} from 'react-redux';
export default function Controls(){

  const dispatch = useDispatch();
  const numberElement = useRef();

  const handleIncrement =()=>{
    dispatch({type:'INCREMENT'})
  }

  const handleDecrement =()=>{
    dispatch({type:'DECREMENT'});
  }

  const handleAddition =()=>{
    const number = numberElement.current.value;
    dispatch({type:'ADDITION',payload:{
      number
    }});
    numberElement.current.value ="";
  }

  const handlePrivacy =()=>{
    
    dispatch({type:'PRIVACY_TOGGLE'});
    
  }

  const handleSubstract =()=>{
    const number = numberElement.current.value;
    dispatch({type:'SUBSTRACT',payload:{
      number
    }});
    numberElement.current.value ="";
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