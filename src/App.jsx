import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from './Pages/Placeorder/Placeorder.jsx'
import Footer from './components/Footer/Footer.jsx'
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