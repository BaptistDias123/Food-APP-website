import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Placeorder from './Pages/Placeorder/Placeorder.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Login from './Components/Login/Login.jsx'

const App = () => {


  const [showLogin, setShowLogin]= useState(false)

  return (

    <>
  
    {showLogin? <Login setShowLogin={setShowLogin}/>: <></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/placeorder' element={<Placeorder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
