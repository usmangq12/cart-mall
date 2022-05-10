import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function FinishOrder() {
  return (
    <Box className="finish-order">
      <Typography variant="h2">"Your order is successfully placed"</Typography>
      <Button variant="contained">
        <Link to="/" className="finish-order-button">
          Go to Home
        </Link>
      </Button>
    </Box>
  );
}
