import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import sessions from "../assets/fakeData";
import { Button, Typography } from "@mui/material";
import palette from "./palette";
import { Link } from "react-router-dom";

const columns = [
  { field: "date", headerName: "Date", width: 300 },
  { field: "time", headerName: "Time", width: 300 },
  { field: "counselor_name", headerName: "Counsellor", width: 200 },
  { field: "status", headerName: "Status ", width: 200 },
];

export default function ComplaintBox() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <Typography sx={{ fontWeight: 700 }} variant="h6">
        Previous Counselling Sessions
      </Typography>
      <DataGrid
        rows={sessions}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick="true"
      />
      <Link className="text=link" to="/daas">
        <Button
          sx={{ backgroundColor: palette.red, marginRight: "30px" }}
          variant="contained"
        >
          Take DAAS Test
        </Button>
      </Link>
    </div>
  );
}
