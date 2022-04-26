import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  GET_PRODUCTS_LIST,
  GET_PRODUCTS_LIST_ITALIAN,
  GET_PRODUCTS_LIST_IRISH,
  GET_PRODUCTS_LIST_ANIMAL,
  GET_PRODUCTS_LIST_FLOWER,
  GET_PRODUCTS_LIST_CHRISTMAS,
  GET_PRODUCTS_LIST_VALENTINES,
} from "../shopping redux/Actions";

export default function Homepage(props) {
  const { getProducts, handleAddProduct } = props;
  const dispatch = useDispatch();

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            width: "20%",
            height: "auto",
            marginLeft: "0.5rem",
            borderRadius: "10px",
            padding: "1rem",
            backgroundColor: "#f5f5f5",
          }}
        >
          <Typography variant="h4">Categories:</Typography>
          <ListItemButton
            sx={{
              marginTop: "1rem",
            }}
            onClick={() => {
              dispatch({ type: GET_PRODUCTS_LIST });
            }}
          >
            <ListItemText primary={"French"} />
          </ListItemButton>
          <ListItemButton
            sx={{
              marginTop: "1rem",
            }}
            onClick={() => {
              dispatch({ type: GET_PRODUCTS_LIST_ITALIAN });
            }}
          >
            <ListItemText primary={"Italian"} />
          </ListItemButton>
          <ListItemButton
            sx={{
              marginTop: "1rem",
            }}
            onClick={() => {
              dispatch({ type: GET_PRODUCTS_LIST_IRISH });
            }}
          >
            <ListItemText primary={"Irish"} />
          </ListItemButton>
          <ListItemButton
            sx={{
              marginTop: "1rem",
            }}
            onClick={() => {
              dispatch({ type: GET_PRODUCTS_LIST_ANIMAL });
            }}
          >
            <ListItemText primary={"Animal"} />
          </ListItemButton>
          <ListItemButton
            sx={{
              marginTop: "1rem",
            }}
            onClick={() => {
              dispatch({ type: GET_PRODUCTS_LIST_FLOWER });
            }}
          >
            <ListItemText primary={"Flower"} />
          </ListItemButton>
          <ListItemButton
            sx={{
              marginTop: "1rem",
            }}
            onClick={() => {
              dispatch({ type: GET_PRODUCTS_LIST_CHRISTMAS });
            }}
          >
            <ListItemText primary={"Christmas"} />
          </ListItemButton>
          <ListItemButton
            sx={{
              marginTop: "1rem",
            }}
            onClick={() => {
              dispatch({ type: GET_PRODUCTS_LIST_VALENTINES });
            }}
          >
            <ListItemText primary={"Valentine's"} />
          </ListItemButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            width: "100%",
            height: "90vh",
            gap: "30px",
          }}
        >
          {getProducts.map((product) => {
            return (
              <Box
                sx={{
                  width: "30%",
                  height: "auto",
                  borderRadius: "5px",
                  backgroundColor: "#f5f5f5",
                  boxShadow: "0px 0px 5px #000000",
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginRight: "1rem",
                }}
                key={product.product_id}
              >
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/productdetails/${product.product_id}`}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <img
                      // src={product.thumbnail}
                      src={"https://freepngimg.com/thumb/categories/627.png"}
                      alt={product.name}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "5px",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="span"
                        sx={{
                          fontWeight: "bold",
                        }}
                      >
                        Product Name:{" "}
                      </Typography>
                      {product.name}
                    </Box>
                    <Box>
                      {" "}
                      <Typography
                        variant="span"
                        sx={{
                          fontWeight: "bold",
                        }}
                      >
                        Price:{" "}
                      </Typography>{" "}
                      $ {product.price}
                    </Box>

                    <Box>
                      {" "}
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                        }}
                      >
                        {" "}
                        Product Description:{" "}
                      </Typography>{" "}
                      {product.description}
                    </Box>
                  </Box>
                </Link>

                <Box>
                  <Button
                    sx={{
                      marginTop: "8px",
                      marginBottom: "8px",
                      width: "300px",
                    }}
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      handleAddProduct(product);
                    }}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
