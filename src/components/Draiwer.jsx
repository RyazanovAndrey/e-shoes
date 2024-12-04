import { useCart } from '../store/cart'
import CartItem from './CartItem';

function Draiwer() {

  const { cart } = useCart()

  return (
    <div className='cart-list'>
      {cart.map(item => (
        <CartItem {...item} />
      ))}
    </div>
  )
}

export default Draiwer
