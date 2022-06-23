import React from "react";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Assessment";
import MenuIcon from "@mui/icons-material/Menu";
import AboutIcon from "@mui/icons-material/Info";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import muiLink from '@mui/material/Link';
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Home from "../pages/Home";
import Runs from "../pages/Runs/index";
import RefreshBtn from "../pages/RefreshBtn";
import Box from "@mui/material/Box";

const drawerWidth = 240;

function Navbar() {

  function matchIcon(idx) {
    if (idx == 0) {
      return <HomeIcon />;
    } else if (idx == 1) {
      return <DashboardIcon />;
    } else if (idx == 2) {
      return <DirectionsRunIcon />;
    } else if (idx == 3) {
      return <AboutIcon />;
    }
  }

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {["Home", "Dashboard", "Runs", "About"].map((text, index) => (
          <ListItem key={text} button component={muiLink} href={text}>
            <ListItemIcon>{matchIcon(index)}</ListItemIcon>
            <ListItemText primary={text} />      
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Run Lab
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
      <Box sx={{ overflow: "auto" }}>
      <List>
        {["Home", "Dashboard", "Runs", "About"].map((text, index) => (
          <ListItem key={text} button component={muiLink} href={text}>
            <ListItemIcon>{matchIcon(index)}</ListItemIcon>
            <ListItemText primary={text} />      
          </ListItem>
        ))}
      </List>
      </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

// Navbar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default Navbar;
