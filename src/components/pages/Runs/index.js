import React from 'react';
import styles from "../styles.css";
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from "@material-ui/core";
import Run from "./run.js";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      elevation: 1,
    },
  }));

export default function Runs() {
    const classes = useStyles();

    return(
        <div class="contents">
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="overline">
                        heat map
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h3" component="h1">
                        Runs Page
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}><Run /></Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}><Run /></Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}><Run /></Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}><Run /></Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}><Run /></Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}><Run /></Paper>
                </Grid>
        </Grid>
        </div>
        </div>
    )

}

// export default Runs;