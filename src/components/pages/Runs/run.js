import React, {Component} from 'react';
import styles from "../styles.css";
import {Typography} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';

class Run extends Component {
    render(){
        return(
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Typography variant="h6" align="left">
                            Run Title
                        </Typography>
                        <Typography variant="body1" align="left">
                            Run summary
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="overline">
                            map img
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Run;