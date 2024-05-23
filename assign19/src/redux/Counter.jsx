import {createSlice} from '@reduxjs/toolkit'


let Counter=createSlice(
    {
        name:'Counter',
        initialState:{value:0},
       reducers:{
        Increment:(state)=>{
             state.value++
        },
        Decrement:(state)=>{
             state.value--
        }
     
        
       } 
    }
)
export default Counter.reducer
export const {Increment,Decrement,IncrementBy20}=Counter.actions 