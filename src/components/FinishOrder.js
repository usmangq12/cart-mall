import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Shop.css";

export default function FinishOrder() {
  return (
    <Box className="finish-order">
      <Typography variant="h2">"Your order is successfully placed"</Typography>
      <Button variant="contained">
        <Link to="/" className="finish-order-button">
          Go to Home
        </Link>
      </Button>
    </Box>
  );
}
