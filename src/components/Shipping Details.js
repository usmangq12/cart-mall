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

export function ShippingDetails() {
  const steps = [
    "Customer Details",
    "Shipping Details",
    "Payment Details",
    "Confirm Order",
  ];
  const [disable, setDisable] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  // function on Next button

  const nextStep = () => {
    if (steps.length) {
      setActiveStep(activeStep + 1);
    }

    // setDisable(true);
  };

  // function on Previous button

  const previousStep = (e) => {
    // if (activeStep !== 0) {
    //   setDisable(false);
    // } else {
    //   setDisable(true);
    // }

    if (activeStep !== steps.length) {
      setActiveStep(activeStep - 1);
    }
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
            <Box
              sx={{
                marginTop: "30px",
                marginBottom: "10px",
              }}
            >
              <Input
                sx={{
                  padding: "3px",
                  borderRadius: "5px",
                  width: "40%",
                }}
                placeholder="First Name"
              />
              <Input
                sx={{
                  padding: "3px",
                  borderRadius: "5px",
                  marginLeft: "10px",
                  width: "40%",
                }}
                placeholder="Last Name"
              />
            </Box>
            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <Input
                sx={{
                  padding: "3px",
                  borderRadius: "5px",
                  width: "40%",
                }}
                placeholder="Email"
              />
              <Input
                sx={{
                  padding: "3px",
                  borderRadius: "5px",
                  marginLeft: "10px",
                  width: "40%",
                }}
                placeholder="Phone"
              />
            </Box>
            <Box
              sx={{
                marginTop: "10px",

                marginBottom: "10px",
              }}
            >
              <Input
                sx={{
                  padding: "3px",
                  borderRadius: "5px",
                  width: "40%",
                }}
                placeholder="Password"
              />
              <Input
                sx={{
                  padding: "3px",
                  borderRadius: "5px",
                  marginLeft: "10px",
                  width: "40%",
                }}
                placeholder="Confirm Password"
              />
            </Box>
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
                sx={{
                  padding: "3px",
                  borderRadius: "5px",

                  width: "40%",
                }}
                placeholder="Full Name"
              />
              <Input
                sx={{
                  padding: "3px",
                  borderRadius: "5px",

                  marginLeft: "10px",
                  width: "40%",
                }}
                placeholder="Street Address"
              />
            </Box>
            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <Input
                sx={{
                  padding: "3px",
                  borderRadius: "5px",

                  width: "40%",
                }}
                placeholder="City"
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
              />
            </Box>
            <Box
              sx={{
                marginTop: "10px",

                marginBottom: "10px",
              }}
            >
              <Input
                sx={{
                  padding: "3px",
                  borderRadius: "5px",

                  width: "40%",
                }}
                placeholder="Country"
              />
              <Input
                sx={{
                  padding: "3px",
                  borderRadius: "5px",

                  marginLeft: "10px",
                  width: "40%",
                }}
                placeholder="Province"
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
              />
              <FormControlLabel
                value="mastercard"
                control={<Radio />}
                label="MasterCard"
              />
              <FormControlLabel
                value="unionpay"
                control={<Radio />}
                label="UnionPay"
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
            />
            <Input
              sx={{
                padding: "3px",
                borderRadius: "5px",
                marginBottom: "10px",
                marginTop: "10px",

                width: "50%",
              }}
              type="number"
              placeholder="EXPIRY DATE"
            />
          </Box>
        );
      case 3:
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "300px",
            }}
          >
            <Typography variant="h4">Confirm Order</Typography>
            <Typography>Please Confirm your given order</Typography>

            <Typography variant="h5">Amount: 500</Typography>
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
                // <Link to="/result" style={{ textDecoration: "none" }}>
                <Button
                  disabled={disable}
                  sx={{ ml: "4px" }}
                  variant="contained"
                  color="primary"
                  // onClick={(e) => handleFinish(e)}
                >
                  Submit
                </Button>
              ) : (
                // </Link>
                <Button
                  disabled={disable}
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
