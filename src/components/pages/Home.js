import "../../Styles.css";
import React from "react";
import CardSummary from "../layout/ActivitySummaryCard";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Plot from "react-plotly.js";

function Home(props) {

  if (props.ActivityData === null) {
    return <div></div>;
  }

  const x=[], distance=[], speed=[];
  Object.keys(props.ActivityData).map((key, idx) => (
    x.push(idx+1),
    distance.push(props.ActivityData[key].distance),
    speed.push((props.ActivityData[key].distance/1000)/(props.ActivityData[key].movingTime/3600))
  ))

  return (
    <div>
      <Typography variant="h3" component="h1">
        Home
      </Typography>
      <br />
      <Stack direction="column" spacing={2} sx={{ ml: 5, mr: 5 }}>
        <Plot
          data={[
            {
              x: x,
              y: distance,
              type: "bar",
              name: "distance",
              marker: { color: "blue" },
            },
             {
              x: x,
              y: speed,
              yaxis: 'y2',
              type: "line",
              name: "speed",
              mode: "lines+markers",
              marker: { color: "red" },
            },
          ]}
          layout={{
            height: 450,
            title: "Last 10 Activities",
            paper_bgcolor: "rgba(0,0,0,0.1)",
            plot_bgcolor: "rgba(0,0,0,0.1)",
            yaxis2: {
              overlaying: 'y',
              side: 'right'
            }
          }}
          config={{
            displayModeBar: false,
          }}
          useResizeHandler={true}
        />
        {Object.keys(props.ActivityData).map((key, idx) => (
          <CardSummary
            key={key}
            title={idx+1 + ") " + props.ActivityData[key].name}
            distance={props.ActivityData[key].distance}
            startDateLocal={props.ActivityData[key].startDateLocal}
            movingTime={props.ActivityData[key].movingTime}
            elapsedTime={props.ActivityData[key].elapsedTime}
            sufferScore={props.ActivityData[key].suffer_Score}
          />
        ))}
      </Stack>
    </div>
  );
}

export default Home;
