import React, { useState } from 'react'
import { useCart } from '../store/cart'

function Products({id, title, price, size, img}) {

  const [sizeActive, setSizeIsActive] = useState(0)
  const { addToCart } = useCart()

  const formatter = new Intl.NumberFormat('ru')

  const productToCart = {id, title, price, size: size[sizeActive], img, count: 1}

  return (
    <div className='card'>
      <img src={`img/${img}`} alt="" />
      <div className="size-wrapper">
          {size.map((item, i) => {
            return <div key={i} onClick={() => setSizeIsActive(i)} className={i == sizeActive ? 'size active' : 'size'}>{item}</div>
          })}
      </div>
      <h3 className='product-name'>{title}</h3>
      <div className="product-wrapper">
        <div className="h4">Ціна</div>
        <div className="code">Код: {id}</div>
      </div>
      <div className="price-wrapper">
        <div className="price">{formatter.format(price)} ₴</div>
        <button className='btn-to-card' onClick={() => addToCart(productToCart)}>До кошику</button>
      </div>
    </div>
  )
}

export default Products
