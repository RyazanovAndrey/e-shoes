import React, { useState } from 'react'
import { BiTrashAlt } from "react-icons/bi";
import { useCart } from '../store/cart';
import CartProduct from './CartProduct';


function Cart() {

const { cart, clearCart } = useCart()

const totalCart = cart.reduce((total, item) => {
  return total += item.count * item.price
}, 0)

const formatter = new Intl.NumberFormat('ru')

  return (
    <div className='cart-page'>
      <div className="container">
        <div className="cart-wrapper">
            <h3 className='cart-title'>Оформлення Замовлення</h3>
            <div className="cart-box" onClick={clearCart}>
                <BiTrashAlt className='btn-clear' />
                <h3 className='cart-clear'>Очистити кошик</h3>
            </div>
        </div>
        <div className="cart-box-item">
            {cart.length ? (<>
                <div className="cart-list-item">
                {cart.map(item => (
                    <CartProduct {...item} formatter={formatter} />
                ))}
                </div>
            </>) : 'Ваш кошик порожній...'}
            <div className="cart-sum">
                <h3>Ваш кошик</h3>
                <div className="cart-summ-wrapper">
                  <h4>Всього</h4>
                  <h4>{formatter.format(totalCart)} ₴</h4>
                </div>
                {cart.length > 0 ? <button className='btn-confirm'>Оформити замовлення</button> : ''}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
