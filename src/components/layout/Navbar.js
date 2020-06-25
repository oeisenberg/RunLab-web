import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Assessment';
import AboutIcon from '@material-ui/icons/Info';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dashboard from '../dashboard/Dashboard'
import About from '../pages/About'
import Home from '../pages/Home'
import Runs from '../pages/Runs/index.js'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
}));

export default function ClippedDrawer() {
  const classes = useStyles();
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)'); // need to read up on this
  const prefersDarkMode = false;

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <Typography variant="h6" noWrap>
                Run Lab
              </Typography>
            </Toolbar>
          </AppBar>
            <Drawer
              className={classes.drawer}
              variant="permanent"
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <Toolbar />
              <div className={classes.drawerContainer}>
                <List>
                  <Link to="/" className={classes.link}>
                    <ListItem button>
                      <ListItemIcon>
                        <HomeIcon />
                      </ListItemIcon>
                      <ListItemText primary={"Home"} />
                    </ListItem>
                  </Link>
                  <Link to="/runs" className={classes.link}>
                    <ListItem button>
                      <ListItemIcon>
                        <DirectionsRunIcon />
                      </ListItemIcon>
                      <ListItemText primary={"Runs"} />
                    </ListItem>
                  </Link>
                  <Link to="/dashboard" className={classes.link}>
                    <ListItem button>
                      <ListItemIcon>
                        <DashboardIcon />
                      </ListItemIcon>
                      <ListItemText primary={"Dashboard"} />
                    </ListItem>
                  </Link>
                </List>
                <Divider />
                <List>
                  <Link to="/about" className={classes.link}>
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
            <div className="contents">
              <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/runs">
                    <Runs />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
              </Switch>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}