import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import utmLogo from "../assets/UTM.png";
import palette from "./palette";

const LoginSide = () => {
  return (
    <div>
      <Box
        sx={{
          marginTop: "50px",
          width: "100%",
          minHeight: "80vh",
          textAlign: "center",
          fontWeight: 700,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img style={{ width: "50%" }} src={utmLogo}></img>
        <br />
        <Typography sx={{ color: palette.red, fontSize: "36px" }} variant="p">
          MyUTM Counselling
        </Typography>
        <br />
        <Typography sx={{ opacity: "70%" }} variant="p">
          Group 5
        </Typography>
      </Box>
    </div>
  );
};

export default LoginSide;
