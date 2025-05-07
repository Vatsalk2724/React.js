import React from 'react'

const UserList = () => {
    const arr = [12,34,60];
    const [x,y,z] = arr;

  return (
    <div>
    <h2>x:{x}</h2>
    <h2>y:{y}</h2>
    <h2>Z:{z}</h2>
    </div>
  )
}

export default UserList