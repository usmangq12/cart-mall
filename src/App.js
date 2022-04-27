import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ShippingDetails } from "./components/Shipping Details";
import { ProductDetails } from "./components/ProductDetails";
import FinishOrder from "./components/FinishOrder";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="shippingdetails" element={<ShippingDetails />} />
        <Route path="productdetails/:id" element={<ProductDetails />} />
        <Route path="finishorder" element={<FinishOrder />} />
      </Routes>
    </Router>
  );
}

export default App;
