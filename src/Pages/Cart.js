import React,{useContext} from 'react'
import { CartContext } from '../Context/CartContext'

const Cart = () => {

    const {cart} = useContext(CartContext)

  return (
    <div>

     <div className='container mt-4'>
        {
            cart.length === 0 ? (
                <p>your cart is empty</p>
            ) : (
                 <ul className='list-group'>
                    {
                        cart.map((product,index) => (
                            <li key={index} className='list-group-item' >
                                <img src={product.image} className='card-img-top w-50 h-50' alt={product.title}></img>
                              {product.title} - ${product.price}
                            </li>
                        ))
                    }
                 </ul>
            )
        }
        </div>     

    </div>
  )
}

export default Cart