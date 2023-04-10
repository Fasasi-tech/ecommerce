import React, { useContext} from 'react'
import { CartContext } from '../../contexts/cart-context'
import './checkout.css'
import {MdDeleteOutline} from 'react-icons/md'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'

const CheckOut = () => {
   const {cartItems, RemoveCartItem, AddItemsToCart, clearItemsFromCart, cartTotal } =useContext(CartContext)
  let USDollar = new Intl.NumberFormat('en-US',{
    style: 'currency',
    currency: 'GBP',
  })
   return (

      <div className='table-data'>
         {cartItems.length? 
         (
          <div>
           <>
            
           </>
          {cartItems.map((item, index) =>(
              <div key={index} className='div-header'>
                <div className='image-div'>
                  <img src={item.imageUrl} alt={`${item.name}`} className='image-url'/>
                    <div>
                    <p className='item-name'>{item.name}</p>
                    <p onClick={() => clearItemsFromCart(item)} className='delete-icon'>Remove</p>
                    </div>
                </div>
                <div className='quantity-div'>
                  <div><AiOutlineMinus onClick={() =>{RemoveCartItem(item)}} className='minus-icon' /></div>
                  <div>{item.quantity}</div>
                  <div><AiOutlinePlus onClick={() => AddItemsToCart(item)} className='plus-icon' /></div>
                </div>
                <div className='item-price'>{USDollar.format(item.price)} </div>
              </div>
            ))
          }
            </div>) : <p>cart is empty</p>
         }
          

       {cartItems.length ? 
       (<div className='cart-total'>
        <h3>
          Cart Total : {USDollar.format(cartTotal)}
        </h3>
       
       </div>) : ''}
    </div>
    
  )
}

export default CheckOut