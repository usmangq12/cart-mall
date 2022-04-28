import { Box, Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./Shop.css";

export default function Cart(props) {
  const { cartItems, updateCartItems, open, handleClose } = props;

  const handleClearCart = () => {
    updateCartItems([]);
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

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  useEffect(() => {
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
  }, [totalPrice]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box className="DialogBox">
        <DialogTitle>
          <Box className="DialogTitleText">My Shopping Cart</Box>
        </DialogTitle>
        <DialogContent>
          <Box className="DialogContent">
            {cartItems.length === 0 ? (
              ""
            ) : (
              <Box className="DialogContentHeader">Cart Items</Box>
            )}
            <Box className="clearCart">
              {cartItems.length >= 1 && (
                <Button
                  variant="contained"
                  className="clearCartButton"
                  onClick={handleClearCart}
                >
                  Clear Cart
                </Button>
              )}
            </Box>
            {cartItems.length === 0 && (
              <Box className="noCartItems">
                <img
                  src="https://www.gamkart.com/frontend/img/empty-cart.png"
                  alt="no items"
                />
                <Button variant="outlined" size="small" onClick={handleClose}>
                  Continue Shopping
                </Button>
              </Box>
            )}
            <Box>
              {cartItems.map((item) => (
                <Box key={item.product_id} className="cartItems">
                  <Box>
                    <img
                      className="cartItemImage"
                      src="https://freepngimg.com/thumb/categories/627.png"
                      alt="cartItemImage"
                    />
                  </Box>
                  <Box className="cartItemName">{item.name}</Box>
                  <Box className="cartItemQuantity">
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      className="cartItemIncreaseQuantityButton"
                      onClick={() => InreaseQuantity(item)}
                    >
                      +
                    </Button>
                    <Box>{item.quantity}</Box>
                    <Button
                      className="cartItemDecreaseQuantityButton"
                      size="small"
                      variant="contained"
                      color="error"
                      onClick={() => DecreaseQuantity(item)}
                    >
                      -
                    </Button>
                  </Box>
                  <Box className="cartItemPrice">
                    {" "}
                    {"$"}
                    {item.price * item.quantity}
                  </Box>
                </Box>
              ))}
            </Box>
            {cartItems.length === 0 ? (
              ""
            ) : (
              <Box className="cartTotalPrice">
                Total Price:
                <Box className="cartTotalPriceText">$ {totalPrice}</Box>
              </Box>
            )}
            {cartItems.length === 0 ? (
              ""
            ) : (
              <Box className="DialogFooter">
                <Button
                  variant="contained"
                  className="DialogButton"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button variant="contained">
                  <Link to="/shippingdetails" className="DialogButton">
                    Check Out
                  </Link>
                </Button>
              </Box>
            )}
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
}
