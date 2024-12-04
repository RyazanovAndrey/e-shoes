import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../public/img/logo.svg'
import Draiwer from './Draiwer'

function Header() {
  return (
    <header className='header'>
        <div className="container">
          <div className="wrapper">
            <div className="logo"><img src={logo} alt="" /></div>
            <nav className="menu">
                <Link to={'/'}>Магазин</Link>
                <Link to={'/cart'}>Кошик</Link>
            </nav>
            <Draiwer />
          </div>
        </div>
    </header>
  )
}

export default Header