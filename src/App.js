import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ShippingDetails } from "./components/Shipping Details";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="shippingdetails" element={<ShippingDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
