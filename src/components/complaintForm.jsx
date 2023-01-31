import {
  Button,
  Card,
  Divider,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import palette from "./palette";

export default function ComplaintForm() {
  const timeSlots = [
    {
      value: "12:00-13:30",
      label: "12:00-13:30",
    },
    {
      value: "13:00-14:30",
      label: "13:00-14:30",
    },
    {
      value: "14:00-15:00",
      label: "14:00-15:00",
    },
    {
      value: "15:00-16:15",
      label: "15:00-16:15",
    },
  ];
  const date = [
    {
      value: "30/1/2023",
      label: "30/1/2023",
    },
    {
      value: "31/1/2023",
      label: "30/1/2023",
    },
    {
      value: "1/2/2023",
      label: "30/1/2023",
    },
    {
      value: "2/2/2023",
      label: "30/1/2023",
    },
  ];
  const counsellors = [
    {
      value: "Chai Ming Jing",
      label: "Chai Ming Jing",
    },
    {
      value: "Khairul",
      label: "Khairul",
    },
    {
      value: "Zuhayer Siddique",
      label: "Zuhayer Siddique",
    },
    {
      value: "John Doe",
      label: "John Doe",
    },
  ];

  const submit = () => {
    alert(
      "Thank you for taking the test. Your response has been recorded and result will be sent in your email. Click ok to be redirected to dashboard"
    );
  };
  return (
    <div>
      <Box sx={{ padding: "60px" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Grid container>
              <Grid item xs={12}>
                <Card
                  sx={{
                    backgroundColor: palette.grey,
                    paddingX: "10px",
                    marginBottom: "20px",
                  }}
                >
                  <Typography variant="h6">Booking Form</Typography>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Typography>Time</Typography>
              </Grid>
              <Grid item xs={6} mb={3}>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Select"
                  defaultValue="EUR"
                  helperText="Please select time slot"
                >
                  {timeSlots.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <Typography>Date</Typography>
              </Grid>
              <Grid item xs={6} mb={3}>
                <TextField
                  select
                  label="Select"
                  helperText="Please select preferred date"
                >
                  {date.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <Typography>Counsellor</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Select"
                  helperText="Please select your counsellor"
                >
                  {counsellors.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <Typography>Details (Optional)</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth multiline rows={4}></TextField>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container>
              <Grid item xs={12}>
                <Card sx={{ backgroundColor: palette.grey, paddingX: "10px" }}>
                  <Typography variant="h6">
                    Message to the Counsellor (Optional)
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth multiline rows={4}></TextField>
              </Grid>
              <Link to="/dashboard">
                <Button
                  onClick={() => submit()}
                  sx={{ backgroundColor: palette.red }}
                  variant="contained"
                >
                  Submit
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
