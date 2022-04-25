import { Button, Typography,Input ,TextareaAutosize} from "@mui/material";
import { Box, width } from "@mui/system";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { FcRating } from 'react-icons/fc';

export function ProductDetails() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <Box
          component={"img"}
          sx={{ width: "35%", height: "500px", marginLeft: "2rem" }}
          src="
          https://cdn.shopify.com/s/files/1/0104/5757/9583/products/OSCO-Men-Dress-Shoes-Men-Formal-Shoes-Leather-Luxury-Fashion-Wedding-Shoes-Men-Business-Casual-Oxford.jpg?v=1575045878"
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "3rem",
            width: "50%",
            height: "500px",
            border: "1px solid black",
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

          <Typography
            sx={{
              fontSize: "1.2rem",
              marginLeft: "2rem",
              marginTop: "2rem",
            }}
          >
            The resulting treaties allowed Italy, Romania, Hungary, Bulgaria,
            and Finland to reassume their responsibilities as sovereign states
            in international affairs and thus qualify for membership in the UN.
          </Typography>

          <Button
            sx={{
              marginTop: "30%",
              border: "1px solid black",
              width: "25%",
              marginLeft: "38%",
            }}
          >
            Add to Cart
          </Button>
        </Box>

        <Box>

          <Box
          sx={{
            display:"flex",
            textAlign:"center",
          }}
          >
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginLeft: "2rem",
              marginBottom: "2rem",
              marginTop: "2rem",
              
            }}
          >
          <FcRating style={{color: "black", fontSize: "50px"}}/> Reviews 
          </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              marginLeft: "2rem",
            }}
          >
            Review this product
          </Typography>
          <Typography
            sx={{
              fontSize: "1.2rem",
              marginLeft: "2rem",
              marginBottom: "2rem",
            }}
          >
            Share your thoughts with other customers
          </Typography>
          <Button
            variant="contained"
            onClick={handleClickOpen}
            sx={{
              marginLeft: "2rem",
              marginBottom: "2rem",
            }}
          >
            Write A Review
          </Button>
          <Dialog
            
          
          open={open} onClose={handleClose} 
        >
            <DialogTitle>Write A Review</DialogTitle>
            <DialogContent
            sx={{
              width:"400px",
              height:"40vh"
            }}
            >
               <Box>
              <Input  placeholder="Name"  style={{padding:"5px", width:"400px"}}  />
              <Box
              sx={{ 
                marginTop:"10px",
              }}>
              
              <Input  placeholder="Email"  style={{padding:"5px", width:"400px"}}  />
              </Box>
              <Box 
              sx={{ 
                marginTop:"10px",
              }}>
              <TextareaAutosize
               minRows={8}
              placeholder="Enter your feedback"
              style={{ width:"400px", }}
              />
              </Box>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Add Review</Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </>
  );
}
