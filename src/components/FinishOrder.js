import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Shop.css";

export default function FinishOrder() {
  return (
    <Box className="finish-order">
      <h1>Thanks for your order</h1>
      <Button variant="contained">
        <Link to="/" className="finish-order-button">
          Go to Home
        </Link>
      </Button>
    </Box>
  );
}
