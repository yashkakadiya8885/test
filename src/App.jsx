import { useState } from 'react'
import Nav from './Nav';
import Routerpages from './routerpages';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Routerpages/>
    </>
  )
}

export default App
