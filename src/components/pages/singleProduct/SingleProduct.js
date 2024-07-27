import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as FacebookSingleProduct } from "../../../assets/svgs/facebook-single.svg";
import { ReactComponent as Twitter } from "../../../assets/svgs/twitter.svg";
import { ReactComponent as Linkedin } from "../../../assets/svgs/linkedin.svg";
import { addItemToCartAction } from "../../store/products/ProductsActions";
import { useDispatch } from "react-redux";
import "./SingleProduct.css";

function SingleProduct() {
  const { id } = useParams();

  // console.log("Product ID:", id);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();



  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(true);
        setLoading(false);
      });
  }, [id]);



  const addToCartBtn = () => {
    // console.log("Adding item to cart");
    if (product) { 
      const item = {
        id: product.id, 
        title: product.title,
        price: product.price,
        quantity: quantity,
        size: selectedSize,
        image: product.image,
      };
      // console.log("Item:", item);
      dispatch(addItemToCartAction(item));
    }
  };

  

  if (loading) {
    return (
      <div className="row">
        <div className="col-12 text-center">
          <h2>Loading Data...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="row">
        <div className="col-12 text-center">
          <h2>Error Fetching Data</h2>
        </div>
      </div>
    );
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <section className=" container-fluid">
      <div className=" row ">
        <div className=" col-12 ">
          <p className=" text-start">
            Home <span> / </span> Shop <span> / </span> {product.title}
          </p>
        </div>
        <div className="single-product-grid">
          <div className="single-product-image">
            <img src={product.image} alt="product" />
          </div>
          <div className="single-product-details row">
            <h2 className="col-12">
              {product.title} <span className="vr  "></span>{" "}
              {product.rating.rate} ⭐️
            </h2>
            <p className="single-product-description col-12">
              {product.description}
            </p>
            <p className="single-product-price col-12">
              Price: ${product.price}
            </p>
            <p className=" col-12  single-product-category">
              Category: {product.category}
            </p>
            <h2 className="col-12"> Color</h2>
            <div className="col-12 mb-3">
              <div className="rounded-circle color bg-black "></div>
            </div>
            <p className="col-12 single-product-size">
              Sizes:
              {["s", "m", "l", "xl"].map((size) => (
                <button
                  key={size}
                  className={` sizes ${selectedSize === size ? "selected-size" : ""
                    }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </p>
            <div className="col-12 row">
              <div className="quantity-container col-md-4 col-12 mb-3 ">
              <span className="minus-quantity" onClick={decreaseQuantity}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-minus"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l14 0" />
                  </svg>
                </span>
               
                <input
                  type="text"
                  value={quantity}
                  className="quantity-value"
                  onChange={() => { }}
                />
                 <span className="plus-quantity" onClick={increaseQuantity}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-plus"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 5l0 14" />
                    <path d="M5 12l14 0" />
                  </svg>
                </span>
              </div>
              <div className=" col-md-7 col-12 mb-3 w-100 p-0">
                <button className="add-to-cart" onClick={addToCartBtn}>Add to Cart</button>
              </div>
            </div>
            <hr />
            <div className="col-12">
              <div className="social-media-grid">
                <div className="">
                  <h2>Share :</h2>
                </div>
                <div className="svg-grid">
                  <FacebookSingleProduct className="mx-2" />
                  <Twitter className="mx-2" />
                  <Linkedin className="mx-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12">
          <h2 className=" text-capitalize description-row " >Description:</h2>
        </div>
        <div className="  col-12">
          <p className="single-product-description">{product.description}</p>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;

// {product ? (
//     <div>
//       <h2>{product.title}</h2>
//     </div>
//   ) : (
//     <div>No Product Found</div>
//   )}
