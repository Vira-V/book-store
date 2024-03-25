import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import booksReducer from "./features/booksSlice";

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);
