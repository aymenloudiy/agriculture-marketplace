import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Login from "./pages/Login.tsx";
import Payment from "./pages/Payment.tsx";
import Details from "./pages/Details.tsx";
import Error from "./pages/Error.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="payment" element={<Payment />} />
          <Route path="details" element={<Details />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
