import React from 'react';
import {Typography} from "@mui/material";
import RunSummary from "./runsummary.js";
import Grid from '@mui/material/Grid';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: 'left',
//       elevation: 1,
//     },
// }));

export default function Runs() {

    return(
        <div>
            <div>

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
                    <RunSummary runtitle="Example Run 1" runsummary="Run Summary" runid="0" runmap="map"/>
                </Grid>
                <Grid item xs={12}>
                    <RunSummary runtitle="Sprints" runsummary="Run Summary" runid="1" runmap="map"/>
                </Grid>
                <Grid item xs={12}>
                    <RunSummary runtitle="Run Title" runsummary="Run Summary" runid="2" runmap="map"/>
                </Grid>
            </Grid>
            </div>
        </div>
    )
}