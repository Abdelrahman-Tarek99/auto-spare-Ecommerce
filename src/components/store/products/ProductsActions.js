import { productActions } from "./ProductsSlice";

export const fetchProducts = () => async (dispatch) => {
  dispatch(productActions.startLoading());
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Could not fetch products!");
    }
    const products = await response.json();
    dispatch(productActions.setAllProducts(products));
  } catch (error) {
    dispatch(productActions.setError(error.message));
  }
};
// Action to fetch filtered products
export const fetchFilteredProducts = (filterCriteria) => async (dispatch) => {
  console.log("FROM FETCH FILTERED PRODUCTS", filterCriteria);
  dispatch(productActions.startLoading());
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${filterCriteria}`
    );
    if (!response.ok) {
      throw new Error("Could not fetch filtered products!");
    }
    const filteredProducts = await response.json();
    dispatch(productActions.setFilteredProducts(filteredProducts));
  } catch (error) {
    dispatch(productActions.setError(error.message));
  }
};
////////////////////////////////////////////////////////////////////////
export const addItemToCartAction = (product) => {
  return async (dispatch, getState) => {
   
    dispatch(productActions.addItemToCart(product));
    await dispatch(sendCartData(getState().products.cart));
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    dispatch(productActions.startLoading());
    try {
      // This example fetches the cart data
      const response = await fetch(
        "https://autospare-38909-default-rtdb.firebaseio.com/cart.json"
      ); // Replace with the correct URL for your user's cart
      if (!response.ok) {
        throw new Error("Fetching cart data failed.");
      }

      const cartData = await response.json();
    dispatch(productActions.setCart({
      items: cartData || [], // Make sure it's an array, even if it's empty
    }));

      dispatch(productActions.setLoading(false));
    } catch (error) {
      dispatch(productActions.setError(error.message));
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(productActions.startLoading());
    try {
      const response = await fetch(
        "https://autospare-38909-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }

      dispatch(productActions.setLoading(false));
    } catch (error) {
      dispatch(productActions.setError(error.message));
    }
  };
};

export const removeItemFromCart = (id) => async (dispatch, getState) => {
  dispatch(productActions.removeItemFromCart(id));
  await dispatch(sendCartData(getState().products.cart));
};

export const increaseQuantityAction = (id) => async (dispatch, getState) => {
  dispatch(productActions.increaseQuantity(id));
  await dispatch(sendCartData(getState().products.cart));
};

export const decreaseQuantityAction = (id) => async (dispatch, getState) => {
  dispatch(productActions.decreaseQuantity(id));
  await dispatch(sendCartData(getState().products.cart));
};
export const removeAllItemsFromCart = () => async (dispatch, getState) => {
  dispatch(productActions.removeAllItemsFromCart());
  await dispatch(sendCartData(getState().products.cart));
};
