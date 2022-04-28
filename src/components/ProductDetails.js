import { Box, Button, Input, TextareaAutosize } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { FcRating } from "react-icons/fc";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export function ProductDetails() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeadback] = useState("");
  const [review, setReview] = useState([]);

  let { id } = useParams();

  const [pass, setPass] = useState("");

  const Items = useSelector((state) => state.productsReducer.Products);

  useEffect(() => {
    const newPass = Items.find((item) => item.product_id === parseInt(id));

    setPass(newPass);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handelReview = () => {
    const data = { title, email, feedback };
    const updateItems = [...review, data];
    setReview(updateItems);
  };

  return (
    <>
      <Box className="product-details-Main">
        <Box className="product-details-container">
          <Box
            component={"img"}
            className="product-details-image"
            src="
          https://freepngimg.com/thumb/categories/627.png"
          />

          <Box className="product-details-info">
            <Box className="product-details-title">Title: {pass.name}</Box>
            <Box className="product-details-Features">Product Features:</Box>

            <Box className="product-details-description">
              {pass.description}
            </Box>
            <Box className="product-details-price-Box">
              <Box className="product-details-price">Price: </Box>
              <Box className="product-details-price-value">
                {"   "}
                {pass.price} $
              </Box>
            </Box>
          </Box>
        </Box>

        <hr />

        <Box className="product-details-review-Container">
          <Box className="product-details-review-box">
            <Box>
              <FcRating className="product-details-review-icon" />
            </Box>
            <Box className="product-details-review-text">Reviews</Box>
          </Box>
          <Box className="product-details-review-textbox">
            Review this product
          </Box>
          <Box className="product-details-review-title">
            Share your thoughts with other customers
          </Box>
          <Box className="product-details-review-button">
            <Button variant="contained" onClick={handleClickOpen}>
              Write A Review
            </Button>
          </Box>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Write A Review</DialogTitle>
            <DialogContent className="product-details-review-dialog">
              <Box>
                <Input
                  placeholder="Review Title"
                  onChange={(e) => setTitle(e.target.value)}
                  className="product-details-review-Input-title"
                />
                <Box className="product-details-review-Input-email-Box">
                  <Input
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="product-details-review-Input-email"
                  />
                </Box>
                <Box className="product-details-review-Input-feedback-box">
                  <TextareaAutosize
                    minRows={8}
                    placeholder="Enter your feedback"
                    onChange={(e) => setFeadback(e.target.value)}
                    className="product-details-review-Input-feedback"
                  />
                </Box>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button
                type="submit"
                onClick={() => {
                  handleClose();
                  handelReview();
                }}
              >
                Add Review
              </Button>
            </DialogActions>
          </Dialog>
        </Box>

        <Box>
          <Box sx={{}} className="product-review-details-container">
            {review.map((item, index) => {
              return (
                <Box key={index}>
                  {" "}
                  <Box className="product-review-details-title">
                    {item.title}
                  </Box>{" "}
                  <Box>{item.email}</Box>{" "}
                  <Box className="product-review-details-feedback">
                    {item.feedback}
                  </Box>{" "}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
}
