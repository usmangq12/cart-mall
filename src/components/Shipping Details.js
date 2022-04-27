import React from "react";
import { useState } from "react";
import {
  Box,
  Input,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
} from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import StepLabel from "@mui/material/StepLabel";
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "300px",
            }}
          >
            <Typography variant="h4">Customer Details</Typography>
            <Typography>
              Please provide your details to create an account.
            </Typography>

            <Input
              type="text"
              sx={{
                padding: "3px",
                borderRadius: "5px",
                width: "40%",
                marginTop: "2rem",
              }}
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <Input
              type="email"
              sx={{
                padding: "3px",
                borderRadius: "5px",
                width: "40%",
                marginTop: "1rem",
              }}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="number"
              sx={{
                padding: "3px",
                borderRadius: "5px",
                width: "40%",
                marginTop: "1rem",
              }}
              placeholder="Phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Box>
        );

      case 1:
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "300px",
            }}
          >
            <Typography variant="h4">Shipping Details</Typography>
            <Typography>Please provide the shipping details.</Typography>
            <Box
              sx={{
                marginTop: "30px",
                marginBottom: "10px",
              }}
            >
              <Input
                type="text"
                sx={{
                  padding: "3px",
                  borderRadius: "5px",

                  width: "40%",
                }}
                placeholder="Street Address"
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
              />
            </Box>
            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <Input
                type="text"
                sx={{
                  padding: "3px",
                  borderRadius: "5px",

                  width: "40%",
                }}
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <Input
                sx={{
                  padding: "3px",
                  borderRadius: "5px",

                  marginLeft: "10px",
                  width: "40%",
                }}
                type="number"
                placeholder="Postal/Zip Code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </Box>
            <Box
              sx={{
                marginTop: "10px",

                marginBottom: "10px",
              }}
            >
              <Input
                type="text"
                sx={{
                  padding: "3px",
                  borderRadius: "5px",

                  width: "40%",
                }}
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <Input
                type="text"
                sx={{
                  padding: "3px",
                  borderRadius: "5px",

                  marginLeft: "10px",
                  width: "40%",
                }}
                placeholder="Province"
                value={province}
                onChange={(e) => setProvince(e.target.value)}
              />
            </Box>
          </Box>
        );

      case 2:
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "300px",
            }}
          >
            <Typography variant="h4">Payment Details</Typography>
            <FormLabel
              sx={{
                marginTop: "10px",
                color: "black",
                fontSize: "1.3rem",
              }}
            >
              Select the payment method
            </FormLabel>

            <RadioGroup row name="radio-buttons-group">
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
              sx={{
                marginTop: "5px",
                padding: "3px",
                borderRadius: "5px",
                marginBottom: "10px",
                width: "50%",
              }}
              type="number"
              placeholder="CARD NUMBER"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <Input
              sx={{
                padding: "3px",
                borderRadius: "5px",
                marginTop: "10px",
                marginBottom: "10px",
                width: "50%",
              }}
              type="number"
              placeholder="CVV (3 digits)"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
            <Input
              sx={{
                padding: "3px",
                borderRadius: "5px",
                marginBottom: "10px",
                marginTop: "10px",
                width: "50%",
              }}
              type="date"
              placeholder="EXPIRY DATE"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </Box>
        );
      case 3:
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "auto",
              width: "400px",
            }}
          >
            <Typography variant="h4">Confirm Order</Typography>
            <Typography>Please Confirm your given order</Typography>

            <Typography variant="h5">Amount: 500</Typography>
            {customerDetails.map((item, index) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "10px",
                }}
                key={index}
              >
                <Box
                  sx={{
                    width: "auto",
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid black",
                  }}
                >
                  <Typography>Name: {item.fullName}</Typography>
                  <Typography>Email: {item.email}</Typography>
                  <Typography>Phone: {item.phoneNumber}</Typography>
                  <Typography>Address: {item.streetAddress}</Typography>
                  <Typography>City: {item.city}</Typography>
                  <Typography>Province: {item.province}</Typography>
                  <Typography>Country: {item.country}</Typography>
                  <Typography>Zip Code: {item.zipCode}</Typography>
                  <Typography>Payment Method: {item.paymentMethod}</Typography>
                  <Typography>Card Number: {item.cardNumber}</Typography>
                  <Typography>CVV: {item.cvv}</Typography>
                  <Typography>Expiry Date: {item.expiryDate}</Typography>
                </Box>
                <Box
                  sx={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "20px",
                  }}
                >
                  {CartItems.map((item, index) => (
                    <Box
                      sx={{
                        border: "1px solid black",
                      }}
                    >
                      <Typography>Product Name: {item.name}</Typography>
                      <Typography>Product Price: {item.price}</Typography>
                    </Box>
                  ))}
                  <h2>Total Price {discountedPrice}</h2>
                </Box>
              </Box>
            ))}
            <FormLabel
              sx={{
                marginTop: "10px",
                color: "black",
                fontSize: "1.3rem",
              }}
            >
              Apply Voucher
            </FormLabel>

            <RadioGroup row name="radio-buttons-group">
              <FormControlLabel
                value={"zxvw34mnb"}
                control={<Radio />}
                label="zxvw34mnb"
                onClick={handleVoucher}
              />
            </RadioGroup>
          </Box>
        );
      default:
        return "Unknown stepIndex";
    }
  };

  return (
    <Box
      sx={{ position: "relative", backgroundSize: "cover", height: "100vh" }}
    >
      <Box>
        <Box
          sx={{
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stepper
            sx={{ mt: 1, width: "70%", color: "white", pt: 2 }}
            activeStep={activeStep}
            alternativeLabel
          >
            {steps.map((label) => (
              <Step key={label} className={"red"}>
                <StepLabel sx={{ color: "white" }}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <br />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              borderRadius: 4,
              ml: 4,
              pl: 4,
              mr: 4,
              pt: 2,
              boxShadow: 3,
              bgcolor: "rgba(255,255,255,0.3)",
              width: "70%",
            }}
          >
            <Box
              sx={{
                ml: 4,
                mr: 4,
                width: "70%",
                height: "auto",
              }}
            ></Box>
            <Box>{getStepContent(activeStep)}</Box>

            <Box sx={{ display: "flex", mt: 3, mb: 2 }}>
              <Button
                disabled={activeStep === 0}
                variant="contained"
                color="primary"
                onClick={(e) => previousStep(e)}
              >
                Previous
              </Button>
              {activeStep === steps.length - 1 ? (
                <Button sx={{ ml: "4px" }} variant="contained" color="primary">
                  <Link
                    to="/finishorder"
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    Place Order
                  </Link>
                </Button>
              ) : activeStep === steps.length - 2 ? (
                <Button
                  sx={{ ml: "4px" }}
                  variant="contained"
                  color="primary"
                  onClick={hanldeConfirmationOfOrder}
                >
                  Proceed To Confirm Your Order
                </Button>
              ) : (
                <Button
                  sx={{ ml: "4px" }}
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
