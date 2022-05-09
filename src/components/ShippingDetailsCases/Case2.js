import React from "react";
import {
  Box,
  RadioGroup,
  Radio,
  FormControlLabel,
  Input,
  Typography,
} from "@mui/material";

export function Case2({
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
    <Box className="payment-details">
      <Typography variant="h4">Payment Details</Typography>
      <Box className="payment-method">Select the payment method:</Box>

      <RadioGroup
        row
        name="radio-buttons-group"
        className="radio-buttons-group"
      >
        <FormControlLabel
          name="paymentMethod"
          value="paypal"
          control={<Radio />}
          label="PayPal"
          onChange={handleCustomerDetails}
        />
        <FormControlLabel
          name="paymentMethod"
          value="mastercard"
          control={<Radio />}
          label="MasterCard"
          onChange={handleCustomerDetails}
        />
        <FormControlLabel
          name="paymentMethod"
          value="unionpay"
          control={<Radio />}
          label="UnionPay"
          onChange={handleCustomerDetails}
        />
      </RadioGroup>

      <Input
        className="card-number"
        type="number"
        name="cardNumber"
        placeholder="CARD NUMBER"
        value={customerInformation.cardNumber}
        error={validationError}
        onChange={handleCustomerDetails}
      />
      <Input
        className="CVV"
        type="number"
        name="cvv"
        placeholder="CVV (3 digits)"
        value={customerInformation.cvv}
        error={validationError}
        onChange={handleCustomerDetails}
      />
      <Input
        className="expiry-date"
        name="expiryDate"
        type="date"
        placeholder="EXPIRY DATE"
        value={customerInformation.expiryDate}
        error={validationError}
        onChange={handleCustomerDetails}
      />
    </Box>
  );
}
