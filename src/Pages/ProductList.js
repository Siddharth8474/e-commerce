import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Style1/ProductList.css'


const ProductList = ({loggedInUser}) => {

    const [products,setProducts]=useState([]); // all fetch data
    const [searchQuery,setSearchQuery]=useState('') // search input state
    const [filteredProducts,setFilteredProducts]=useState([]) //filter products based on search

    const navigate = useNavigate();

    useEffect(()=>{
      axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data)
      })
      .catch(error =>
         console.log ('cant fatch data',error)
      )
    },[])

    //function to handle search
    const handleSearch=(event)=>{
      const query = event.target.value.toLowerCase();
      setSearchQuery(query)

      //filter products based on search
      const filtered = products.filter((product)=>{
        // product.title.toLowerCase().includes(query)

      const title = product.title.toLowerCase();
      const category = product.category.toLowerCase();
      const description = product.description.toLowerCase();

      return(
        title.includes(query) ||
        category.includes(query) ||
        description.includes(query)
      )
    });
       setFilteredProducts(filtered)
  }

  
    const handleBuy = (product) =>{
      if(loggedInUser){
        navigate('/payment',{state:{product}});
      }
      else{
        navigate('/login',{state:{redirectTo:'/payment',product}})
      }
       
    }


  return (

    
    <div className='container main-content mt-5 pt-4'>

        <div className='row justify-content-center mb-4'>
         <div className='col-12 text-center'>
            <input style={{border:'2px solid black'}}
               type='text'
               placeholder='Search for a product'
               className='form-control w-50 mx-auto'
               value={searchQuery}
               onChange={handleSearch}
            />
         </div>
        </div>

     <div className='row'>
        {
            filteredProducts.map(product => (
                <div key={product.id} className='col-md-4 mb-4'>
                    <div className='card h-100'>
                    <img src={product.image} className='card-img-top' alt={product.title} />
                      <div className='card-body'>
                         <h5 className='card-title'>{product.title}</h5>
                         <p className='card-text'>${product.price}</p>
                         <Link to={`/products/${product.id}`} className='btn btn-primary'>View Details</Link>
                         <button className='btn btn-success mt-3' onClick={() => handleBuy(product)}
                          style={{padding:'7px', marginLeft:'10px'}}
                          >
                          Buy Now
                          </button>
                      </div>
                    </div>
                
                </div>
            
            ))
        }
     </div>

    </div>
  )
}

export default ProductList