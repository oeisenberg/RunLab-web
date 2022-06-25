import React from 'react'
import {Typography} from "@mui/material"
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Navbar from '../layout/Navbar';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: 'center',
//       elevation: 1,
//       height:theme.spacing(10),
//     },
//   }));

export default function Dashboard() {

    return(
        <div className="Page-Content">
            <div>
                <Grid container spacing={1}>
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
        </div>
    )
}