import React, {useState} from 'react'
import {
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
  } from '../../utils/firebase/Firebase.utils';

import './signIn.css'
  
import FormInput from '../formInput/FormInput'
const SignIn = () => {

    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')



    const changeEnteredEmail = (e) => {
        setEnteredEmail(e.target.value)
    }

    const changeEnteredPassword = (e) => {
        setEnteredPassword(e.target.value)
    }

    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopup() // initially it is const response = await signInWithGooglePopup() but we destructured the response to user since that is what we need. The user is gotten from the sign in with popup
      }

    const handleSubmit= async (event) =>{
        event.preventDefault()

        try{
            const {user} = await signInAuthUserWithEmailAndPassword(enteredEmail,
                 enteredPassword)
                 console.log(user)

                 
        }
        

      catch(error){
        switch (error.code) {
            case 'auth/wrong-password':
              alert('incorrect password for email');
              break;
            case 'auth/user-not-found':
              alert('no user associated with this email');
              break;
            default:
              console.log(error);
          }

      }

      setEnteredEmail('')
      setEnteredPassword('')
     
    }

  return (
    <div>
        <h1>Already have an account?</h1>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit} >
            <FormInput
              type="email"
              label="Email"
              value={enteredEmail}
              onChange={changeEnteredEmail}
              required
            />
            
            <FormInput
              type="password"
              label="Password"
              value={enteredPassword}
              onChange={changeEnteredPassword}
              required
            />
            <div className='sign-in'>
                <div>
                    <button type='submit' className='sign-up'>Sign In</button>
                </div>
                <div>
                    <button type='button' className=' google-signup' onClick={logGoogleUser}>
                        Sign In With Google
                    </button>
                </div>
            </div>
           
        </form>
    </div>
  )
}

export default SignIn