import React, {Component} from 'react'
import styles from "../pages/styles.css";
import {Typography} from "@material-ui/core"

class Dashboard extends Component {
    render(){
        return(
            <div className={styles.contents}>
                <Typography variant="h3" component="h1">
                    Dashboard Page
                </Typography>
            </div>
        )
    }
}

export default Dashboard;