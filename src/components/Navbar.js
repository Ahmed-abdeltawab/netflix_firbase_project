import React from 'react'
import { NavLink, useNavigate, Link } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'
const Navbar = () => {
  const { user, logOut } = UserAuth()
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      await logOut()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  console.log(user?.email)
  return (
    <div className='flex p-4 justify-between items-center z-50 w-full absolute'>
      <Link to='/'>
        <p className='text-red-600 text-4xl font-bold'>NETFLIX</p>
      </Link>

      {user?.email ? (
        <div className='flex items-center gap-5'>
          <NavLink
            to='/account'
            className={`${({ isActive }) =>
              isActive ? 'active' : 'inactive'} text-white`}
          >
            Account
          </NavLink>
          <div
            onClick={handleLogout}
            className={`${({ isActive }) =>
              isActive
                ? 'active'
                : 'inactive'} text-white cursor-pointer bg-red-600 px-6 py-2 rounded`}
          >
            Logout
          </div>
        </div>
      ) : (
        <div className='flex items-center gap-5'>
          <NavLink
            to='/login'
            className={`${({ isActive }) =>
              isActive ? 'active' : 'inactive'} text-white`}
          >
            Sign In
          </NavLink>
          <NavLink
            to='/signup'
            className={`${({ isActive }) =>
              isActive
                ? 'active'
                : 'inactive'} text-white bg-red-600 px-6 py-2 rounded`}
          >
            Sign Up
          </NavLink>
        </div>
      )}
    </div>
  )
}

export default Navbar
