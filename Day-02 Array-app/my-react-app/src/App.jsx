import { useState } from 'react'

import './App.css'
// import Filterdata from './components/Filterdata'
import Fruit from './components/Fruit'
import Greetdata from './components/Greetdata'
import Spreaddata from './components/Spreaddata'
import UserList from './components/UserList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  {/* <Filterdata /> */}
  {/* <Fruit />
   */}
   <Greetdata />
   <Spreaddata />
   <UserList />
    </>
  )
}

export default App
