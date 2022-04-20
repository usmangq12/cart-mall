import { Box } from "@mui/system";

export function ProductDetails() {
  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <Box
          component={"img"}
          sx={{ width: "500px", height: "500px", marginLeft: "2rem" }}
          src="
          https://cdn.shopify.com/s/files/1/0104/5757/9583/products/OSCO-Men-Dress-Shoes-Men-Formal-Shoes-Leather-Luxury-Fashion-Wedding-Shoes-Men-Business-Casual-Oxford.jpg?v=1575045878"
        />

        <Box
          sx={{ border: "1px solid black", marginLeft: "3rem", width: "55%" }}
        >
          Product Specifications
        </Box>

        <Box
          sx={{
            border: "1px solid black",
            marginLeft: "2rem",
            marginTop: "2rem",
            width: "95%",
            height: "50vh",
          }}
        >
          Product Reviews
        </Box>
        <Box
          sx={{
            border: "1px solid black",
            marginLeft: "2rem",
            marginTop: "2rem",
            width: "95%",
            height: "50vh",
          }}
        >
          Add Reviews
        </Box>
      </Box>
    </>
  );
}
