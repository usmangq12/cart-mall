import { useDispatch } from "react-redux";
import { Box, Container, ListItemButton, ListItemText } from "@mui/material";

import { ProductsListing } from "./ProductsListing";

import {
  GET_PRODUCTS_LIST,
  GET_PRODUCTS_LIST_ITALIAN,
  GET_PRODUCTS_LIST_IRISH,
  GET_PRODUCTS_LIST_ANIMAL,
  GET_PRODUCTS_LIST_FLOWER,
  GET_PRODUCTS_LIST_CHRISTMAS,
  GET_PRODUCTS_LIST_VALENTINES,
} from "../shopping redux/Actions";

export default function Homepage() {
  const dispatch = useDispatch();

  return (
    <Box>
      <Container
        sx={{
          display: "flex",
          margin: "1%",
        }}
      >
        <Box
          sx={{
            width: "20%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ListItemButton
            onClick={() => {
              dispatch({ type: GET_PRODUCTS_LIST });
            }}
          >
            <ListItemText primary={"French"} />
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              dispatch({ type: GET_PRODUCTS_LIST_ITALIAN });
            }}
          >
            <ListItemText primary={"Italian"} />
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              dispatch({ type: GET_PRODUCTS_LIST_IRISH });
            }}
          >
            <ListItemText primary={"Irish"} />
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              dispatch({ type: GET_PRODUCTS_LIST_ANIMAL });
            }}
          >
            <ListItemText primary={"Animal"} />
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              dispatch({ type: GET_PRODUCTS_LIST_FLOWER });
            }}
          >
            <ListItemText primary={"Flower"} />
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              dispatch({ type: GET_PRODUCTS_LIST_CHRISTMAS });
            }}
          >
            <ListItemText primary={"Christmas"} />
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              dispatch({ type: GET_PRODUCTS_LIST_VALENTINES });
            }}
          >
            <ListItemText primary={"Valentine's"} />
          </ListItemButton>
        </Box>
        <ProductsListing />
      </Container>
    </Box>
  );
}
