import {
  Box,
  Button,
  Dialog,
  DialogContent,
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableCell,
  Modal,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import "./Shop.css";

export function Cart(props) {
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

  const RemoveProduct = (product) => {
    updateCartItems(
      cartItems.filter((item) => item.product_id !== product.product_id)
    );
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  useEffect(() => {
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
  }, [totalPrice]);

  return (
    <Modal open={open} onClose={handleClose} className="cart-modal">
      <Box className="DialogBox">
        <DialogContent>
          <Box className="DialogContent">
            {cartItems.length === 0 ? (
              ""
            ) : (
              <Box className="DialogContentHeader">Cart Items</Box>
            )}

            {cartItems.length === 0 && (
              <Box className="noCartItems">
                <img
                  src="https://www.gamkart.com/frontend/img/empty-cart.png"
                  alt="no items"
                />
                <Button variant="contained" size="small" onClick={handleClose}>
                  Continue Shopping
                </Button>
              </Box>
            )}
            {cartItems.length === 0 ? (
              ""
            ) : (
              <TableContainer sx={{ maxHeight: 340 }}>
                <Table stickyHeader className="cartTable">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{
                          borderBottom: "1px solid black",
                          borderRight: "1px solid black",
                          textAlign: "center",
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        Image
                      </TableCell>
                      <TableCell
                        sx={{
                          borderBottom: "1px solid black",
                          borderRight: "1px solid black",
                          textAlign: "center",
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        Product
                      </TableCell>
                      <TableCell
                        sx={{
                          borderBottom: "1px solid black",
                          borderRight: "1px solid black",
                          textAlign: "center",
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        Price
                      </TableCell>
                      <TableCell
                        sx={{
                          borderBottom: "1px solid black",
                          borderRight: "1px solid black",
                          textAlign: "center",
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        Quantity
                      </TableCell>
                      <TableCell
                        sx={{
                          borderBottom: "1px solid black",
                          borderRight: "1px solid black",
                          textAlign: "center",
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        Remove Item
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  `
                  {cartItems.map((item) => (
                    <TableRow key={item.product_id}>
                      <TableCell
                        sx={{
                          borderBottom: "1px solid black",
                          borderRight: "1px solid black",
                          textAlign: "center",
                        }}
                      >
                        <img
                          src={
                            "https://freepngimg.com/thumb/categories/627.png"
                          }
                          alt={item.name}
                          className="cartItemImage"
                        />
                      </TableCell>
                      <TableCell
                        sx={{
                          borderBottom: "1px solid black",
                          borderRight: "1px solid black",
                        }}
                      >
                        <Box className="cartItemName"> {item.name}</Box>
                      </TableCell>
                      <TableCell
                        sx={{
                          borderBottom: "1px solid black",
                          borderRight: "1px solid black",
                        }}
                      >
                        <Box className="cartItemPrice">
                          {"$"} {(item.price * item.quantity).toFixed(2)}
                        </Box>
                      </TableCell>
                      <TableCell
                        sx={{
                          borderBottom: "1px solid black",
                          borderRight: "1px solid black",
                        }}
                      >
                        <Box className="cartItemQuantityBox">
                          <Button
                            size="small"
                            variant="contained"
                            color="error"
                            className="cartItemDecreaseQuantityButton"
                            onClick={() => DecreaseQuantity(item)}
                          >
                            -
                          </Button>
                          <Box className="cartItemQuantity">
                            {item.quantity}{" "}
                          </Box>
                          <Button
                            size="small"
                            className="cartItemIncreaseQuantityButton"
                            variant="contained"
                            color="primary"
                            onClick={() => InreaseQuantity(item)}
                          >
                            +
                          </Button>
                        </Box>
                      </TableCell>
                      <TableCell
                        sx={{
                          borderBottom: "1px solid black",
                          textAlign: "center",
                        }}
                      >
                        <AiFillDelete
                          className="cartItemRemoveButton"
                          onClick={() => RemoveProduct(item)}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </Table>
              </TableContainer>
            )}
            {cartItems.length === 0 ? (
              ""
            ) : (
              <Box className="cartTotalPrice">
                <Box>Total Price:</Box>
                <Box>$ {totalPrice.toFixed(2)}</Box>
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
                  Continue Shopping
                </Button>

                <Button
                  variant="contained"
                  className="DialogButton"
                  onClick={handleClearCart}
                >
                  Clear Cart
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
    </Modal>
  );
}
