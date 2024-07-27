import { createSlice } from "@reduxjs/toolkit";
///////////////////////////////////////////////////////
// -->  ACTION.PAYLOAD IS THE DATA ITSELF WHICH WILL HAPPEN EVERYTHING ON IT
// --> WHILE STATE IS THE CURRENT STATE THAT IF WANT TO CHANGE ON IT AND THEN READ FROM IT KEEP MY BACKEND UPDATED
///////////////////////////////////////////////////////
// action.payload is the data passed to the Redux action. It's often used to update the Redux store.
// state is the current state of the Redux store. It's used within reducers to determine the new state based on the action.
///////////////////////////////////////////////////////

const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    filteredProducts: [],
    cart: [],
    cartTotalPrice: 0,
    cartTotalQuantity: 0,
    totalQuantity: 0,
    changed: false,
    loading: false,
    error: null,
  },
  reducers: {
    startLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setAllProducts(state, action) {
      state.products = action.payload;
      state.loading = false;
    },
    setFilteredProducts(state, action) {
      state.filteredProducts = action.payload;
      state.loading = false;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    addItemToCart(state, action) {
      state.changed = true;
      const newItem = action.payload;
      state.totalQuantity++;
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.cart.push({
          id: newItem.id,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.price * newItem.quantity,
          size: newItem.size,
          name: newItem.title,
          image: newItem.image,
        });
      } else {
        existingItem.quantity = existingItem.quantity + newItem.quantity;
        existingItem.totalPrice = newItem.price * newItem.quantity;
      }

      state.cartTotalPrice = state.cart.reduce((total, item) => {
        return total + item.totalPrice;
      }, 0);

      state.cartTotalQuantity = state.cart.reduce((total, item) => {
        return total + item.quantity;
      }, 0);

      //   console.log("Cart Total Price:", state.cartTotalPrice);
      //   console.log("Cart Total Quantity:", state.cartTotalQuantity);
    },
    removeItemFromCart(state, action) {
      state.changed = true;
      const id = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.cartTotalPrice -= existingItem.totalPrice;
        state.cart = state.cart.filter((item) => item.id !== id);
      }
    },
    setCart(state, action) {
      // state.changed = true;
      const totalPrice = action.payload.items.reduce((total, item) => {
        return total + item.totalPrice;
      }, 0);
      const totalQuantity = action.payload.items.reduce((total, item) => {
        return total + item.quantity;
      }, 0);
      state.cartTotalPrice = totalPrice;
      state.cartTotalQuantity = totalQuantity;
      // state.cart = action.payload.items;
      state.cart = [...state.cart, ...action.payload.items];
    },
    increaseQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      existingItem.quantity++;
      existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      state.cartTotalPrice = state.cart.reduce((total, item) => {
        return total + item.totalPrice;
      }, 0);
      state.cartTotalQuantity = state.cart.reduce((total, item) => {
        return total + item.quantity;
      }, 0);
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      state.cartTotalPrice = state.cart.reduce((total, item) => {
        return total + item.totalPrice;
      }, 0);
      state.cartTotalQuantity = state.cart.reduce((total, item) => {
        return total + item.quantity;
      }, 0);
    },
    removeAllItemsFromCart(state) {
      state.cart = [];
      state.cartTotalPrice = 0;
      state.cartTotalQuantity = 0;
    },
  },
});

export const productActions = ProductsSlice.actions;

export default ProductsSlice.reducer;
