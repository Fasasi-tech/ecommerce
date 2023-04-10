import React, { useContext} from 'react'
import './dropdown.css'
import { CartContext } from '../../contexts/cart-context'
import CartItem from '../CartItems/CartItem'
import {useNavigate} from 'react-router-dom'

const DropDown = () => {
  const navigate = useNavigate()

  const goToCheckOutHandler =() =>{
    navigate('/checkout')
  }
  const {cartItems} =useContext(CartContext)
  return (
    <div className='dropdown-parent'>
        <div className='dropdown-width'>
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item}/>
        ))}
        </div>
        <button type='button' onClick={goToCheckOutHandler}>GO TO CHECKOUT</button>
    </div>
  )
}

export default DropDown