import React,{useState,useEffect,useContext} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { CartContext } from '../Context/CartContext'

const ProductDetails = () => {

    const {id}=useParams()
    const [product,setProduct]=useState(null)
    const {addToCart} = useContext(CartContext)

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response => setProduct (response.data))
        .catch(err => console.log('error fatch data',err))
    },[id]);


    const handleAddToCart = () =>{
        addToCart(product)
        alert('product added to cart')
    };

    if(!product){
        return <div>loading...</div>
    }

  return (
    <div className='container mt-4'>

     <h2>{product.title}</h2>
     <img src={product.image} alt={product.title} style={{width:'300px'}} ></img>
     <p>{product.description}</p>
     <p>price:{product.price}</p>
     <button className='btn btn-success' onClick={handleAddToCart}>Add to cart</button>
    </div>
  )
}

export default ProductDetails