import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import './CartItems.css';
import remove_icon from '../../assets/Assets/cart_cross_icon.png';

const CartItems = () => {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return <div>
            <div className='cartitems-format cartitems-format-main'>
              <img src={e.image} alt="" className='carticon-product-icon' />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className='cartitem-quantity'>{cartItems[e.id]}</button>
              <p>{e.new_price * cartItems[e.id]}</p>
              <img className="cartitem-remove-icon" src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
              <hr />
            </div>
          </div>

        }
        return null;

      })}
      <div>

         {/* <div>TOTAL PRODUCTS</div>
        <div>AMOUNT</div>
        <div>SHIPPING FREE</div> */}
      </div>

    </div>
  )
}

export default CartItems;
