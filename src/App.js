import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ProductList from './Pages/ProductList';
import ProductDetails from './Pages/ProductDetails';
import Navbar from './Component/Navbar';
import Cart from './Pages/Cart';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import PaymentPage from './Pages/PaymentPage';

function App() {

  const [users,setUsers]=useState([])
  const [loggedInUser,setLoggedInUser]=useState(null)

  return (
    <div>
      
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductList loggedInUser={loggedInUser} />} />
        <Route path='products/:id' element={<ProductDetails />}></Route>
        <Route path='cart' element={<Cart/>}></Route>
        <Route path='signup' element={<Signup users={users} setUsers={setUsers} />} />
        <Route path='login' element={<Login users={users} setLoggedInUser={setLoggedInUser} />} />
        <Route path='payment' element={<PaymentPage/>}></Route>
      </Routes>
      </Router>
    
    </div>
  );
}

export default App;
 