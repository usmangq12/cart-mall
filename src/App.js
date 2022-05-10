import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShippingDetails } from "./components/ShippingForm/Shipping Details";
import { ProductDetails } from "./components/ProductDetails";
import { HomePage } from "./components/Homepage/homepage";
import FinishOrder from "./components/FinishOrder";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shippingdetails" element={<ShippingDetails />} />
        <Route path="productdetails/:id" element={<ProductDetails />} />
        <Route path="finishorder" element={<FinishOrder />} />
      </Routes>
    </Router>
  );
}

export default App;
