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

export default function ActivitySummaryCard(props) {

    return (
        <Card>
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
                {"Moving time: " + round(props.moving_time / 60, 1) + " mins"}
            </Typography>
            <Typography variant="h8" component="div" color="text.secondary">
                {"Elapsed time: " + round(props.elapsedTime / 60, 1) + " mins"}
            </Typography>
            <Typography variant="h8" component="div" color="text.secondary">
                {"Suffer Score: " + props.sufferScore}
            </Typography>
            </CardContent>
        </Card>
    );
}
