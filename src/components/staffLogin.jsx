import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import palette from "./palette";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import utm from "../assets/utmsm.png";
import { Link } from "react-router-dom";

export default function StaffLogin() {
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
                Staff Login
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
            label="Staff ID"
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
          <Box
            sx={{
              width: "80%",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label="Keep me logged in"
            />
          </Box>
          <Link to="/post" className="text-link">
            <Button
              sx={{ backgroundColor: palette.red, width: "80%" }}
              variant="contained"
            >
              Login
            </Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
}
