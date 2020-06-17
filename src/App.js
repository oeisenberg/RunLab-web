import React from 'react';
import axios from 'axios';
import Navbar from './components/layout/Navbar'
import Register from './components/pages/Register';

function writeToKeysFile(code) {
    var data = JSON.stringify({"code":code});
    var config = {
        method: 'post',
        url: 'http://localhost:3000/Runlab/oauth',
        headers: { 
          'Content-Type': 'application/json',
        },
        data : data
    };
    axios(config)
    .then(function (response) {
        // if (response.data.status !== 200){
            console.log(response);
        // }
    })
    .catch(function (error) {
        console.log(error);
    });
}

class App extends React.Component {
    constructor(props) {
      super(props);
      const url = window.location.search;
        try{
            var r = url.split("&");
            var code = r[1].split("=")[1];
            var scopes = r[2].split("=")[1];
            scopes = scopes.split(",");
            console.log(scopes) // need to check all scopes requested are accepted
            writeToKeysFile(code);
            this.state = {isLoggedIn: true};
        } catch (err){
            this.state = {isLoggedIn: false};
        }
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        if (isLoggedIn) {
            return <Navbar />
        } else {
            return <Register />;
        }
    }
}

export default App;