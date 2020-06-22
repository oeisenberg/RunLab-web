// import axios from 'axios';
import React from 'react'

class Register extends React.Component {

    componentDidMount(){
        // window.location.replace("https://www.strava.com/oauth/authorize?client_id=48256&response_type=code&redirect_uri=http://localhost:3000/exchange_token&approval_prompt=force&scope=read_all,activity:read_all");
    }
    
    render(){
        return(
            <div>
                Please register:<br/>
                <a href="https://www.strava.com/oauth/authorize?client_id=48256&response_type=code&redirect_uri=http://localhost:3000/exchange_token&approval_prompt=force&scope=read_all,activity:read_all">Click here to redirect</a>
            </div>
        )
    }
}

export default Register;