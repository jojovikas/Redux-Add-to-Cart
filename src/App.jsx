import React from 'react'

import Navar from './Components/Navar'
import Product from './Components/Product'
import Cart from './Components/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



const App = () => {
  return (
    <BrowserRouter>
      <Navar />
      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
