import { Box, Button, Input, TextareaAutosize } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { FcRating } from "react-icons/fc";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";

import axios from "axios";

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
    axios
      .get(
        `https://backendapi.turing.com/products/${id}/reviews
    `
      )
      .then((res) => {
        console.log(res.data);
        setReview(res.data);
      });
  }, [id]);

  useEffect(() => {
    const newPass = Items.find((item) => item.product_id === parseInt(id));

    setPass(newPass);
  }, [Items, id]);

  useEffect(() => {
    axios
      .get(`https://backendapi.turing.com/products/${id}/reviews`)
      .then((res) => {
        setReview(res.data);
      });
  }, [id]);

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
    <Box className="product-main">
      <Box className="product-details-Main">
        {pass && (
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
        )}

        <Box className="review-section">
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
        </Box>
        <Box>
          <Box className="product-review-details-container">
            <Box className="customer-reviews">Product Reviews</Box>
            {review.map((item, index) => {
              return (
                <Box className="product-reviews" key={index}>
                  {" "}
                  <Box className="product-review-details-header">
                    <Box className="product-review-details-title">
                      <ReactStars
                        count={5}
                        value={item.rating}
                        size={24}
                        activeColor="#ffd700"
                      />
                      By {item.name}
                    </Box>
                    <Box> {item.created_on}</Box>
                  </Box>
                  <Box>{item.review}</Box>
                  <Box className="product-review-details-feedback"></Box>{" "}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
