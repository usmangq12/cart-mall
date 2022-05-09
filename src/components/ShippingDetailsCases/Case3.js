import React from "react";
import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

export function Case3({
  CartItems,
  customerInformation,
  handleVoucher,
  discountedPrice,
}) {
  console.log(customerInformation);

  let customerData = [];
  customerData.push(customerInformation);
  console.log(customerData);

  return (
    <Box className="confirmation-of-order-main-box">
      <Typography
        variant="h4"
        sx={{
          fontSize: "2rem",
          fontWeight: "bold",
          color: "primary.main",
          borderBottom: "2px solid #ccc",
        }}
      >
        Confirm Order
      </Typography>

      {customerData.map((item, index) => (
        <Box className="customer-details-box" key={index}>
          <Box className="customer-details-box-inner">
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              Customer Details:
            </Typography>
            <address className="customer-details-box-inner-address">
              <Box>{item.fullName},</Box>
              <Box>{item.email},</Box>
              <Box>{item.phoneNumber},</Box>
              <Box>{item.streetAddress},</Box>
              <Box>{item.city},</Box>
              <Box>{item.province},</Box>
              <Box>{item.country},</Box>
              <Box>{item.zipCode}</Box>
            </address>
            <Box className="confirmation-of-order-button-box">
              <Box>Apply Voucher: </Box>

              <RadioGroup row>
                <FormControlLabel
                  value={"zxvw34mnb"}
                  control={<Radio />}
                  label="zxvw34mnb"
                  onClick={handleVoucher}
                />
              </RadioGroup>
            </Box>
            <Box className="total-price-box">
              Total Price: {"$"}
              {discountedPrice.toFixed(2)}
            </Box>
          </Box>
          <Box className="customer-details-items">
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              {" "}
              Customer Items:
            </Typography>
            <TableContainer
              sx={{
                maxHeight: "50vh",
                maxWidth: "40vw",
              }}
            >
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        fontSize: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      Name
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      Quantity
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      Price
                    </TableCell>
                  </TableRow>
                </TableHead>
                {CartItems.map((item, index) => (
                  <TableBody key={index}>
                    <TableRow>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>
                        {"$"}
                        {item.discounted_price}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                ))}
              </Table>
            </TableContainer>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
