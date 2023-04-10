import React, {useContext} from 'react'
import './products.css'
import {motion} from 'framer-motion'
import {AiFillStar} from 'react-icons/ai'
import {MdOutlineShoppingBasket} from 'react-icons/md'
import { CartContext } from '../../contexts/cart-context'

const Productss = ({product}) => {
  const {AddItemsToCart} =useContext(CartContext)
  const {price, name, imageUrl, star} =product

  const AddProductToCart = () => AddItemsToCart(product)
  let USDollar = new Intl.NumberFormat('en-US',{
    style: 'currency',
    currency: 'GBP',
  })
  return (
    <motion.div
      whileHover={{ scale:1.1}}
      transition={{duration: 0.2}}
      className='fred'>
        <img src={imageUrl} className="products_img" alt="img-food" />
          <div className='span-div'>
            <div className='pa-div'>
              <div className='price-name'>
                <h4>{name}</h4>
              </div>
                <div className='icon-naira' >
                  {/*<h4><TbCurrencyNaira/></h4>*/}
                  <h4>{USDollar.format(price)}</h4>
                </div>
            </div>
              <div className="icon-add">
                <p className='icon-p'><AiFillStar/>{star}</p>
                <button className="cart-button" type='button' onClick={AddProductToCart}><MdOutlineShoppingBasket /></button>
              </div>
          </div>
          
    </motion.div>
  )
}

export default Productss