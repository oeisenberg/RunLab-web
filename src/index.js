import React from "react";
import ReactDOM from 'react-dom/client';
import Controller from "./Controller";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));

const themeDark = createTheme({
  palette: {
      mode: 'dark',
      background: {
          default: "#222222"
      },
      text: {
          primary: "#ffffff"
      }
  }
});

root.render(
  // Note: Was making components mount twice
  //<React.StrictMode>
    <ThemeProvider theme={themeDark}> 
      <CssBaseline />
      <Controller />
    </ThemeProvider>
  //</React.StrictMode>
);