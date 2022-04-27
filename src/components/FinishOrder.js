import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function FinishOrder() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#fafafa",
        color: "#000",
        fontSize: "1.5rem",
        fontWeight: "bold",
        fontFamily: "sans-serif",
        textAlign: "center",
      }}
    >
      <h1>Thanks for your order</h1>
      <Button variant="contained">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          Go to Home
        </Link>
      </Button>
    </Box>
  );
}
