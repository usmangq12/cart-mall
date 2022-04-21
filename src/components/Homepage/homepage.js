import React from "react";
import {
  Box,
  Container,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <Container
        sx={{
          display: "flex",
          margin: "1%",
        }}
      >
        <Box
          sx={{
            margin: "1%",
            width: "20%",
            height: "90vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <List>
            <ListItemButton>
              <ListItemText>
                <Link to="/productdetails" style={{ textDecoration: "none" }}>
                  Men
                </Link>
              </ListItemText>
            </ListItemButton>

            <ListItemButton>
              <ListItemText>
                <Link to="/productdetails" style={{ textDecoration: "none" }}>
                  Women
                </Link>{" "}
              </ListItemText>
            </ListItemButton>

            <ListItemButton>
              <ListItemText>
                <Link to="/productdetails" style={{ textDecoration: "none" }}>
                  Children
                </Link>{" "}
              </ListItemText>
            </ListItemButton>

            <ListItemButton>
              <ListItemText>a</ListItemText>
            </ListItemButton>

            <ListItemButton>
              <ListItemText>b</ListItemText>
            </ListItemButton>

            <ListItemButton>
              <ListItemText>b</ListItemText>
            </ListItemButton>

            <ListItemButton>
              <ListItemText>c</ListItemText>
            </ListItemButton>

            <ListItemButton>
              <ListItemText>d</ListItemText>
            </ListItemButton>

            <ListItemButton>
              <ListItemText>e</ListItemText>
            </ListItemButton>
          </List>
        </Box>
      </Container>
    </div>
  );
}
