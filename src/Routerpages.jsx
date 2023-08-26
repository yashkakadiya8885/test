import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Product from './Product';
import Cart from './Cart';
import Error from './Error';

const Routerpages = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Product' element={<Product/>}/>
            <Route path='/Cart' element={<Cart/>}/>
            <Route path='*' element={<Error />}/>
        </Routes>
    </>
  )
}

export default Routerpages