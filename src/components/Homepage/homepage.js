import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { GET_PRODUCTS_LIST } from "../shopping redux/Actions";

export default function Homepage(props) {
  const { getProducts, handleAddProduct } = props;
  const dispatch = useDispatch();

  const CategoryList = [
    {
      CategoryName: "French",
      id: 1,
    },
    {
      CategoryName: "Italian",
      " id": 2,
    },
    {
      CategoryName: "Irish",
      " id": 3,
    },
    {
      CategoryName: "Animal",
      " id": 4,
    },
    {
      CategoryName: "Flower",
      " id": 5,
    },
    {
      CategoryName: "Christmas",
      " id": 6,
    },
    {
      CategoryName: "Valentine's",
      " id": 7,
    },
  ];

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
          {CategoryList.map((category, index) => (
            <ListItemButton
              key={category.id}
              sx={{
                marginTop: "1rem",
              }}
              onClick={() => {
                dispatch({ type: GET_PRODUCTS_LIST, payload: index + 1 });
              }}
            >
              <ListItemText primary={category.CategoryName} />
            </ListItemButton>
          ))}
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
