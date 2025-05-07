import React from 'react'

const Spreaddata = () => {
    let num1 = [10,20,30,40];
    let num2 = [50,60,70,80];

const merging = [...num1,...num2];
  return (
    <div>
        <h4>Merge Array</h4>
        <ul>
            {merging.map((num,index)=>(
                <li key={index} >{num}</li>
            ))}
        </ul>
    </div>

    )
}

export default Spreaddata