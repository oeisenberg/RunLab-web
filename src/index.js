import React from "react";
import ReactDOM from 'react-dom/client';
import Controller from "./Controller";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));

const themeLight = createTheme({
  palette: {
      mode: 'light',
      background: {
          default: "#e4f0e2"
      }
  }
});

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
  // was making componets mount x2
  //<React.StrictMode>
    <ThemeProvider theme={themeDark}> 
      <CssBaseline />
      <Controller />
    </ThemeProvider>
  //</React.StrictMode>
);