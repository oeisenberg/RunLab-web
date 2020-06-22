import React, {Component} from 'react';
import styles from "../styles.css";
import {Typography} from "@material-ui/core";
import Run from "./run.js";

class Runs extends Component {
    render(){
        return(
            <div className={styles.contents}>
                <Typography variant="h3" component="h1">
                    Runs Page
                </Typography>
                <div className="run">
                    <Run />
                </div>
                <div className="run">
                    <Run />
                </div>
            </div>
        )
    }
}

export default Runs;