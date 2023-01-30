import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import LoginForm from "./loginForm";
import LoginSide from "./loginSide";

export default function LoginPage() {
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
            <LoginForm></LoginForm>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
