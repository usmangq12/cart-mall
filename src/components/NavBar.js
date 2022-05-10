import React, { useEffect, useState } from "react";
import { Container, Box, Input, Typography } from "@mui/material";
import { FiShoppingCart } from "react-icons/fi";
import { SiShopware } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { Cart } from "./Cart";
import axios from "axios";
import { GET_DEFAULT_PRODUCTS_LIST } from "./shopping redux/Actions";
import { Section } from "./Section/Section";
import "./Shop.css";

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [getProducts, updateGetProducts] = useState([]);
  const [cartItems, updateCartItems] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_DEFAULT_PRODUCTS_LIST });
  }, [dispatch]);

  const products = useSelector((state) => state.productsReducer.Products);

  useEffect(() => {
    axios
      .get(
        `https://backendapi.turing.com/products/search?query_string=${searchValue}`
      )
      .then((res) => {
        updateGetProducts(res.data.rows);
        if (searchValue === "") {
          dispatch({ type: GET_DEFAULT_PRODUCTS_LIST });
        }
      });
  }, [searchValue, dispatch]);

  useEffect(() => {
    if (searchValue === "") {
      updateGetProducts(products);
    }
  }, [searchValue, products]);

  useEffect(() => {
    updateGetProducts(products);
  }, [products]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box className="nav-bar-container">
        <Box className="NavBarMain">
          <Container>
            <Box className="NavbarContainer">
              <Box className="BlinkiflyBox">
                <SiShopware className="SiShopware" />
                <Typography variant="span" className="BlinkiflyText">
                  Blinkifly
                </Typography>
              </Box>

              <Input
                placeholder="Search"
                className="InputSearch"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={(e) => {
                  setSearchValue(e.target.value);
                }}
              />
              <Box className="CartIcon">
                <FiShoppingCart
                  className="FiShoppingCart"
                  onClick={handleClickOpen}
                  title="Open shopping cart"
                />
                <Typography variant="span" className="CartIconText">
                  {cartItems.length === 0 ? "" : cartItems.length}
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
      <Cart
        cartItems={cartItems}
        updateCartItems={updateCartItems}
        handleClose={handleClose}
        open={open}
      />

      <Section getProducts={getProducts} handleAddProduct={handleAddProduct} />
    </>
  );
}
