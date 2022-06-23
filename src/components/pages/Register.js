// import axios from 'axios';
import React from "react";
import "../../Styles.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

class Register extends React.Component {
  componentDidMount() {
    // window.location.replace("https://www.strava.com/oauth/authorize?client_id=48256&response_type=code&redirect_uri=http://localhost:3000/exchange_token&approval_prompt=force&scope=read_all,activity:read_all");
  }

  render() {
    return (
      <Box
        className="Registration-Body"
        sx={{
          width: 300,
          height: 250,
          backgroundColor: "primary.dark",
          boxShadow: 2,
          mx: "auto",
          mt: 10,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          sx={{ p: 5, color: "text.primary"}}
        >
          Please grant access:
        </Typography>
        <Button
          variant="contained"
          component={Link}
          sx={{
            m: 2,
            p: 1,
            backgroundColor: "primary.main",
            color: "text.primary",
            '&:hover': {
              background: "secondary.dark",
            }
          }}
          href="https://www.strava.com/oauth/authorize?client_id=48256&response_type=code&redirect_uri=http://localhost:3000/exchange_token&approval_prompt=force&scope=read_all,activity:read_all"
        >
          Connect to Strava
        </Button>
      </Box>
    );
  }
}

export default Register;
