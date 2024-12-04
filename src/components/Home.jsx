import React, { useEffect, useState } from 'react'
import slide from '../../public/img/slide-1.png'
import { BiSearch, BiX } from "react-icons/bi";
import { useProduct } from '../store/product';
import Products from './Product';
import Skeleton from './Skeleton';

function Home() {

  const [actTab, setActTab] = useState('all')
  const { product, productList } = useProduct()
  const [value, setValue] = useState('')

  const [isLoad, setIsLoad] = useState(true)

  const colorFilter = actTab == 'all' ? '' : `?color=${actTab}`

  useEffect(() => {
    productList(colorFilter)
    setTimeout(() => {
      setIsLoad(false)
    }, 1000)
  }, [actTab])

  const colorProduct = [
    {name: 'Всі', key: 'all'},
    {name: 'Сірі', key: 'grey'},
    {name: 'Чорні', key: 'black'},
    {name: 'Сині', key: 'blue'},
    {name: 'Білі', key: 'white'},
  ]

  return (
    <section className='product-list'>
      <div className="container">
        <img src={slide} alt="" />
        <h3 className='title'>Всі кросівки</h3>
        <div className="wrapper-nav">
          <ul className="tabs">
            {colorProduct.map((item, i) => (
              <li key={i} onClick={() => setActTab(item.key)} className={actTab == item.key ? 'tab active' : 'tab'}>{item.name}</li>
            ))}
          </ul>
          <div className="search-field">
            <BiSearch className='search' />
            <input type="text" className='input-field' value={value} onChange={e => setValue(e.target.value)} placeholder='шукати...' />
            <BiX onClick={() => setValue('')} className='close' />
          </div>
        </div>
        
        <div className="cards">
            {isLoad ? (
              <>
                {product.map(item => {
                  return <Skeleton />
                })}
              </>
            ) : (
              <>
                {product.filter(item => {
                return item.title.toLowerCase().includes(value.toLowerCase())
                })  
                .map((item, i) => {
                  return <Products key={i} {...item} />
                })}
              </>
            )}
        </div>

      </div>
    </section>
  )
}

export default Home
