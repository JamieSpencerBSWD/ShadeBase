import React from 'react'
import {Link} from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import BurgerMenu from './BurgerMenu';


const Navbar = () => {
  const {logout} = useLogout()
  const {user} = useAuthContext()

  const handleClick = () => {
    logout()
  }
  return (
        <div className='headerContainer'>
            <Link to="/">
                <p className='title text-size-large'>
                  <img src='../../logo192.png' style={{width:'25px', margin:'7px'}} alt=""/>
                  ShadeBase
                </p>
            </Link>
            <nav>
              {user &&(
                <div>
                <span><a href='/profile' className='link'>My Palettes</a></span>
                <button onClick={handleClick} className='logout'>Log out</button>
              </div>
              )}
              {!user && (
                <div>
                  <Link to='/login' className='link' >Login</Link>
                  <Link to='/signup' className='link' >Sign Up</Link>
                </div>
              )}
              
            </nav>
        </div>
  )
}

export default Navbar