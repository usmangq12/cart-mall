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
import "../Shop.css";

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
      <Box className="category-list">
        <Box className="category-list-item">
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
        <Box className="product-list">
          {getProducts.map((product) => {
            return (
              <Box className="product-list-item" key={product.product_id}>
                <Link
                  className="product-list-item-link"
                  to={`/productdetails/${product.product_id}`}
                >
                  <Box className="product-list-item-image">
                    <img
                      src={"https://freepngimg.com/thumb/categories/627.png"}
                      alt={product.name}
                    />
                  </Box>
                  <Box className="product-list-item-name">
                    <Box>
                      <Typography
                        variant="span"
                        className="product-list-item-name-text"
                      >
                        Product Name:{" "}
                      </Typography>
                      {product.name}
                    </Box>
                    <Box>
                      {" "}
                      <Typography
                        variant="span"
                        className="product-list-item-name-text"
                      >
                        Price:{" "}
                      </Typography>{" "}
                      $ {product.price}
                    </Box>

                    <Box>
                      {" "}
                      <Typography
                        variant="h6"
                        className="product-list-item-name-text"
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
