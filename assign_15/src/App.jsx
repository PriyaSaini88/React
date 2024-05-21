import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [state,setState]=useState(0)
  let handle=(c) => {
   state++;
    setState(state);
   };
   let Click=(c) => {
    state--;
    setState(state);
   };
   let Zero=(c) => {
    setState(0)
   }
   return (
    <>
       <p><h3>Counter App</h3></p> 
       <p> <h2>{state}</h2></p> 
       <div className='a'  >
       <div onClick={handle} className='b'>
        plus
        </div>
    
       <div onClick={Click} className='b'>
       sub
        </div>
        <div onClick={Zero} className='b'>
           zero
        </div>
       </div>
     </>
   )
 }


export default App
