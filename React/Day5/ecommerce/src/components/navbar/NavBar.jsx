import {Link,NavLink} from 'react-router-dom'
import {FaOpencart} from 'react-icons/fa';
import useCart from '../../context/cart/useCart';
import './navbar.css'
import { useContext } from 'react';
import CartContext from '../../context/cart/CartContext';

const NavBar=({categories,isLoading})=>{
    const {totalQuantity} =  useCart();
    return(
      <>
      <nav className="nav">
        <div className="nav-left">
            <ul className="nav-items">
                {
                    categories && categories.length? categories.map((item,idx)=>{
                        return(
                            <li className="nav-item" key={idx+1}>
                                <NavLink className='nav-link' to={`/products/${item}`}> {item}</NavLink>
                            </li>
                        )
                    }): <></>
                }
                
                {/* <li className="nav-item">
                    <NavLink className='nav-link' to='/about-us'> About Us</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className='nav-link' to='/contact-us'> Contact Us</NavLink>
                </li> */}
            </ul>
        </div>   
        <div className="nav-right">
            <Link to="/cart" className="cart-icon-container">
                <FaOpencart className="cart-icon"></FaOpencart>
                {totalQuantity ? <div className="cart-badge">{totalQuantity}</div>:<></>}
            </Link>
        </div> 
        </nav>
      </>
    )
  }
  export default NavBar;