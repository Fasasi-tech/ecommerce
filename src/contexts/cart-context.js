import { createContext, useEffect, useState } from 'react';


const addToCart =(cartItems, productToAdd)=>{
  const existingItems= cartItems.find((cartItem)=>cartItem.id === productToAdd.id
  )

  if (existingItems){
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
      )
  }

  return [...cartItems, {...productToAdd, quantity:1 }]

}

const removeCart = (cartItems, productToRemove) =>{
  const existingItems = cartItems.find((cartItem) => cartItem.id === productToRemove.id
  )
  if (existingItems.quantity ===1){
    return cartItems.filter(cartItem => cartItem.id !== productToRemove.id  )
  }

  return cartItems.map(cartItem => cartItem.id === productToRemove.id ? {...cartItem, quantity: productToRemove.quantity -1} : cartItem)
}

const clearItem = (cartItems, CartItemsToClear) =>{
  return cartItems.filter(cartItem =>cartItem.id !== CartItemsToClear.id  )
}
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () =>{},
    cartItems:[],
    AddItemsToCart: ()=>{},
    cartCount:0,
    RemoveCartItem: () =>{},
    clearItemsFromCart: () =>{},
    cartTotal:0

  });
   
 
  

  export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    const AddItemsToCart = ( productToAdd) =>{
      setCartItems(addToCart(cartItems, productToAdd))
  }

    const RemoveCartItem = (productToRemove) =>{
      setCartItems(removeCart(cartItems, productToRemove))
    }

    const clearItemsFromCart =(CartItemsToClear) =>{
      setCartItems(clearItem(cartItems, CartItemsToClear))
    }
  

    useEffect(()=>{
      const TotalCart = cartItems.reduce((total, cartItem) => total+cartItem.quantity, 0)

      setCartCount(TotalCart)

    }, [cartItems])

    useEffect(()=>{
      const AllCartTotal = cartItems.reduce((total, cartItem) => total+cartItem.quantity*cartItem.price, 0)

      setCartTotal(AllCartTotal)

    }, [cartItems])
    const value = { isCartOpen, setIsCartOpen, cartItems, AddItemsToCart, cartCount, RemoveCartItem, clearItemsFromCart, cartTotal };
    return (
      <CartContext.Provider value={value}>
        {children}
      </CartContext.Provider>
    );
  };
  