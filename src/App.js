import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Account from "./components/Account";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ paddingTop: "5.7em" }}>
        <Routes>
          <Route path="/" element=<Home /> />
          <Route path="/profile" element=<Account /> />
          <Route path="/cart" element=<Cart /> />
          <Route path="/wishlist" element=<Wishlist /> />
          <Route path="/login" element=<Login /> />
          <Route path="/signup" element=<Signup /> />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
