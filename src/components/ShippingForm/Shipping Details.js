import { useState } from "react";
import { Box, Stepper, Step, Button, StepLabel } from "@mui/material";
import { Link } from "react-router-dom";
import { CustomerBio } from "./CustomerBio";
import { ShippingInfo } from "./ShippingInfo";
import { PaymentInfo } from "./PaymentInfo";
import { OrderConfirmation } from "./OrderConfirmation";
import { steps } from "../Constant";
import "./ShippingCases.css";

export function ShippingDetails() {
  const [activeStep, setActiveStep] = useState(0);

  const [validationError, setValidationError] = useState("");

  const [customerInformation, setCustomerInformation] = useState([]);

  const TotalPrice = JSON.parse(localStorage.getItem("totalPrice"));

  const [discountedPrice, setDiscountedPrice] = useState(TotalPrice);

  const handleVoucher = () => {
    setDiscountedPrice(TotalPrice - 30 / 100);
  };

  const cartItems = JSON.parse(localStorage.getItem("cartItems"));

  const nextStep = () => {
    if (activeStep === 0) {
      if (
        customerInformation.fullName === "" ||
        customerInformation.email === "" ||
        customerInformation.phoneNumber === ""
      ) {
        setValidationError("Please fill all the fields");
      } else {
        setValidationError("");
        setActiveStep(activeStep + 1);
      }
    }
    if (activeStep === 1) {
      if (
        customerInformation.city === "" ||
        customerInformation.zipCode === "" ||
        customerInformation.country === "" ||
        customerInformation.province === ""
      ) {
        setValidationError("Please fill all the fields");
      } else {
        setValidationError("");
        setActiveStep(activeStep + 1);
      }
    }
  };

  const previousStep = (e) => {
    if (activeStep !== steps.length) {
      setActiveStep(activeStep - 1);
    }
  };

  const hanldeConfirmationOfOrder = () => {
    if (activeStep === 2) {
      if (
        customerInformation.paymentMethod === "" ||
        customerInformation.cardNumber === "" ||
        customerInformation.expiryDate === "" ||
        customerInformation.cvv === ""
      ) {
        setValidationError("Please fill all the fields");
      } else {
        setValidationError("");
        setActiveStep(activeStep + 1);
      }
    }
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <CustomerBio
            validationError={validationError}
            setCustomerInformation={setCustomerInformation}
            customerInformation={customerInformation}
          />
        );

      case 1:
        return (
          <ShippingInfo
            validationError={validationError}
            setCustomerInformation={setCustomerInformation}
            customerInformation={customerInformation}
          />
        );

      case 2:
        return (
          <PaymentInfo
            validationError={validationError}
            setCustomerInformation={setCustomerInformation}
            customerInformation={customerInformation}
          />
        );
      case 3:
        return (
          <OrderConfirmation
            cartItems={cartItems}
            discountedPrice={discountedPrice}
            handleVoucher={handleVoucher}
            customerInformation={customerInformation}
          />
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
