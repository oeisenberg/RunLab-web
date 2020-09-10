import React from 'react';
import {BrowserRouter, Link, Switch, Route, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Paper} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Run from "./run.js";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      elevation: 1,
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.text.primary
    }
}));

export default function RunSummary(props) {
    const classes = useStyles();
    const history = useHistory();

    return(
        <BrowserRouter>
            <Link to={'/runs/run/'+props.runtitle} className={classes.link}>
                <Paper className={classes.paper}>
                    <div>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Typography variant="h6" align="left">
                                    {props.runtitle}
                                </Typography>
                                <Typography variant="body1" align="left">
                                    {props.runsummary}
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="overline">
                                    {props.runmap}
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </Paper>
            </Link>
            <Switch>
                <Route exact path={'/runs/run/'+props.runtitle}>
                    {/* {history.push('/runs/run/RunTitle')} */}
                    {/* work on redirecting to new page not component (hence dd list effect) */}
                    <Run runtitle={props.runtitle}/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}