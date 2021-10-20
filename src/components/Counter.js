import './Counter.css'
import { useState } from 'react';



function Counter () {
  
  const [count, setCount] = useState(0)

    return (
      <div className="Counter">
        <table className="buttonsGrid">
          <tr>
            <td> <button className= "Add" onClick={()=> {  setCount(count+1)}}>+1</button> </td>
            <td> <button className= "Add" onClick={()=> {  setCount(count+10)}}>+10</button> </td>
            <td> <button className= "Add" onClick={()=> {  setCount(count+100)}}>+100</button> </td>
          </tr>
          <tr>
            <td> <button className= "Add" onClick={()=> {if(count>0) setCount(count-1)}}>-1</button> </td>
            <td> <button className= "Add" onClick={()=> {if(count>9) setCount(count-10)}}>-10</button> </td>
            <td> <button className= "Add" onClick={()=> {if(count>99) setCount(count-100)}}>-100</button> </td>
          </tr>
        </table>
        <p className="count"> {count} </p>
        <button className= "Reset" onClick={()=> { setCount(0) }}>Reset</button>
      </div>
    )
  }
  

  export default Counter;