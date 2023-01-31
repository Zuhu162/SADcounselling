import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import palette from "./palette";

export default function Post() {
  const submit = (x) => {
    alert(`Your post has been shared through ${x}`);
  };

  return (
    <div>
      <Card>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <Typography variant="h6">Create a new post</Typography>

          <TextField
            sx={{ marginBottom: 3 }}
            fullWidth
            multiline
            label="Description"
            rows={8}
          ></TextField>
          <Grid container spacing={3}>
            <Grid item sm={4} xs={12}>
              <Button
                sx={{ backgroundColor: palette.red, width: "100%" }}
                variant="contained"
                component="label"
              >
                Upload Picture
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Button
                onClick={() => submit("Email")}
                sx={{ backgroundColor: "#522E92", width: "100%" }}
                variant="contained"
                component="label"
              >
                Post Email
              </Button>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Button
                onClick={() => submit("Facebook")}
                sx={{ width: "100%" }}
                variant="contained"
                component="label"
              >
                Post Facebook
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </div>
  );
}
