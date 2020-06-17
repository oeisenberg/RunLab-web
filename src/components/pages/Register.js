import React, {Component} from 'react'
import styles from "./styles.css";
import {Typography} from "@material-ui/core"

class Register extends Component {
    render(){
        return(
            <div className={styles.contents}>
                <Typography variant="h3" component="h1">
                Register Page
                </Typography>
            </div>
        )
    }
}

export default Register;