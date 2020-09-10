import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Paper} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';

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

export default function Run(props) {
    const classes = useStyles();

    return(
        <div class="fullPage">
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h3" component="h1">
                        {props.runtitle}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    Content
                </Grid>
            </Grid>
        </div>
        </div>
    )
}