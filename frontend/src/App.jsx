import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceAppointmnet from './pages/PlaceAppointment/PlaceAppointment'

const App = () => {
  return (
    <div className='app'>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceAppointmnet/>}/>
       </Routes>
    </div>
  )
}

export default App
