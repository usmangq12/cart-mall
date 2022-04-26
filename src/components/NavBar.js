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
  DialogContentText,
  DialogTitle,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "@mui/material";
import { FiShoppingCart } from "react-icons/fi";
import { SiShopware } from "react-icons/si";
import Homepage from "./Homepage/homepage";
import { useSelector } from "react-redux";
import "./Shop.css";

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [getProducts, setGetProducts] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const products = useSelector((state) => state.productsReducer.Products);

  useEffect(() => {
    setGetProducts(products);
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

    setGetProducts(newArray);
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

            <FiShoppingCart
              className="CartIcon"
              onClick={handleClickOpen}
              title="Open shopping cart"
            />
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
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Sr. No.</TableCell>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Product Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {getProducts.map((product, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>$ {product.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </DialogContent>
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
      </Dialog>

      <Homepage getProducts={getProducts} />
    </>
  );
}
