import { useState, useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'

function Register()
{
  const [FormData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',

  }) 
  const { name, email, password, password2 } = FormData
  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        <form >
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
             
              placeholder='Enter your name'
              
            />
          </div>
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
            <input
              type='password'
              className='form-control'
             
              placeholder='Confirm password'
             
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

export default Register