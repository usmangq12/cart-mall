import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
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
          <Box className="DialogTitle">
            <Box className="DialogTitleText">
              <Typography variant="h5" className="DialogTitleCartText">
                My Shopping Cart
              </Typography>

              <Button className="CartCloseButton" onClick={handleClose}>
                X
              </Button>
            </Box>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box className="DialogContent">
            <Box className="DialogContentHeader">Cart Items</Box>
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
              <Box className="noCartItems">No items in cart</Box>
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
                    {item.quantity} x $ {item.price}
                  </Box>
                </Box>
              ))}
            </Box>
            <Box className="cartTotalPrice">
              Total Price:
              <Box className="cartTotalPriceText">$ {totalPrice}</Box>
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
  );
}
