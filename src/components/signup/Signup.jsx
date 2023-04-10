import React, {useState, useContext} from 'react'
import { createAuthUserWithEmaiAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/Firebase.utils';
import FormInput from '../formInput/FormInput';
import './signup.css'

const Signup = () => {

    const [displayName, setEnteredText] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')

    const changeEnteredText = (e) => {
        setEnteredText(e.target.value)
    }

    const changeEnteredEmail = (e) => {
        setEnteredEmail(e.target.value)
    }

    const changeEnteredPassword = (e) => {
        setEnteredPassword(e.target.value)
    }

    const changeConfirmPassword = (e) => {
        setconfirmPassword(e.target.value)
    }

   

    const handleSubmit= async (event) =>{
        event.preventDefault()

        if (enteredPassword!== confirmPassword){
            alert("password does not match")
            return
        }

        try{
            const {user} = await createAuthUserWithEmaiAndPassword(enteredEmail,
                 enteredPassword)
            
            
            await createUserDocumentFromAuth(user, { displayName });
        }
        

      catch(error){
        if (error.code === 'auth/email-already-in-use') {
            alert('Cannot create user, email already in use');
          } 
          else if (error.code === 'auth/weak-password'){
            alert('weak password, password should be at least 6 characters');
          }
          else {
            console.log('user creation encountered an error', error);
          }

      }

      setEnteredText('')
      setEnteredEmail('')
      setEnteredPassword('')
      setconfirmPassword('')
    }
  return (
    <div>
        <h1>sign up with email and password</h1>
        <form onSubmit={handleSubmit} >
            <FormInput
              type="text"
              label="Display Name"
              value={displayName}
              onChange={changeEnteredText}
              required

            />

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

            <FormInput
              type="password"
              label="Confirm password"
              value={confirmPassword}
              onChange={changeConfirmPassword}
              required
            />
            <button type='submit' className='sign-up'>Sign Up</button>
        </form>
    </div>
  )
}

export default Signup