import React from 'react'
import './cartItems.css'
import {TbCurrencyNaira} from 'react-icons/tb'

const CartItem = ({cartItem}) => {
   const {imageUrl, name, price, quantity} = cartItem
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt= {`${name}`} className='image-drop-down'/>
      <div className='cartitem-div'>
        <div className='font-size'>{quantity}{' '} <span className='span-times'>x</span> {name}</div>
        <div className='icon-naira' >
          <p className='currency'><TbCurrencyNaira/></p>
          <p>{price}</p>
         </div>
      </div>
    </div>
  )
}

export default CartItem