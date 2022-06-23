import React from 'react';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';

import {Typography, Paper} from "@mui/material";
import Grid from '@mui/material/Grid';
import Run from "./run.js";

// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: 'left',
//       elevation: 1,
//     },
//     link: {
//         textDecoration: 'none',
//         color: theme.palette.text.primary
//     }
// }));

export default function RunSummary(props) {

    return(
        <BrowserRouter>
            <Link to={'/runs/run/'+props.runtitle}>
                <Paper>
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
            <Routes>
                <Route exact path={'/runs/run/'+props.runtitle}>
                    {/* {history.push('/runs/run/RunTitle')} */}
                    {/* work on redirecting to new page not component (hence dd list effect) */}
                    <Run runtitle={props.runtitle}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}