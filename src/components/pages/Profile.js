import React from "react";
import ActivityTotalCard from "../layout/ActivityTotalCard";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import DataCard from "../layout/DataCard";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import PoolIcon from "@mui/icons-material/Pool";

const dataComponent = (key, data) => {
  const isObj = (obj) => {
    return Object.prototype.toString.call(obj) === "[object Object]";
  };

  const icon = (title) => {
    if (title.toLowerCase().includes("ride") || title.toLowerCase().includes("elevation")) {
      return <DirectionsBikeIcon />;
    } else if (title.toLowerCase().includes("run")) {
      return <DirectionsRunIcon />;
    } else if (title.toLowerCase().includes("swim")) {
      return <PoolIcon />;
    }
  };

  const formatTitle = (title) => {
    const titles = {
      "biggestRideDistance": "Furthest Ride",
      "biggestClimbElevationGain":"Largest Elevation Gain",
      "allRunTotals":  "All Runs",
      "allSwimTotals":  "All Swims",
      "recentRideTotals": "Recent Rides (4wks)",
      "recentRunTotals": "Recent Runs (4wks)",
      "recentSwimTotals": "Recent Swims (4wks)",
      "allRideTotals": "All Rides",
      "ytdrideTotals": "YTD Rides",
      "ytdrunTotals": "YTD Runs",
      "ytdswimTotals": "YTD Swims"
    };

    return titles[title];
  };

  if (isObj(data)) {
    return (
      <ActivityTotalCard
        width={250}
        height={250}
        icon={icon}
        title={formatTitle(key)}
        count={data.count}
        distance={data.distance}
        moving_time={data.movingTime}
        elapsed_time={data.elapsedTime}
        elevation_gain={data.elevationGain}
        achievement_count={data.achievementCount}
      />
    );
  } else {
    return (
      <DataCard
        width={250}
        height={250}
        icon={icon}
        title={formatTitle(key)}
        data={data}
      ></DataCard>
    );
  }
};

function Profile(props) {
  if (props.Statistics === null) {
    return <div></div>;
  }

  return (
    <div>
      <br />
      <Typography variant="h3" component="h1">
        Statistics
      </Typography>
      <br />

      <Grid
        container
        spacing={{ xs: 2, sm: 2, md: 2 }}
        columnSpacing={{ xs: 2, sm: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Object.keys(props.Statistics)
          .sort()
          .map((key, _) => (
            <Grid item key={key}>
              {dataComponent(key, props.Statistics[key])}
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default Profile;
