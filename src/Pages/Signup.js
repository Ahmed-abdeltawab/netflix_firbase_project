import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'
function Signup () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user, signUp } = UserAuth()
  const navigate = useNavigate()
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await signUp(email, password)
      navigate('/')
      console.log('Submitted')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='w-full h-screen'>
      <div className='bg-black/60 w-full h-screen fixed top-0 left-0'></div>
      <img
        src='https://assets.nflxext.com/ffe/siteui/vlv3/c8c8a0ad-86d6-45f1-b21d-821afa4e5027/5465b2b8-e9b3-411d-80f9-d5839f259e05/EG-en-20220801-popsignuptwoweeks-perspective_alpha_website_large.jpg'
        alt='backImg'
        className='w-full h-full '
      />
      <div className='fixed w-full px-4 py-24 z-50 top-0'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h2 className='text-3xl font-bold mb-8 '>Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <input
                onChange={e => setEmail(e.target.value)}
                className='w-full mb-6 p-4 rounded bg-gray-700'
                type='email'
                placeholder='Email'
                autoComplete='email'
              />
              <input
                onChange={e => setPassword(e.target.value)}
                className='w-full mb-10 p-4 rounded bg-gray-700'
                type='password'
                placeholder='Password'
                autoComplete='auto-password'
              />
              <button className='bg-red-600 px-6 py-3 text-xl font-bold rounded w-full'>
                Sign Up
              </button>
              <div className='flex items-centre text-sm text-gray-600 justify-between my-4'>
                <p>
                  <input type='checkbox' className='mr-2 w-[30px]' />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className='py-8'>
                <span className='text-gray-600 mr-2  '>
                  Already Subscribed to Netflix?
                </span>
                <Link className='hover:underline' to='/login'>
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
