import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// https://stackoverflow.com/questions/7342957/how-do-you-round-to-1-decimal-place-in-javascript
function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

export default function ActivityTotalCard(props) {
  return (
    <Card sx={{ width: props.width, height: props.height }}>
      <CardContent>
        <Box sx={{ flexDirection: "row", display: "inline-flex" }}>
          {props.icon(props.title)}
          <Typography
            sx={{ fontSize: 14, display: "inline-flex", ml:1.5 }}
            color="text.secondary"
            gutterBottom
          >
            {props.title}
          </Typography>
        </Box>
        <Typography variant="h8" component="div">
          {"Total: " + props.count}
        </Typography>
        <Typography variant="h8" component="div">
          {"Distance: " + round(props.distance / 1000, 2) + " km"}
        </Typography>
        <Typography variant="h8" component="div">
          {"moving_time: " + round(props.moving_time / 60, 1) + " mins"}
        </Typography>
        <Typography variant="h8" component="div">
          {"elapsed_time: " + round(props.elapsed_time / 60, 1) + " mins"}
        </Typography>
        <Typography variant="h8" component="div">
          {"achievement_count: " + props.achievement_count}
        </Typography>
      </CardContent>
    </Card>
  );
}
