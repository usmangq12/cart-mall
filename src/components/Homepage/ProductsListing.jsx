import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export function ProductsListing(props) {
  const { SearchedProducts } = props;
  const products = useSelector((state) => state.productsReducer.Products);
  // console.log(products);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "100%",
        height: "90vh",
        gap: "1%",
      }}
    >
      {products.map((product) => {
        return (
          <Link
            to={`/products/${product.product_id}`}
            style={{
              width: "30%",
              height: "40vh",
              border: "1px solid black",
              textDecoration: "none",
              color: "black",
            }}
            key={product.product_id}
          >
            <Box>

              <Box>
                <Box>{product.name}</Box>
                <Box>{product.price}</Box>

                <Box>{product.description}</Box>
              </Box>
            </Box>
          </Link>
        );
      })}
    </Box>
  );
}
