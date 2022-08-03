import * as React from 'react'
import "../../Styles.css";
import CardSummary from "../layout/ActivitySummaryCard";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function Home(props) {

  if (props.ActivityData === null || props.ActivityData === undefined) {
    return <div></div>;
  }


  return (
    <div>
      <Typography variant="h3" component="h1">
        Home
      </Typography>
      <br />
      <Stack direction="column" spacing={2} sx={{ ml: 5, mr: 5 }}>
        {Object.keys(props.ActivityData).map((key, idx) => (
          <CardSummary
            key={key}
            title={props.ActivityData[key].name}
            startLatLng={props.ActivityData[key].start_latlng}
            polyline={props.ActivityData[key].map.summary_polyline}
            distance={props.ActivityData[key].distance}
            startDateLocal={props.ActivityData[key].start_date_local}
            movingTime={props.ActivityData[key].moving_time}
            elapsedTime={props.ActivityData[key].elapsed_time}
            sufferScore={props.ActivityData[key].suffer_score}
          />
        ))}
      </Stack>
    </div>
  );
}

export default Home;