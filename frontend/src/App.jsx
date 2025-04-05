import React from 'react'
import Home from './components/Home'
import Login from './components/Login.jsx'
import MainPage from './components/MainPage.jsx'
import Navbar from './components/Navbar.jsx'
const App = () => {
  return (
    <div className="flex h-screen">
      
      {/* <Login /> */}
      {/* <Home /> */}
      <Navbar />
      <MainPage />
      {/* <Profile /> */}
      </div>
  )
}

export default App