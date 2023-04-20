import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/molecules/footer";
import Header from "./components/molecules/header";
import CartPage from "./pages/cart";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import OrdersPage from "./pages/orders";
import ProfilePage from "./pages/profile";
import Settings from "./pages/settings";
import CartState from "./context/cart/cart-state";
import OrderSuccessPage from "./pages/order-success";
import CheckoutPage from "./pages/checkout";

function App() {
  if (localStorage.getItem("isAuthenticated") !== "true") {
    return <Navigate to="/login" />;
  }

  return (
    <CartState>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="cart" element={<CartPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="order-success" element={<OrderSuccessPage />} />
        </Routes>
        <Footer />
      </div>
    </CartState>
  );
}

export default App;
