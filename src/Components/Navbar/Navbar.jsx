import React , { useState} from "react"
import  "./Navbar.css";
import { Link } from "react-router-dom";
import carticon from "../../assets/Assets/cart_icon.png"
import logo from '../../assets/Assets/logo.png'
function Navbar() {

  const [menu,setMenu] = useState("shops");
  return (
    <div  className="navbar">
     <div className="nav-logo"> 
       <img src={logo} alt="logo123" />
        <p>SHOPPER</p>
    </div>
    <div className="nav-carticon">
        {/* <FaCartShopping /> */}
    </div> 

    <ul className="nav-menu">
      <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link> {menu==="shops"? <hr />: <></>} </li>
      <li onClick={()=>{setMenu("Mens")}}><Link to='/mens'>mens</Link>{menu==="shops"? <hr />: <></>} </li>
      <li onClick={()=>{setMenu("Womens")}}><Link to='/womens'>womens</Link> {menu==="shops"? <hr />: <></>} </li>
      <li onClick={()=>{setMenu("kids")}}><Link to='/kids'>kids</Link>{menu==="shops"? <h />: <></>} </li>
    </ul>

    <div className="nav-login-cart">
    <Link to='/login'><button>Login</button></Link>
      <Link to='/cart'><img src={carticon}></img></Link>
      <div className="nav-cart-count">0</div> 
    </div>

      
    </div>
  )
}

export default Navbar
