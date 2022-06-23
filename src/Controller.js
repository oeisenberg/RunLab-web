import React from 'react';
import axios from 'axios';
import App from './App'
import Register from './components/pages/Register';
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const themeLight = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: "#e4f0e2"
        }
    }
  });
  
  const themeDark = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: "#222222"
        },
        text: {
            primary: "#ffffff"
        }
    }
  });
  
async function makeQuery(config){
    const promise = new Promise(function(resolve, reject){
        axios(config)
        .then(function (response) {
            if (response.data.status !== 200){
                console.log(response);
                reject("Error");
            } else {
                resolve("Success");
            }
        })
        .catch(function (error) {
            console.log(error);
            reject("Error");
        });
    });
    return promise;
}

async function writeToKeysFile(code) {
    var data = JSON.stringify({"code":code});
    var config = {
        method: 'post',
        url: 'http://localhost:3000/Runlab/oauth',
        headers: { 
          'Content-Type': 'application/json',
        },
        data : data
    };

    return makeQuery(config).then(function() {
        return true;
    }, function(err) {
        return false;
    });
}

async function checkLogInStatus() {
    var config = {
        method: 'get',
        url: 'http://localhost:3000/Runlab/oauth',
        headers: { 
          'Content-Type': 'application/json',
        },
    };

    return makeQuery(config).then(function(){
        console.log("Registered");
        return true;
    }, function(err) {
        return false;
    });
}

// class Controller extends React.Component {
//     constructor(props) {
//         super(props);
        
//         this.state = {
//             isLoggedIn: false,
//         };
//     }
    
    
// }

export default function Controller() {
    // async componentDidMount() {
    //     var status = false;
    //     try{
    //         const url = window.location.search;
    //         var r = url.split("&");
    //         var code = r[1].split("=")[1];
    //         var scopes = r[2].split("=")[1]; // check correct scopes accepted

    //         status = await writeToKeysFile(code);
    //     } catch (err){
    //         status = await checkLogInStatus();
    //     }
    //     this.setState({isLoggedIn:status});
    // }
    const [light, setLight] = React.useState(true);

    return (
        //{light ? themeLight : themeDark}
        <ThemeProvider theme={themeDark}> 
            <CssBaseline />
            {/* if(this.state.isLoggedIn){
             return <App />;
             } else {
                return <Register />;
             } */}
            <Register />;
        </ThemeProvider>
    )
}