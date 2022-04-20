import React from "react";
import { Container, Box, Input, Typography } from "@mui/material";
import { FiShoppingCart } from "react-icons/fi";
import { SiShopware } from "react-icons/si";
import { ProductDetails } from "./ProductDetails";
import "./Shop.css";

export function NavBar() {
  return (
    <>
      <Box className="NavBarMain">
        <Container>
          <Box className="NavbarContainer">
            <Box sx={{ display: "flex" }}>
              <SiShopware
                style={{
                  marginTop: "15px",
                  fontSize: "1.4rem",
                  color: "Orange",
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  fontSize: 30,
                  fontWeight: "bold",
                  padding: "5px",
                  color: "Orange",
                }}
                className="Logo"
              >
                Blinkifly
              </Typography>
            </Box>

            <Input
              placeholder="Search"
              sx={{
                width: "50%",
                border: "none",
                bgcolor: "#f5f5f5",
                marginLeft: "10rem",
              }}
            />

            <FiShoppingCart
              style={{ fontSize: "1.4rem", marginRight: "12rem" }}
            />
          </Box>
        </Container>
      </Box>
      <ProductDetails />
    </>
  );
}
