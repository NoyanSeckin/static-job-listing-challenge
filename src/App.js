import React, { Component } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import GridTest from "./GridTest";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default class App extends Component {
  render() {
    return (
      <div>
        <GridTest></GridTest>
      </div>
    );
  }
}
