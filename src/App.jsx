import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import OverView from "./pages/OverView";
import "react-lazy-load-image-component/src/effects/blur.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/overview/:id" element={<OverView />} />
        <Route path="*" element={<Navigate to="/amazon-clone/" />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
