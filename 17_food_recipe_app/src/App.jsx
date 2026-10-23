import React from 'react'
import { Route,Routes } from 'react-router'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Favorite from './Pages/Favorite'
import Navbar from './Components/Navbar'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route element={<Home/>} path="/"/>
      <Route element={<Product/>} path='/recipe/:id'/>
      <Route element={<Favorite/>} path = '/favourite'/>
    </Routes>
    </div>
  )
}

export default App