import React from 'react';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Assessment';
import AboutIcon from '@mui/icons-material/Info';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import About from '../pages/About';
import Home from '../pages/Home';
import Runs from '../pages/Runs/index';
import RefreshBtn from '../pages/RefreshBtn';
import Box from '@mui/material/Box';

export default function Navbar() {

  return (
      <BrowserRouter>
        <div>
          <CssBaseline />
          <AppBar position="fixed">
            <Toolbar>
              <Box display='flex' flexGrow={1}>
                <Typography variant="h6" noWrap>
                 Run Lab
                 </Typography>
              </Box>
              {/* <Typography inline variant="body1" align="right"><RefreshBtn /></Typography> */}
            </Toolbar>
          </AppBar>
            <Drawer
              variant="permanent"
            >
              <Toolbar />
              <div>
                <List>
                  <Link to="/">
                    <ListItem button>
                      <ListItemIcon>
                        <HomeIcon />
                      </ListItemIcon>
                      <ListItemText primary={"Home"} />
                    </ListItem>
                  </Link>
                  <Link to="/dashboard">
                    <ListItem button>
                      <ListItemIcon>
                        <DashboardIcon />
                      </ListItemIcon>
                      <ListItemText primary={"Dashboard"} />
                    </ListItem>
                  </Link>
                  <Link to="/runs">
                    <ListItem button>
                      <ListItemIcon>
                      <DirectionsRunIcon />
                      </ListItemIcon>
                      <ListItemText primary={"Runs"} />
                    </ListItem>
                  </Link>
                </List>
                <Divider />
                <List>
                  <Link to="/about">
                      <ListItem button>
                        <ListItemIcon>
                          <AboutIcon />
                        </ListItemIcon>
                        <ListItemText primary={"About"} />
                      </ListItem>
                    </Link>
                </List>
              </div>
            </Drawer>
            <Routes>
              <Route exact path="/">
                <Home />
                  {/* summary of recent activity */}
              </Route>
              <Route path="/dashboard">
                  {/* <Dashboard /> */}
                  {/* analytics of activity */}
              </Route>
              <Route path="/runs">
                  {/* <Runs />  */}
                  {/* Details per run */}
              </Route>
              <Route path="/about">
                  {/* <About /> */}
              </Route>
            </Routes>
        </div>
      </BrowserRouter>
  );
}