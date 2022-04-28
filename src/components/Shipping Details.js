import { useState } from "react";
import {
  Box,
  Input,
  RadioGroup,
  FormControlLabel,
  Radio,
  Stepper,
  Step,
  Typography,
  Button,
  StepLabel,
} from "@mui/material";
import { Link } from "react-router-dom";

export function ShippingDetails() {
  const steps = [
    "Customer Details",
    "Shipping Details",
    "Payment Details",
    "Confirm Order",
  ];
  const [activeStep, setActiveStep] = useState(0);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const [customerDetails, setCustomerDetails] = useState([]);

  const TotalPrice = JSON.parse(localStorage.getItem("totalPrice"));

  const [discountedPrice, setDiscountedPrice] = useState(TotalPrice);

  const handleVoucher = () => {
    setDiscountedPrice(TotalPrice - 30 / 100);
  };

  const CartItems = JSON.parse(localStorage.getItem("cartItems"));

  const nextStep = () => {
    if (steps.length) {
      setActiveStep(activeStep + 1);
    }
  };

  const previousStep = (e) => {
    if (activeStep !== steps.length) {
      setActiveStep(activeStep - 1);
    }
  };

  const hanldeConfirmationOfOrder = () => {
    const CustomerData = [
      {
        fullName,
        email,
        phoneNumber,
        streetAddress,
        city,
        zipCode,
        country,
        province,
        paymentMethod,
        cardNumber,
        expiryDate,
      },
    ];
    setCustomerDetails(CustomerData);
    setActiveStep(activeStep + 1);
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <Box className="customer-details">
            <Typography variant="h4">Customer Details</Typography>
            <Typography>
              Please provide your details to create an account.
            </Typography>

            <Input
              type="text"
              className="full-name"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <Input
              type="email"
              className="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="number"
              className="phone-number"
              placeholder="Phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Box>
        );

      case 1:
        return (
          <Box className="shipping-details">
            <Typography variant="h4">Shipping Details</Typography>
            <Typography>Please provide the shipping details.</Typography>
            <Box className="shipping-address">
              <Input
                type="text"
                className="street-address"
                placeholder="Street Address"
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
              />
            </Box>
            <Box className="city-zip-code">
              <Input
                type="text"
                className="city"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <Input
                className="zip-code"
                type="number"
                placeholder="Postal/Zip Code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </Box>
            <Box className="country-province">
              <Input
                type="text"
                className="country"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <Input
                type="text"
                className="province"
                placeholder="Province"
                value={province}
                onChange={(e) => setProvince(e.target.value)}
              />
            </Box>
          </Box>
        );

      case 2:
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
                value="paypal"
                control={<Radio />}
                label="PayPal"
                onChange={() => setPaymentMethod("paypal")}
              />
              <FormControlLabel
                value="mastercard"
                control={<Radio />}
                label="MasterCard"
                onChange={() => setPaymentMethod("mastercard")}
              />
              <FormControlLabel
                value="unionpay"
                control={<Radio />}
                label="UnionPay"
                onChange={() => setPaymentMethod("unionpay")}
              />
            </RadioGroup>

            <Input
              className="card-number"
              type="number"
              placeholder="CARD NUMBER"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <Input
              className="CVV"
              type="number"
              placeholder="CVV (3 digits)"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
            <Input
              className="expiry-date"
              type="date"
              placeholder="EXPIRY DATE"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </Box>
        );
      case 3:
        return (
          <Box className="confirmation-of-order-main-box">
            <Typography variant="h4">Confirm Order</Typography>

            {customerDetails.map((item, index) => (
              <Box className="customer-details-box" key={index}>
                <Box className="customer-details-box-inner">
                  <address>
                    <Box>{item.fullName}</Box>
                    <Box>{item.email}</Box>
                    <Box>{item.phoneNumber}</Box>
                    <Box>{item.streetAddress}</Box>
                    <Box>{item.city}</Box>
                    <Box>{item.province}</Box>
                    <Box>{item.country}</Box>
                    <Box>{item.zipCode}</Box>
                  </address>
                </Box>
                <Box className="customer-details-items">
                  <Typography variant="h5">Items:</Typography>
                  {CartItems.map((item, index) => (
                    <Box className="customer-details-items-inner">
                      <Box>
                        {item.name} {"$"}
                        {item.price} x {item.quantity}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}

            <Box className="confirmation-of-order-button-box">
              <Box>
                <Box>Apply Voucher: </Box>

                <RadioGroup row name="radio-buttons-group">
                  <FormControlLabel
                    value={"zxvw34mnb"}
                    control={<Radio />}
                    label="zxvw34mnb"
                    onClick={handleVoucher}
                  />
                </RadioGroup>
              </Box>
              <h2>Total Price {discountedPrice}</h2>
            </Box>
          </Box>
        );
      default:
        return "Unknown stepIndex";
    }
  };

  return (
    <Box className="checkout-main-box">
      <Box>
        <Box className="checkout-main-box-container">
          <Stepper
            className="checkout-stepper"
            activeStep={activeStep}
            alternativeLabel
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <br />
        <Box className="checkout-content">
          <Box className="checkout-content-inner">
            <Box>{getStepContent(activeStep)}</Box>

            <Box className="checkout-button-box">
              <Button
                disabled={activeStep === 0}
                variant="contained"
                color="primary"
                onClick={(e) => previousStep(e)}
              >
                Previous
              </Button>
              {activeStep === steps.length - 1 ? (
                <Button variant="contained" color="primary">
                  <Link to="/finishorder" className="checkout-button-link">
                    Place Order
                  </Link>
                </Button>
              ) : activeStep === steps.length - 2 ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={hanldeConfirmationOfOrder}
                >
                  Proceed To Confirm Your Order
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={(e) => nextStep(e)}
                >
                  Next
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
