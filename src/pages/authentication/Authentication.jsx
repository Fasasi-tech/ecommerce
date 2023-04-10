import React from 'react'
import SignIn from '../../components/sign-in/SignIn'
import Signup from '../../components/signup/Signup'
import  './sign-in.css'
const Authentication = () => {
  
  return (
    <div className='sign-in-parent'>
      <div className='auth-flex'>
        <SignIn />
        <Signup />
      </div>
    </div>

  )
}

export default Authentication