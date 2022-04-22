import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  Container,
  Box,
  Input,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { FiShoppingCart } from "react-icons/fi";
import { SiShopware } from "react-icons/si";
import { ProductDetails } from "./ProductDetails";
import Homepage from "./Homepage/homepage";
import "./Shop.css";

export function NavBar() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Cart = () => {
    alert("You have added the product to your cart");
  };

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
              style={{
                fontSize: "1.4rem",
                marginRight: "12rem",
                cursor: "pointer",
              }}
              onClick={handleClickOpen}
              title="Open shopping cart"
            />
          </Box>
        </Container>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <Box sx={{ width: "600px", height: "100vh" }}>
          <DialogTitle>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h5">My Shopping Cart</Typography>

                <Button sx={{ color: "black" }} onClick={handleClose}>
                  X
                </Button>
              </Box>
            </Box>
          </DialogTitle>
          <DialogContent>
            <DialogContentText></DialogContentText>
          </DialogContent>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "1rem",
          }}
        >
          <Button sx={{ color: "blue" }} onClick={handleClose}>
            Cancel
          </Button>
          <Button>
            <Link
              to="/shippingdetails"
              style={{ textDecoration: "none", color: "blue" }}
            >
              Check Out
            </Link>
          </Button>
        </Box>
      </Dialog>
      <Homepage />
      {/* <ProductDetails /> */}
    </>
  );
}
