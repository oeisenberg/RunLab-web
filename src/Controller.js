import React, { useEffect, useState } from "react";
import axios from 'axios';
import App from './App';
import Register from './components/pages/Register';
  
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

function Controller() {
    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        console.log("isLoggedIn: " + isLoggedIn);
        if (!isLoggedIn) {
            try{
                const url = window.location.search;
                var r = url.split("&");
                var code = r[1].split("=")[1];
                // TODO:
                // 1 - check correct scopes accepted
                // var scopes = r[2].split("=")[1]; 
                setAuthenticationTokens(code)
            } catch (err){
                // check cookies ?
            }
        }
    });

    async function setAuthenticationTokens(code) {
        var config = {
            method: 'post',
            url: 'http://localhost:3000/runlab/oauth',
            headers: { 
              'Content-Type': 'application/json',
            },
            data: {
                'code':code
            }
        };
        console.log(code)
        return makeQuery(config).then(function(){
            setLoggedIn(true);
        }, function(err) {
            setLoggedIn(false);
        });
    }

    // if(isLoggedIn){
        return (<App />);
    // } else {
        // return <Register />;
    // }
    
}

export default Controller;