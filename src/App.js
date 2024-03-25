import { Route, Routes, Navigate } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Top-header/Header";
import { HomePage } from "./pages/HomePage/HomePage";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { CartPage } from "./pages/CartPage/CartPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<CatalogPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/not-found" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
