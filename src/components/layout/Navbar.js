import React from "react";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Assessment";
import AboutIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

import UserProfile from "./UserProfile";

const drawerWidth = 240;

function Navbar() {
  function matchIcon(idx) {
    if (idx === 0) {
      return <HomeIcon />;
    } else if (idx === 1) {
      return <DashboardIcon />;
    } else if (idx === 2) {
      return <DirectionsRunIcon />;
    } else if (idx === 3) {
      return <AboutIcon />;
    }
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <Typography variant="h4" noWrap component="div">
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
              <ListItem key={text} button component={Link} to={text}>
                <ListItemIcon>{matchIcon(index)}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Box>
          <UserProfile/>
        </Box>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default Navbar;
