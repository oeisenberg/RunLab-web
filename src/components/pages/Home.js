import * as React from 'react';
import {Typography} from "@mui/material";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     lgGraphicalElement: {
//       padding: theme.spacing(2),
//       textAlign: 'center',
//       elevation: 2,
//       height:theme.spacing(60),
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: 'left',
//       elevation: 1,
//       height:theme.spacing(46),
//     },
//   }));

export default function Home() {

    return(
        <div>
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper>
                        <Typography variant="overline">
                            Graphical Element
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>
                        <Typography variant="overline">
                            Graphical Element A
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>
                        <Typography variant="overline">
                            Graphical Element B
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>
                        <Typography variant="overline">
                            Graphical Element C
                        </Typography>
                    </Paper>
                </Grid> 
            </Grid>
        </div>
        <Button variant="contained">Contained</Button>
        </div>
    )
}