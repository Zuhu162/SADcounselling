import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import palette from "./palette";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import utm from "../assets/utmsm.png";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [passowrd, setPassword] = useState("");

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "60%",
            height: "80vh",
            padding: "40px",
            backgroundColor: palette.grey,
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            borderStyle: "solid",
            borderColor: "#BDBDBD",
            fontWeight: "bold",
          }}
        >
          <Grid container>
            <Grid item xs={6}>
              <Typography sx={{ color: palette.red }} variant="h5">
                Sign Up
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  width: "100%",
                  height: "100px",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                }}
              >
                <img style={{ width: "40%" }} src={utm}></img>
              </Box>
            </Grid>
          </Grid>

          <TextField
            onChange={(e) => setEmail(e.currentTarget.value)}
            sx={{ width: "80%" }}
            label="Email"
            variant="filled"
          />
          <TextField
            onChange={(e) => setPassword(e.currentTarget.value)}
            sx={{ width: "80%" }}
            label="Password"
            variant="filled"
            type="password"
            autoComplete="current-password"
          />
          <TextField
            sx={{ width: "80%" }}
            label="Phone Number"
            variant="filled"
          />
          <TextField sx={{ width: "80%" }} label="Faculty" variant="filled" />
          <TextField
            sx={{ width: "80%" }}
            label="Student ID"
            variant="filled"
          />
          <Box
            sx={{
              width: "80%",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label="Subscribe to our newsletter!"
            />
          </Box>
          <Link to="/dashboard" className="text-link">
            <Button
              onClick={() => console.log("hello")}
              sx={{ backgroundColor: palette.red, width: "80%" }}
              variant="contained"
            >
              Register
            </Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
}
