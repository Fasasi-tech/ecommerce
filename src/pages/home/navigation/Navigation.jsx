import React, { useContext} from 'react'
import {Outlet,Link} from 'react-router-dom'
import CartIcon from '../../../components/cart-icon/CartIcon'
import DropDown from '../../../components/cartDropDown/DropDown'
import { UserContext } from '../../../contexts/user-contexts'
import { CartContext } from '../../../contexts/cart-context'
import { signOutUser } from '../../../utils/firebase/Firebase.utils'
import './navigation.css'

const Navigation = () => {
    const {currentUser} = useContext(UserContext)
    const {isCartOpen} = useContext(CartContext)


  return (
    <div className='Nav-parent-div'>
        <div className='nav-div'>
            <div>
                <Link to='/' className="link logo">
                    Meek.
                </Link>
            </div>
            <div className='sub-link'>
                <div>
                   <Link to='/shop' className="link">
                        Shop
                    </Link>
                </div>
                <div>
                    { currentUser ? (<span className='link' onClick={signOutUser}> {' '}Sign Out {' '}</span> )
                    : (<Link to='/sign' className="link">
                        Sign in
                    </Link>) }
                </div>  
                    <CartIcon />  
                    {/*{isCartOpen && <DropDown />}*/}
            </div>   
        </div>
        <div>
            <Outlet/>
        </div>    
    </div>
  )
}

export default Navigation