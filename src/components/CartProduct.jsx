import React from 'react'
import { BiPlus, BiMinus, BiTrashAlt  } from "react-icons/bi";
import { useCart } from '../store/cart';


function CartProduct({id, title, price, img, size, count, formatter}) {

  const { deleteProduct, countPlus, countMinus } = useCart()

  return (
    <div className='cart-product'>
        <img src={`e-shoes/public/img/${img}`} width={100} alt="" />
        <div className="cart-title-box">
            <h4>{title}</h4>
            <div className="code">{id}</div>
        </div>
        <p>Розмір: <span className='size-icon'>{size}</span> </p>
        <p className='cart-product-price'>{formatter.format(price)} ₴</p>
        <div className="count">
          <BiMinus className='count-icon' onClick={() => countMinus(id, size)} />
          <span>{count}</span>
          <BiPlus className='count-icon' onClick={() => countPlus(id, size)} /></div>
        <button className='delete-item' onClick={() => deleteProduct(id, size)}><BiTrashAlt /></button>
    </div>
  )
}

export default CartProduct
