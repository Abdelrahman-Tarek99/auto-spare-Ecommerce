import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import AuthContextProvider from "./components/store/AuthContext";
import { Provider } from "react-redux";
import store from "./components/store/Index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


