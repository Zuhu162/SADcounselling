import React, { useState } from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Alert, Box, Button, Divider, Typography } from "@mui/material";
import questions from "../assets/daas";
import palette from "./palette";
import { Link } from "react-router-dom";

export default function Daas() {
  const submit = () => {
    alert(
      "Thank you for taking the test. Your response has been recorded and result will be sent in your email. Click ok to be redirected to dashboard"
    );
  };

  return (
    <FormControl>
      <Typography textAlign="center" fontWeight={700} variant="h5">
        DAAS Test
      </Typography>
      {questions.map((q) => (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            mb: "20px",
            backgroundColor: palette.grey,
            justifyContent: "center",
          }}
        >
          <Typography fontWeight={700}>{q.question}</Typography>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="0"
              control={<Radio />}
              label="Did not apply to me at all"
            />
            <FormControlLabel
              value="1"
              control={<Radio />}
              label="Applied to me to some degree, or some of the time"
            />
            <FormControlLabel
              value="2"
              control={<Radio />}
              label="Applied to me to a considerable degree or a good part of time"
            />
            <FormControlLabel
              value="3"
              control={<Radio />}
              label="Applied to me very much or most of the time"
            />
          </RadioGroup>
          <Divider></Divider>
        </Box>
      ))}
      <Link to="/dashboard">
        <Button
          onClick={() => submit()}
          sx={{ backgroundColor: palette.red }}
          variant="contained"
        >
          Submit
        </Button>
      </Link>
    </FormControl>
  );
}
