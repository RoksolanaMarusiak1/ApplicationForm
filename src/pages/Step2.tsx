import React from "react";
import { Link } from "react-router-dom";
import {
  Paper,
  Typography,
  TextField,
  Stack,
  Box,
  Button,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";

type Props = {
  backgroundColor?: string;
};

const options = {
  shouldForwardProp: (prop: any) => prop !== "backgroundColor",
};
const StyledTextField = styled(
  TextField,
  options
)<Props>(({ backgroundColor }) => ({
  input: {
    backgroundColor: backgroundColor,
  },
}));

const countries = [
  {
    value: "LT",
    label: "Lithuania",
  },
  {
    value: "DE",
    label: "Germany",
  },
  {
    value: "GBR",
    label: "Great Britain",
  },
];

const Step2 = () => {
  const [country, setCountry] = React.useState("LT");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };
  return (
    <div style={{ minHeight: "72vh" }} className={"stepper-wrapper"}>
      <Paper
        elevation={1}
        sx={{
          borderRadius: "20px",
          width: "570px",
          height: "450px",
        }}
      >
        <Typography
          sx={{
            m: "18px 20px 45px 20px",
          }}
        >
          Company
        </Typography>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            p: "0 60px",
          }}
          spacing={3}
        >
          <TextField id="company-code" label="Company code" />
          <TextField id="company-name" label="Company name" />
          <StyledTextField
            backgroundColor="#F7F7F7"
            id="select-country"
            select
            label="Country of registration"
            value={country}
            onChange={handleChange}
          >
            {countries.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </StyledTextField>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/step1">
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "25px",
                  width: "80px",
                  height: "45px",
                  textTransform: "none",
                }}
              >
                <Typography
                  sx={{
                    color: "#2B64F5",
                    font: "16px Inter",
                  }}
                >
                  Back
                </Typography>
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/step3">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#2B64F5",
                  borderRadius: "25px",
                  width: "80px",
                  height: "45px",
                  textTransform: "none",
                }}
              >
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    font: "16px Inter",
                  }}
                >
                  Next
                </Typography>
              </Button>
            </Link>
          </Box>
        </Stack>
      </Paper>
    </div>
  );
};

export default Step2;
