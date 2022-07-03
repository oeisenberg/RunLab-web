import React, { useEffect, useState } from "react";
import Card from "../layout/BasicCard";
import Typography from '@mui/material/Typography';

export default function Profile() {

  const [statistics, setStatistics] = useState(null);

  useEffect(() => {
    if (statistics === null) {
      // queryRunLab("");
    }
  });

  const queryRunLab = async (query) => {
    try {
      await fetch("http://localhost:8080/Runlab/" + query)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data.body);
          setStatistics(data.body);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <br/>
      <Typography variant="h3" component="h1">
        Profile
      </Typography>
      <br/>
      <Card width={300} title="" body="" />
       
  
    </div>
  );
}
