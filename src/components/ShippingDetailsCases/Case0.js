import React from "react";
import { Box, Input, Typography } from "@mui/material";

export function Case0({
  validationError,
  setCustomerInformation,
  customerInformation,
}) {
  const handleCustomerDetails = (e) => {
    setCustomerInformation({
      ...customerInformation,
      [e.target.name]: e.target.value,
    });
  };

  console.log(customerInformation);

  return (
    <Box className="customer-details">
      <Typography variant="h4">Customer Details</Typography>
      <Typography>Please provide your details to create an account.</Typography>

      <Input
        error={validationError}
        type="text"
        name="fullName"
        className="full-name"
        placeholder="Full Name"
        value={customerInformation.fullName}
        onChange={handleCustomerDetails}
      />

      <Input
        type="email"
        name="email"
        className="email"
        placeholder="Email"
        value={customerInformation.email}
        error={validationError}
        onChange={handleCustomerDetails}
      />
      <Input
        type="number"
        className="phone-number"
        name="phoneNumber"
        placeholder="Phone"
        value={customerInformation.phoneNumber}
        error={validationError}
        onChange={handleCustomerDetails}
      />
    </Box>
  );
}
