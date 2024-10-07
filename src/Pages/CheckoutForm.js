import React from 'react'
import { CardElement,useStripe,useElements } from '@stripe/react-stripe-js'

const CheckoutForm = ({product}) => {
 const stripe = useStripe();
  const elements = useElements();

  const handlePayment = () =>{
    if(!stripe || !elements){
        return;
    }

    const card =  elements.getElement(CardElement)

    const {error , paymentMethod} = stripe.createPaymentMethod({
        type:'card',
        card:'card'
    })

    if(error){
        alert('payment failed',error)
    }
    else{
        alert('payment successful',paymentMethod)
    }

  }

  return (
    <div className='mt-4'>
        <CardElement />
        <button
          disabled={!stripe}
          onClick={handlePayment}
          className='btn btn-primary mt-3'
        >
          pay ${product.price}
        </button>
    </div>
  )
};

export default CheckoutForm