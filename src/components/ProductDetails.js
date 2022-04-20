import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import axios from "axios";

export function ProductDetails() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://backendapi.turing.com/products").then((res) => {
      setProducts(res.data.rows);
    });
  }, []);

  console.log(products);

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
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid black",
            marginLeft: "3rem",
            width: "55%",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginLeft: "2rem",
              marginBottom: "2rem",
            }}
          >
            Title: Clarks Men's Tilden Cap Oxford Shoe
          </Typography>
          <Typography
            sx={{ fontSize: "1.5rem", fontWeight: "bold", marginLeft: "2rem" }}
          >
            Product Features:
          </Typography>

          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  inset
                  primary="100% Leather
"
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText inset primary="Imported" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  inset
                  primary="Thermoplastic Elastomers sole
"
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  inset
                  primary="Heel measures approximately 0.98"
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  inset
                  primary="These smart men's shoes with a square cap toe toe are crafted from a premium leather
                  "
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  inset
                  primary="Ortholite footbed that softens impact and wicks away moisture
                  "
                />
              </ListItemButton>
            </ListItem>
          </List>
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
