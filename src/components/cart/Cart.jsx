import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import "./cart.css";
import {MdDelete} from 'react-icons/md'
import { removeproduct, increment, decrement,getCartTotal } from "../../store/slices/cartSlice";



const Cart = () => {

  const dispatch = useDispatch();
  const { cart,totalPrice,totalQuantity} = useSelector((state) => state.cart);

  const removeCartProduct =(products) =>{
    dispatch(removeproduct(products))
  }
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <div className="cart">
      <h1>Here all your Cart Products</h1>
      <div className="cart-itemheading">
        <h3>Item</h3>
        <h3>Price</h3>
        <h3>Quantity</h3>
        <h3>Total</h3>
        <h3>{''}</h3>
      </div>
      {cart?.map((products) => {
        const { id,price, title, image } = products;
        return (
          <>
          <div key={id} className="cart-products">
            <div className="cart-img">
              <img src={image} alt="image1" />

              <h2>{title.slice(0, 9)}</h2>
            </div>
            <div className="cart-price">
              <span>${price*products.quantity}</span>
            </div>

            <div className="cart-btns" key={id}>
              <div className="cart-decre" onClick={()=>dispatch(decrement(products))}>-</div>
              <p>{products.quantity}</p>
              <div className="cart-incre" onClick={()=>dispatch(increment(products))}>+</div>
            </div>
            <div className="cart-total">
              <span>${price*products.quantity}</span>
            </div>
            <div className="single-userdel" onClick={()=>removeCartProduct(products)}><MdDelete/></div>
          </div>
         
          </>
        );
      })}
            <aside>
    <div className="order-summary">
      <h2>TotalQuantity : <label>{totalQuantity
      }</label></h2>
      <h2>Subtotal : <label>${totalPrice}</label></h2>
      <h3 className='total'>
        <label>Total</label>
        <label>${totalPrice}</label>
        </h3>
    </div>
    <button className='checkout' onClick={()=> (toast.success('This Option Comming Soon'))}>CHECKOUT</button>
    {/* <Toaster/> */}
    </aside>

    </div>
  );
};

export default Cart;
