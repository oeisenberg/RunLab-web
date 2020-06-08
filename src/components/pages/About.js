import React, {Component} from 'react'
import styles from "./styles.css";
import {Typography} from "@material-ui/core"

class About extends Component {
    render(){
        return(
            <div className={styles.contents}>
                <Typography variant="h3" component="h1">
                    About Page
                </Typography>
            </div>
        )
    }
}

export default About;