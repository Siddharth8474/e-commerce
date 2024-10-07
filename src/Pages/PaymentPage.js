import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm'
import { useLocation } from 'react-router-dom'


const stripePromish = loadStripe('pk_test_51PyVntEBtTaiXHtmK0T40QIWWK7uEnQ0ojrH2hBcVLJ7PcgtTPI6FVXjprkm3BHJr2p8Ayakg0nZugNdlyr7IOZJ00WIXpvmvv')


const PaymentPage = () => {

    const location = useLocation()
    const {product} =location.state;
 
  return (
    <div className='container mt-5'>
      <p>price:{product.price}</p>
      <Elements stripe={stripePromish}>
          <CheckoutForm product={product} />
      </Elements>
    </div>
  )
}

export default PaymentPage