import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";

import App from "./App";
import AuthLayout from "./layout/authLayout";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import Login from "./pages/loginPage";
import ForgotPassword from "./pages/forgotPasswordPage";
import Error from "./pages/Error";
import SignupPage from "./pages/signupPage";

import CategoryPage from "./pages/CategoryPage";
import { CartProvider } from "./context/CartContext";
import ProductPageWrapper from "./pages/ProductPageWrapper";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Routes>
          {/* Auth Routes - no header/footer */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Route>

          {/* Main Layout - with header/footer */}
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="product/:id" element={<ProductPageWrapper />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="category/:name" element={<CategoryPage />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
