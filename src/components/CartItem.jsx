import React, { useEffect, useState } from 'react'
import { BiCheckCircle } from "react-icons/bi";

function CartItem({img, title}) {

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
        setTimeout(() => {
            setIsVisible(false)
        }, 2000)
    }, [])

  return (
        <div className={isVisible ? 'cart-item open' : 'cart-item'}>
          <img src={`../public/img/${img}`} width={70} alt="" />
          <div className="cart-wrapper">
            <p>Додано до кошику:</p>
            <div className="cart-name">{title}</div>
          </div>
          <BiCheckCircle className='check-to-box' />
        </div>
  )
}

export default CartItem
