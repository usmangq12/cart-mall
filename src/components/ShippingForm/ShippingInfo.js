import React from "react";
import { Box, Input, Typography } from "@mui/material";

export function ShippingInfo({
  validationError,
  customerInformation,
  setCustomerInformation,
}) {
  const handleCustomerDetails = (e) => {
    setCustomerInformation({
      ...customerInformation,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Box className="shipping-details">
      <Typography variant="h4">Shipping Details</Typography>
      <Typography>Please provide the shipping details.</Typography>
      <Box className="shipping-address">
        <Input
          type="text"
          name="streetAddress"
          className="street-address"
          placeholder="Street Address"
          value={customerInformation.streetAddress}
          error={validationError}
          onChange={handleCustomerDetails}
        />
      </Box>
      <Box className="city-zip-code">
        <Input
          type="text"
          name="city"
          className="city"
          placeholder="City"
          value={customerInformation.city}
          error={validationError}
          onChange={handleCustomerDetails}
        />
        <Input
          className="zip-code"
          type="number"
          name="zipCode"
          placeholder="Postal/Zip Code"
          value={customerInformation.zipCode}
          error={validationError}
          onChange={handleCustomerDetails}
        />
      </Box>
      <Box className="country-province">
        <Input
          type="text"
          name="country"
          className="country"
          placeholder="Country"
          value={customerInformation.country}
          error={validationError}
          onChange={handleCustomerDetails}
        />
        <Input
          type="text"
          name="province"
          className="province"
          placeholder="Province"
          value={customerInformation.province}
          error={validationError}
          onChange={handleCustomerDetails}
        />
      </Box>
    </Box>
  );
}
