import React from "react";
import {
  increaseQuantityAction,
  decreaseQuantityAction,
  removeItemFromCart,
} from "../store/products/ProductsActions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./CartOffCanvas.css";

const CartOffCanvas = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.products.cart);
  const totalQuantity = useSelector(
    (state) => state.products.cartTotalQuantity
  );

  const increaseQuantity = (id) => {
    dispatch(increaseQuantityAction(id));
  };
  const decreaseQuantity = (id) => {
    dispatch(decreaseQuantityAction(id));
  };
  const handleContentClick = (e) => {
    e.stopPropagation();
  };
  const removeFromCart = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const proceedToCheckoutPage = () => {
    onClose();
    navigate("/checkout");
  };



  return (
    <div className={`offcanvas-container ${isOpen ? "open" : ""}`}>
      {isOpen && <div className="offcanvas-overlay" onClick={onClose}></div>}
      <div className="offcanvas-content " onClick={handleContentClick}>
        <div className="cart-close-btn row d-flex  flex-row  align-items-center    justify-content-between  ">
          <h2 className=" w-auto ">Cart</h2>
          <button onClick={onClose}>&times;</button>
        </div>
        {totalQuantity > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="cart-item ">
              <div className="square-image">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image  object-fit-contain h-100 w-100 "
                />
              </div>
              <div className="">
                <h5 className="cart-item-name">{item.name}</h5>
              </div>
              <div className="cart-item-price ">
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
              </div>
              <div className="cart-item-quantity ">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <input type="text" value={item.quantity} readOnly />
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
              <div className="">
                <p className="cart-item-total-price">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <div className="">
                <button
                  className="cart-item-remove desktop-remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  &times;
                </button>
                <button
                  className="cart-item-remove mobile-remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove From Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>There is nothing in your cart.</p>
        )}
        <div className="proceed-to-checkout row text-center">
          <button className=" w-auto  mx-auto " onClick={proceedToCheckoutPage} >Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartOffCanvas;
