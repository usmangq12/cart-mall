import {
  Box,
  Button,
  Typography,
  Input,
  TextareaAutosize,
} from "@mui/material";
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
    localStorage.setItem("review", JSON.stringify(updateItems));
  };



  const get = JSON.parse(localStorage.getItem("review"));


  return (
    <>
      <Box
        sx={{
          marginTop: "20px",
          backgroundColor: "#e7e8e1",
        }}
      >
        <Box

          component={"img"}
          sx={{
            width: "35%",
            height: "500px",
            marginLeft: "2rem",
            marginTop: "3rem",
            borderRadius: "10px",
          }}
          src="
          https://freepngimg.com/thumb/categories/627.png"
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "4rem",
            marginTop: "3rem",
            width: "50%",
              
            height: "500px",

          sx={{
            display: "flex",
            flexDirection: "row",

          }}
        >
          
          <Box
            component={"img"}
            sx={{
              width: "35%",
              height: "500px",
              marginLeft: "2rem",
              marginTop: "3rem",
              borderRadius: "10px",
            }}
            src="
          https://freepngimg.com/thumb/categories/627.png"
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "4rem",
              marginTop: "3rem",
              width: "50%",
              height: "500px",
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
              Title: {pass.name}
            </Typography>
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginLeft: "2rem",
              }}
            >
              Product Features:
            </Typography>

            <Typography
              sx={{
                fontSize: "1rem",
                marginLeft: "2rem",
                marginTop: "1rem",
              }}
            >
              {pass.description}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "5px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginLeft: "2rem",
                }}
              >
                Price:
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                }}
              >
                {pass.price} $
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                sx={{
                  marginTop: "25%",
                  border: "1px solid black",
                  borderRadius: "10px",
                  width: "45%",
                }}
              >
                Add to Cart
              </Button>
            </Box>
          </Box>
        </Box>

        <hr />

        <Box>
          <Box
            sx={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            <Typography
              sx={{
                marginLeft: "2rem",
              }}
            >
              <FcRating style={{ fontSize: "50px" }} />
            </Typography>
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              Reviews
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
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Write A Review</DialogTitle>
            <DialogContent
              sx={{
                width: "400px",
                height: "40vh",
              }}
            >
              <Box>
                <Input
                  placeholder="Review Title"
                  onChange={(e) => setTitle(e.target.value)}
                  style={{ padding: "5px", width: "400px" }}
                />
                <Box
                  sx={{
                    marginTop: "10px",
                  }}
                >
                  <Input
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ padding: "5px", width: "400px" }}
                  />
                </Box>
                <Box
                  sx={{
                    marginTop: "10px",
                  }}
                >
                  <TextareaAutosize
                    minRows={8}
                    placeholder="Enter your feedback"
                    onChange={(e) => setFeadback(e.target.value)}
                    style={{ width: "400px" }}
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
          <Box
            sx={{
              marginLeft: "2rem",
              backgroundColor: "#e7e8e1",
            }}
          >
            {get.map((item, index) => {
              return (
                <Box key={index}>
                  {" "}
                  <Typography
                    sx={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    }}
                  >
                   {item.title}
                  </Typography>{" "}
                  <Typography>{item.email}</Typography>{" "}
                  <Typography
                  sx={{ marginTop: "10px" }}
                  >{item.feedback}</Typography>{" "}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
}
