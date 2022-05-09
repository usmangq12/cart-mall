import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function ProductSection(props) {
  const { getProducts, handleAddProduct } = props;
  return (
    <Box>
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
                  <Box className="product-list-item-name-text-price">
                    {" "}
                    <Typography
                      variant="span"
                      className="product-list-item-name-text-price"
                    >
                      Price:{" "}
                    </Typography>
                    {"$"}
                    {product.price}
                  </Box>
                  <Box>
                    {" "}
                    <Typography
                      variant="span"
                      className="product-list-item-name-discounted-text"
                    >
                      Discounted Price:{" "}
                    </Typography>{" "}
                    {"$"}
                    {product.discounted_price}
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
  );
}
