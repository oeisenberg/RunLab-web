import React from "react";
import Card from "../layout/BasicCard";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';

function Profile(props) {
  if (props.Statistics === null) {
    return <div></div>;
  }

  return (
    <div>
      <br />
      <Typography variant="h3" component="h1">
        Profile
      </Typography>
      <br />

      <Grid container spacing={{ xs: 2, sm: 2, md:2 }} columnSpacing={{ xs: 2, sm: 2, md:2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Object.keys(props.Statistics).map((key, idx) => (
          <Grid item key={key}>
            <Card 
              width={300}
              height={150}
              title={key}
              body={props.Statistics[key].count}
            />
          </Grid>
        ))}
      </Grid>
    
    </div>
  );
}

export default Profile;
