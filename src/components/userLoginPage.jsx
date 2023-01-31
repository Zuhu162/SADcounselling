import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import LoginForm from "./loginForm";
import LoginSide from "./loginSide";
import StaffLogin from "./staffLogin";
import UserLogin from "./userLogin";

export default function UserLoginPage() {
  return (
    <div>
      <Box sx={{ paddingX: "5%" }}>
        <Grid container>
          <Grid item md={6} xs={0}>
            <Box display={{ xs: "none", md: "block" }}>
              <LoginSide></LoginSide>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <UserLogin></UserLogin>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
