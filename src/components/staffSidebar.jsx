import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import LogoutIcon from "@mui/icons-material/Logout";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Nav from "./nav";
import ArchiveIcon from "@mui/icons-material/Archive";
import ComplaintBox from "./complaintBox";
import palette from "./palette";
import { TextField } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import bigStar from "../assets/UTM.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ComplaintForm from "./complaintForm";
import Daas from "./daas";
import Post from "./staffPost";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function StaffSideBar() {
  const [username, setUsername] = useState("Chai Ming Jing");
  const [department, setDepartment] = useState("Counsellor");
  const [search, setSearch] = useState("");
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar sx={{ backgroundColor: "white" }} position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ width: "30%", display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                ml: 1,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                color: palette.red,
                textDecoration: "none",
              }}
            >
              {username}
            </Typography>
            <Typography
              sx={{
                ml: 1,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                color: "black",
                textDecoration: "none",
              }}
            >
              {department}
            </Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              width: "100%",
              alignItems: "center",
            }}
          >
            <TextField
              onChange={(e) => setSearch(e.currentTarget.value)}
              sx={{ width: "80%", borderRadius: "20px" }}
              label="Search"
              variant="filled"
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <img style={{ width: "50%" }} src={bigStar}></img>
          </Box>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <Link to="/createPost" className="text-link">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DashboardIcon></DashboardIcon>
                </ListItemIcon>
                <ListItemText primary="Create Post" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/staffLogin" className="text-link">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon></LogoutIcon>
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Switch>
          <Route path="/post">
            <Post></Post>
          </Route>
        </Switch>
      </Main>
    </Box>
  );
}
