import React from 'react'
import { UserAuth } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom'
function ProtectedRoute ({ children }) {
  const { user } = UserAuth()

  if (!user) {
    return <Navigate to='/' />
  } else {
    return children
  }
}

export default ProtectedRoute
