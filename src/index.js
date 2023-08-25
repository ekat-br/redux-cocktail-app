import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { cocktailApi } from "./features/api/apiSlice";
import ProductList from "./components/ProductList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={cocktailApi}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);
