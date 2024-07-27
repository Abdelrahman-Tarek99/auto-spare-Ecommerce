import React, { useState, useEffect , useCallback} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeAllItemsFromCart } from "../../store/products/ProductsActions";
import "./CheckOutPage.css";

const CheckOutPage = () => {
  const cartItems = useSelector((state) => state.products.cart);
  const totalAmount = useSelector((state) => state.products.cartTotalPrice);
  const totalItems = useSelector((state) => state.products.cartTotalQuantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [content, setContent] = useState(null);
  const renderThanksMessage = () => (
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Thank you for shopping with us</h5>
            <p className="card-text">
              Your order has been placed successfully. You will receive an email confirmation shortly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  
 
  const proceedToPayment = useCallback(() => {
    setContent(renderThanksMessage);

    const timeoutId = setTimeout(() => {
      navigate("/", { replace: true });
      dispatch(removeAllItemsFromCart());
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [dispatch, navigate]); 


  useEffect(() => {
    if (cartItems.length > 0) {
      setContent(
        <div className="checkout-page">
          <h2>Checkout</h2>
          <div className="checkout-grid">
            {cartItems.map((item, index) => (
              <div key={index} className="checkout-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="checkout-item-image"
                />
                <div className="checkout-item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="checkout-summary">
            <p>Total Items: {totalItems}</p>
            <p>Total Amount: ${totalAmount}</p>
            <button onClick={proceedToPayment}>Proceed to Payment</button>
          </div>
        </div>
      );
    } else {
      setContent(<p>Cart is empty</p>);
    }
  }, [cartItems, totalAmount, totalItems,  proceedToPayment]);

  return <div>{content}</div>;
};

export default CheckOutPage;
