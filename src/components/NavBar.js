import React, { useEffect, useState } from "react";
import { Container, Box, Input, Typography } from "@mui/material";
import { FiShoppingCart } from "react-icons/fi";
import { SiShopware } from "react-icons/si";
import Homepage from "./Homepage/homepage";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import "./Shop.css";

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [getProducts, updateGetProducts] = useState([]);
  const [cartItems, updateCartItems] = useState([]);

  const products = useSelector((state) => state.productsReducer.Products);

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

  const handleSearch = () => {
    let filteredArray = products.filter((getSearchItem) => {
      if (
        getSearchItem.name.toUpperCase().includes(searchValue.toUpperCase())
      ) {
        return true;
      } else if (
        getSearchItem.description
          .toUpperCase()
          .includes(searchValue.toUpperCase())
      ) {
        return true;
      } else {
        return false;
      }
    });

    updateGetProducts(filteredArray);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
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
              onKeyUp={handleSearch}
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

      <Cart
        cartItems={cartItems}
        updateCartItems={updateCartItems}
        handleClose={handleClose}
        open={open}
      />

      <Homepage getProducts={getProducts} handleAddProduct={handleAddProduct} />
    </>
  );
}
