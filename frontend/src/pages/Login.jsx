import React, {useContext, useEffect, useState} from 'react'
import assets from '../assets/assets'
import { DonerDataContext } from '../context/DonerDataContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
  const [currentState, setCurrentState] = useState('Login')
  const { token, setToken, backendUrl, navigate } = useContext(DonerDataContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    try {
      if(currentState === 'Sign Up') {
        const response = await axios.post(`${backendUrl}api/user/register`, {name, email, password})
        if(response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
          navigate('/')
        } else {
          toast.error(response.data.message)
        }

      } else {
        console.log("Triggering login");
        const response = await axios.post(`${backendUrl}api/user/login`, {email, password})
        if(response.data.success) {
          console.log(response.data);
          
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token);
          sessionStorage.setItem('token', response.data.token);
          navigate('/');
        } else {
          toast.error(response.data.message)
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if(currentState === 'Login') {
      navigate('/login')
    }
  }, [currentState])

  return (
    <div className='flex flex-col-reverse sm:flex-row-reverse border border-gray-400'>
      {/* Login Right Side  */}
      <div className='w-full px-4 py-3 my-3 sm:w-full flex items-center justify-center sm:py-0'>
        <div className="w-full flex items-center justify-center">
          <form className='flex flex-col items-center w-full sm:max-w-96 m-auto gap-4 text-gray-800' action="">
            <div className='inline-flex items-center gap-2 mb-2'>
              <p className='text-3xl text-[#8c1a12] font-bold'>{currentState}</p>
              <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
            </div>

            {currentState === 'Login' ? '' : <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required/>}
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required/>
            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required/>

            <div className='w-full flex justify-between text-sm mt-[-8px]'>
              {currentState === 'Login' ? <p className='cursor-pointer'>Forget password?</p> : ''}
              {
                currentState === 'Login' 
                ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p> 
                : <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login here</p>
              }
            </div>
            <button onClick={onSubmitHandler} className='bg-[#8c1a12] text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
          </form>
        </div>
      </div>
      {/* Login Left Side  */}
      <img className='w-full sm:w-1/2' src={assets.login_page_image} alt=""/>
    </div>
  )
}

export default Login