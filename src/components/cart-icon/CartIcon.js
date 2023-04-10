import React , {useContext} from 'react'
import { CartContext } from '../../contexts/cart-context'
import {BsCart4} from 'react-icons/bs'
import './carticon.css'
import {useNavigate} from 'react-router-dom'

const CartIcon = () => {
 const {isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

  /*const toggleHandler =() =>{
    setIsCartOpen(!isCartOpen)
  }*/
  const navigate = useNavigate()

    const goToCheckOutHandler =() =>{
      navigate('/checkout')
    }
  return (
    <div className='cart-icon-container' onClick={goToCheckOutHandler}>
      <BsCart4 className='shopping-icon'/>
      <span className='item-count'>{cartCount}</span>
    </div>  
  )
}

export default CartIcon