import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

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
