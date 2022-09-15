import { Link } from "react-router-dom";
import { Paper, Typography, Stack, Box, Button } from "@mui/material";

const Step1 = () => {
  return (
    <div style={{ minHeight: "72vh" }} className={"stepper-wrapper"}>
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
          Product and Amount
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
            <Box></Box>
            <Link style={{ textDecoration: "none" }} to="/step2">
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
                    font: "normal normal normal 13px Inter",
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

export default Step1;
