import "./App.css";
import Nav from "./components/nav";
import LoginForm from "./components/loginForm";
import LoginSide from "./components/loginSide";
import LoginPage from "./components/loginPage";
import ComplaintBox from "./components/complaintBox";
import ResponsiveDrawer from "./components/sidebar";
import { Box } from "@mui/system";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ComplaintForm from "./components/complaintForm";
import { useState } from "react";
import Daas from "./components/daas";
import StaffLogin from "./components/staffLogin";
import StaffLoginPage from "./components/staffLoginPage";
import Post from "./components/staffPost";
import StaffSideBar from "./components/staffSidebar";

function App() {
  const [logged, setLogged] = useState(false);

  return (
    <div>
      <Switch>
        <Route path="/daas">
          <ResponsiveDrawer></ResponsiveDrawer>
        </Route>
        <Route path="/booking">
          <ResponsiveDrawer></ResponsiveDrawer>
        </Route>
        <Route path="/dashboard">
          <ResponsiveDrawer />
        </Route>
        <Route path="/post">
          <StaffSideBar />
        </Route>
        <Route path="/staffLogin">
          <StaffLoginPage />
        </Route>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
