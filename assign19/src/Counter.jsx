import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Decrement, Increment, IncrementBy20 } from "./redux/Counter";

function Counter(){
    let count=useSelector((state)=>state.counter.value)
    let  dispatch=useDispatch()
    return(
        <div>
            <button onClick={()=>dispatch(Increment())}>Increment</button>
            <p>{count}</p>
            <button onClick={()=>dispatch(Decrement())}>Decrement</button>
           
        </div>
    )

}
export default Counter