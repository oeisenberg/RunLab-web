import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import PoolIcon from "@mui/icons-material/Pool";

const icon = (title) => {
  if (title.toLowerCase().includes("ride")) {
    return <DirectionsBikeIcon sx={{p:10}}/>;
  } else if (title.toLowerCase().includes("run")) {
    return <DirectionsRunIcon />;
  } else if (title.toLowerCase().includes("swim")) {
    return <PoolIcon />;
  }
};

export default function DataCard(props) {
  return (
    <Card sx={{ width: props.width, height: props.height }}>
      <CardContent>
        <Box sx={{ flexDirection: 'row', display: "inline-flex"}}>
            {props.icon(props.title)}
            <Typography
            sx={{ fontSize: 14, ml:1.5 }}
            color="text.secondary"
            gutterBottom
            >
            {props.title}
            </Typography>
        </Box>
        <Typography variant="h8" component="div">
          {props.data}
        </Typography>
      </CardContent>
    </Card>
  );
}
