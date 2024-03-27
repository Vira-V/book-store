import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import booksReducer, { booksFetch } from "./features/booksSlice";
import { booksApi } from "./features/booksApi";
import cartReducer from "./features/cartSlice";

const store = configureStore({
  reducer: {
    books: booksReducer,
    cart: cartReducer,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});

store.dispatch(booksFetch());

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);
