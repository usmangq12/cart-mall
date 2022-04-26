import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Box,
  Input,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { FiShoppingCart } from "react-icons/fi";
import { SiShopware } from "react-icons/si";
import Homepage from "./Homepage/homepage";
import { useSelector } from "react-redux";
import "./Shop.css";

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [getProducts, updateGetProducts] = useState([]);
  const [cartItems, updateCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExists = cartItems.find(
      (item) => item.product_id === product.product_id
    );
    if (ProductExists) {
      updateCartItems(
        cartItems.map((item) =>
          item.product_id === product.product_id
            ? { ...ProductExists, quantity: ProductExists.quantity + 1 }
            : item
        )
      );
    } else {
      updateCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const InreaseQuantity = (product) => {
    const ProductExists = cartItems.find(
      (item) => item.product_id === product.product_id
    );
    if (ProductExists) {
      updateCartItems(
        cartItems.map((item) =>
          item.product_id === product.product_id
            ? { ...ProductExists, quantity: ProductExists.quantity + 1 }
            : item
        )
      );
    } else {
      updateCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const DecreaseQuantity = (product) => {
    const ProductExists = cartItems.find(
      (item) => item.product_id === product.product_id
    );
    if (ProductExists.quantity === 1) {
      updateCartItems(
        cartItems.filter((item) => item.product_id !== product.product_id)
      );
    } else {
      updateCartItems(
        cartItems.map((item) =>
          item.product_id === product.product_id
            ? { ...ProductExists, quantity: ProductExists.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleClearCart = () => {
    updateCartItems([]);
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const products = useSelector((state) => state.productsReducer.Products);

  useEffect(() => {
    updateGetProducts(products);
  }, [products]);

  const handleSearch = () => {
    let newArray = products.filter(function (getInnerValue) {
      if (
        getInnerValue.name.toUpperCase().includes(searchValue.toUpperCase())
      ) {
        return true;
      } else if (
        getInnerValue.description
          .toUpperCase()
          .includes(searchValue.toUpperCase())
      ) {
        return true;
      } else {
        return false;
      }
    });

    updateGetProducts(newArray);
  };

  return (
    <>
      <Box className="NavBarMain">
        <Container>
          <Box className="NavbarContainer">
            <Box sx={{ display: "flex" }}>
              <SiShopware className="SiShopware" />
              <Typography
                variant="h5"
                sx={{
                  fontSize: 30,
                  fontWeight: "bold",
                  padding: "5px",
                  color: "Orange",
                }}
              >
                Blinkifly
              </Typography>
            </Box>

            <Input
              placeholder="Search"
              className="InputSearch"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyUp={handleSearch}
            />
            <Box className="CartIcon">
              <FiShoppingCart
                onClick={handleClickOpen}
                title="Open shopping cart"
              />
              <Typography
                variant="span"
                sx={{
                  margin: "3px",
                  fontSize: "14px",
                  fontWeight: "700",
                  verticalAlign: "super",
                  color: "Orange",
                }}
              >
                {cartItems.length === 0 ? "" : cartItems.length}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <Box className="DialogBox">
          <DialogTitle>
            <Box className="DialogTitle">
              <Box className="DialogTitleText">
                <Typography variant="h5">My Shopping Cart</Typography>

                <Button sx={{ color: "black" }} onClick={handleClose}>
                  X
                </Button>
              </Box>
            </Box>
          </DialogTitle>
          <DialogContent>
            <Box
              sx={{
                margin: "30px auto",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  height: "50px",
                  fontSize: "20px",
                  borderBottom: "2px solid black",
                }}
              >
                Cart Items
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "10px",
                  marginRight: "10px",
                }}
              >
                {cartItems.length >= 1 && (
                  <Button
                    sx={{
                      border: "none",
                      borderRadius: "5px",
                      backgroundColor: "red",
                      height: "30px",
                      width: "100px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      color: "black",
                    }}
                    onClick={handleClearCart}
                  >
                    Clear Cart
                  </Button>
                )}
              </Box>
              {cartItems.length === 0 && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "18px",
                    fontWeight: "700",
                    paddingTop: "20px",
                  }}
                >
                  No items in cart
                </Box>
              )}
              <Box>
                {cartItems.map((item) => (
                  <Box
                    key={item.product_id}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      paddingTop: "20px",
                      paddingBottom: "20px",
                      fontSize: "20px",
                      fontWeight: "700",
                    }}
                  >
                    <Box>
                      <img
                        style={{
                          width: "100px",
                          height: "auto",
                          border: "2px solid #e0e0e0",
                          marginRight: "10px",
                        }}
                        src="https://freepngimg.com/thumb/categories/627.png"
                      />
                    </Box>
                    <Box
                      sx={{
                        width: "25%",
                      }}
                    >
                      {item.name}
                    </Box>
                    <Box
                      sx={{
                        width: "25%",
                        display: "flex",
                      }}
                    >
                      <Button
                        sx={{
                          size: "small",
                          width: "30px",
                          fontWeight: "700",
                          border: "none",
                          borderRadius: "3px",
                          fontSize: "18px",
                          color: "black",
                          cursor: "pointer",
                          active: {
                            transform: "translateY(1.2px)",
                          },
                        }}
                        size="small"
                        variant="contained"
                        color="primary"
                        onClick={() => InreaseQuantity(item)}
                      >
                        +
                      </Button>
                      <Button
                        sx={{
                          width: "30px",
                          fontWeight: "700",
                          border: "none",
                          marginLeft: "5px",
                          borderRadius: "3px",
                          fontSize: "18px",
                          color: "black",
                          cursor: "pointer",
                          active: {
                            transform: "translateY(1.2px)",
                          },
                        }}
                        size="small"
                        variant="contained"
                        color="error"
                        onClick={() => DecreaseQuantity(item)}
                      >
                        -
                      </Button>
                    </Box>
                    <Box
                      sx={{
                        paddingLeft: "20px",
                      }}
                    >
                      {item.quantity} x $ {item.price}
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box
                sx={{
                  borderTop: "2px solid black",
                  borderBottom: "2px solid black",
                  display: "flex",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  paddingLeft: "22%",
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                Total Price:
                <Box
                  sx={{
                    display: "flex",
                    paddingLeft: "50%",
                  }}
                >
                  $ {totalPrice}
                </Box>
              </Box>
              <Box className="DialogFooter">
                <Button className="DialogButton" onClick={handleClose}>
                  Cancel
                </Button>
                <Button>
                  <Link to="/shippingdetails" className="DialogButton">
                    Check Out
                  </Link>
                </Button>
              </Box>
            </Box>
          </DialogContent>
        </Box>
      </Dialog>

      <Homepage getProducts={getProducts} handleAddProduct={handleAddProduct} />
    </>
  );
}
