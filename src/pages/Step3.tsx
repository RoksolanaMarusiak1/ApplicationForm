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
  Checkbox,
  FormControlLabel,
  FormGroup,
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

const numbers = [
  {
    value: "+370",
    label: "Lithuania",
  },
  {
    value: "+42",
    label: "Germany",
  },
  {
    value: "+44",
    label: "Great Britain",
  },
];
const Step3 = () => {
  const [number, setNumber] = React.useState("+370");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value);
  };

  return (
    <div style={{ minHeight: "72vh" }} className={"stepper-wrapper"}>
      <Paper
        elevation={1}
        sx={{
          borderRadius: "20px",
          width: "570px",
          height: "720px",
        }}
      >
        <Typography
          sx={{
            m: "18px 20px 45px 20px",
          }}
        >
          Contact Person
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
          <TextField id="name" label="Name" />
          <TextField id="surname" label="Surname" />
          <TextField id="job-title" label="Job title" />
          <StyledTextField
            id="email"
            label="Email adress"
            backgroundColor="#F7F7F7"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TextField
              sx={{
                width: "200px",
              }}
              id="country-code"
              select
              label="Country code"
              value={number}
              onChange={handleChange}
            >
              {numbers.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value} {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              sx={{ ml: "15px", width: "100%" }}
              id="company-code"
              label="Phone No."
            />
          </Box>
          <Box>
            <FormGroup>
              <FormControlLabel
                sx={{ mb: "9px" }}
                control={<Checkbox defaultChecked />}
                label={
                  <Typography
                    sx={{
                      fontSize: "10px",
                      color: "#B2B2B2",
                    }}
                  >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio aliquid eius perspiciatis explicabo, molestias
                    placeat porro molestiae saepe labore cum voluptatibus,
                    quaerat in libero, odio similique nobis atque? Sit, eum.
                    placeat porro molestiae saepe labore cum voluptatibus,
                  </Typography>
                }
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label={
                  <Typography
                    sx={{
                      fontSize: "10px",
                      color: "#B2B2B2",
                    }}
                  >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio aliquid eius perspiciatis explicabo, molestias
                    placeat porro molestiae saepe labore cum voluptatibus,
                    quaerat in libero, odio similique nobis atque? Sit, eum.
                    placeat porro molestiae saepe labore cum voluptatibus,
                  </Typography>
                }
              />
            </FormGroup>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/step2">
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
                    font: "normal normal normal 16px Inter",
                  }}
                >
                  Back
                </Typography>
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/step4">
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
                    font: "normal normal normal 16px Inter",
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

export default Step3;
