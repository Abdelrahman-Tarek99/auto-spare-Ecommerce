import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  fetchProducts,
  fetchFilteredProducts,
} from "../../store/products/ProductsActions";
import { useDispatch, useSelector } from "react-redux";
import FilterOptions from "./FilterOptions";
import "./Products.css";

export default function ProductsList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");

  // Redux state selectors
  const allProducts = useSelector((state) => state.products.products);
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  console.log(filteredProducts);
  console.log(allProducts);

  useEffect(() => {
    if (filter) {
      dispatch(fetchFilteredProducts(`category/${filter}`));
    } else {
      dispatch(fetchProducts());
    }
  }, [dispatch, filter]);

  //   useEffect(() => {
  //     dispatch(fetchFilteredProducts("category/jewelery"));
  // }, [dispatch]);

  const productsToDisplay = filter ? filteredProducts : allProducts;
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
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

  const handleProductClick = (id) => {
    navigate(`/shop/${id}`);
  };

  return (
    <section className="container-fluid">
      <FilterOptions onFilterChange={handleFilterChange} selectedFilter={filter} />

      {productsToDisplay.length > 0 ? (
        <div className="products-container container-fluid ">
          {productsToDisplay.map((product) => (
            <div
              className="product-card"
              key={product.id}
              onClick={() => handleProductClick(product.id)}
            >
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-details">
                <h4>{product.title}</h4>
                <p>{product.description}</p>
                <p>${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="row">
          <div className="col-12 text-center">
            <h2>No Products Found</h2>
          </div>
        </div>
      )}
    </section>
  );
}
