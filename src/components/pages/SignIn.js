import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function SignIn(props) {

  return (
    <Box
      component="form"
      sx={{
        width: 300,
        height: 250,
        backgroundColor: "primary.dark",
        boxShadow: 2,
        mx: "auto",
        mt: 10,
        display: "flex",
        flexDirection: "column",
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      autoComplete="off"
    >
      <div>
        <TextField
          sx={{
            m: 2,
            p: 1,
          }}
          id="outlined-basic"
          label="Username"
          variant="outlined"
          onChange={props.handleUsernameChange}
        />
      </div>
      <div>
        <TextField
          sx={{
            m: 2,
            p: 1,
          }}
          id="outlined-password-input"
          label="Password"
          type="password"
          variant="outlined"
          onChange={props.handlePasswordChange}
        />
      </div>
      <Button
        variant="contained"
        sx={{
          m: 2,
          p: 1,
          backgroundColor: "primary.main",
          color: "text.primary",
          "&:hover": {
            background: "secondary.dark",
          },
        }}
        onClick={props.handleSignIn}
      >
        Log in
      </Button>
    </Box>
  );
}

export default SignIn;
