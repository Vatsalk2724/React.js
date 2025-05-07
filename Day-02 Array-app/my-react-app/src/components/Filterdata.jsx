import React from 'react'

function Filterdata() {
    const num = [1,2,3,4,5,6];
    const evenNumber = num.filter((n) => n%2===0);
  return (
    <div>
        <h3>Even number</h3>
        <ul>
            {evenNumber.map((num,index)=>
            <li>key={index} , value={num}</li>)}
        </ul>
    </div>
  )
}

export default Filterdata