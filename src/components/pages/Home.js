import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    lgGraphicalElement: {
      padding: theme.spacing(2),
      textAlign: 'center',
      elevation: 2,
      height:theme.spacing(60),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      elevation: 1,
      height:theme.spacing(46),
    },
  }));

export default function Home() {
    const classes = useStyles();

    return(
        <div className="fullPage">
        <div className={classes.root}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Paper className={classes.lgGraphicalElement}>
                    <Typography variant="overline">
                        Graphical Element
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <Typography variant="overline">
                        Graphical Element A
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <Typography variant="overline">
                        Graphical Element B
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <Typography variant="overline">
                        Graphical Element C
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
        </div>
        </div>
    )
}