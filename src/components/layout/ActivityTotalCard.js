import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

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
          {"Distance: " + props.distance}
        </Typography>
        <Typography variant="h8" component="div">
          {"moving_time: " + props.moving_time}
        </Typography>
        <Typography variant="h8" component="div">
          {"elapsed_time: " + props.elapsed_time}
        </Typography>
        <Typography variant="h8" component="div">
          {"achievement_count: " + props.achievement_count}
        </Typography>
      </CardContent>
    </Card>
  );
}
