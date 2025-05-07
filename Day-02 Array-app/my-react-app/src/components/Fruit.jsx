import React from 'react'

function Fruit() {

    const fruit = ["Apple", "PineApple" , "WaterMenon" ]

  return (
<div>
    <ul >
        {fruit.map((val,index) => (

            <li key={index}>{val}</li>
        )
        )}
    </ul>
    </div>
  );
};

export default Fruit