import { Link } from "react-router-dom";
import { Paper, Typography, Stack, Box, Button } from "@mui/material";

const Step4 = () => {
  return (
    <div style={{ minHeight: "72vh" }} className={"stepper-wrapper"}>
      <div>
        <Paper
          elevation={1}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "20px",
            width: "570px",
            height: "170px",
          }}
        >
          <Typography sx={{ fontSize: "18px", mb: "19px" }}>
            Beneficial owners
          </Typography>
          <Stack
            sx={{
              width: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              p: "0 60px",
            }}
            spacing={3}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/step3">
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
              <Link style={{ textDecoration: "none" }} to="/step5">
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
    </div>
  );
};

export default Step4;
