import React from "react";
import { useDispatch } from "react-redux";
import { Box, Typography, ListItemButton, ListItemText } from "@mui/material";
import { GET_PRODUCTS_LIST } from "../shopping redux/Actions";
import { categoryList } from "../Constant";

export function SideBarSection(props) {
  const dispatch = useDispatch();

  return (
    <Box className="category-list-item">
      <Typography variant="h4">Categories:</Typography>
      {categoryList.map((category) => (
        <ListItemButton
          key={category.id}
          sx={{
            marginTop: "1rem",
          }}
          onClick={() => {
            dispatch({ type: GET_PRODUCTS_LIST, payload: category.id });
          }}
        >
          <ListItemText primary={category.CategoryName} />
        </ListItemButton>
      ))}
    </Box>
  );
}
