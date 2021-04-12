import React, {useState} from 'react'
import {ROUTE} from '../../constants/route'
import { Link } from 'react-router-dom';
import logo  from "../../assets/images/logo.svg";
import CartDropdown from '../CartDropdown/CartDropdown'; 
import './Header.css'
import img from '../../assets/images/demo/product-1.jpg'
import { connect } from "react-redux"
const Header = (props) => {
  const [hidden, setHidden] = useState(false); 
  let nombreProducts = 0 ; 
   props.cartItems.forEach( item => {
     nombreProducts = nombreProducts + item.quantite; 
   })
   const toggle = () => {
     props.dispatch({
       type:"TOGGLE_CART"
     })
   }
    return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
      <div>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          
          <Link className="nav-link active" to={ROUTE.HOME}>Shopspree</Link>
        </li>
        <li class="nav-item">
          
          <Link className="nav-link" to={ROUTE.ALL_PRODUCTS}>All Products</Link>
        </li>
      </ul>
      </div>
      <div>
        <a class="navbar-brand" href="#" >
         <img src={logo} alt=""  width="70" height="70" />
        </a>
      </div>
      
     <div className="d-flex justify-content-between" style={{width:"100px"}}>
        <i class="fas fa-search "></i>
        <button onClick={toggle}>  <i class="fas fa-shopping-bag"><span>{nombreProducts}</span></i></button>
        <i class="fas fa-user"></i>
     </div>
    {
      props.hidden  ?  <CartDropdown /> : null
    }
                 
                
            
        </div>
    </div>
  
</nav>


    )
}

const mapStateToProps = (state) => {
  return {
    cartItems : state.cartItems, 
    hidden: state.hidden
  }

}
export default connect(mapStateToProps)(Header); 
