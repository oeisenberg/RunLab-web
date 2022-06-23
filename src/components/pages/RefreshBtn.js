import React from 'react';
import Fab from '@mui/material/Fab';
// import RefreshIcon from '@mui/material-icons/Refresh';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
//   extendedIcon: {
//     marginRight: theme.spacing(1),
//   },
// }));

export default function FloatingActionButtons() {
  // const classes = useStyles();

  return (
    <div>
      <Fab color="secondary" aria-label="refresh" onClick={() => console.log('Refresh From Strava')}> {/* REST API request to backend to pull in more data to display*/}
        {/* <RefreshIcon /> */}
      </Fab>
    </div>
  );
}