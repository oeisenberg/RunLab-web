// import axios from 'axios';
import React from 'react'

class Register extends React.Component {

    componentDidMount(){
        window.location.replace("https://www.strava.com/oauth/authorize?client_id=48256&response_type=code&redirect_uri=http://localhost:3000/exchange_token&approval_prompt=force&scope=read_all,activity:read_all");
    }
    
    render(){
        return(
            <div className="loginscreen">
            </div>
        )
    }
}

export default Register;