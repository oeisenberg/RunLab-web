import * as React from "react";
import Box from "@mui/material/Box";
import Plot from "react-plotly.js";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Keys from '../../resources/keys.json';

// https://stackoverflow.com/questions/7342957/how-do-you-round-to-1-decimal-place-in-javascript
function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

export default function ActivitySummaryCard(props) {

    return (
    <Card>
      <Plot
        data={[
          {
            type: "scattermapbox",
            lat: [props.startLatLng[0]],
            lon: [props.startLatLng[1]],
          },
        ]}
        layout={{
          autosize: true,
          showlegend: false,
          height: 140,
          margin: {
            r: 0,
            t: 0,
            b: 0,
            l: 0,
            pad: 0
          },
          mapbox: {
            bearing: 0,
            center: {
              lat: props.startLatLng[0],
              lon: props.startLatLng[1],
            },
            pitch:0,
            zoom:17
          },
        }}
        config={{
          displayModeBar: false,
          mapboxAccessToken: Keys.mapbox
        }}
        useResizeHandler={true}
      />

      <CardContent>
        <Typography sx={{ display: "inline-flex" }} gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="h8" component="div" color="text.secondary">
          {"Distance: " + round(props.distance / 1000, 2) + " km"}
        </Typography>
        <Typography variant="h8" component="div" color="text.secondary">
          {"startDateLocal: " + props.startDateLocal}
        </Typography>
        <Typography variant="h8" component="div" color="text.secondary">
          {"Moving time: " + round(props.movingTime / 60, 1) + " mins"}
        </Typography>
        <Typography variant="h8" component="div" color="text.secondary">
          {"Elapsed time: " + round(props.elapsedTime / 60, 1) + " mins"}
        </Typography>
        <Typography variant="h8" component="div" color="text.secondary">
          {"Suffer Score: " + props.sufferScore}
        </Typography>
      </CardContent>
      <CardActions>
        {/* TODO: Link to a detialed view of this activity */}
        <Button size="small">More Details</Button>
      </CardActions>
    </Card>
  );
}
