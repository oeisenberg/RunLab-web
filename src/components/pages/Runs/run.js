import React, {Component} from 'react';
import {Typography, Paper} from "@mui/material";
import Grid from '@mui/material/Grid';

export default function Run(props) {

    return(
        <div>
        <div>
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