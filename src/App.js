import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { AuthContextProvider } from './Context/AuthContext'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Account from './Pages/Account'
import ProtectedRoute from './components/ProtectedRoute'
// import Components
import Home from './Pages/Home'
function App () {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  )
}
export default App
