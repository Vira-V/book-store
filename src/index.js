import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import booksReducer, { booksFetch } from "./features/booksSlice";

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

store.dispatch(booksFetch());

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);
