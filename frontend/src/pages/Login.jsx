// import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
// import { useSelector, useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import { login, reset } from '../features/auth/authSlice'
// import Spinner from '../components/Spinner'

function login() {
  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and start setting goals</p>
      </section>

      <section className='form'>
        <form >
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
             
              placeholder='Enter your email'
             
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
           
              placeholder='Enter password'
           
            />
          </div>

          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default login