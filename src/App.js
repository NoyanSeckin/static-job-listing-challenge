import React from "react";
import "./App.css";
import GridTest from "./GridTest";
import DesktopHeader from "./FrontendMentorFiles/images/bg-header-desktop.svg";
export default function App() {
  return (
    <div>
      <img
        style={{ width: "100%", background: "hsl(180, 29%, 50%)" }}
        src={DesktopHeader}
        alt=""
      />
      <GridTest></GridTest>
    </div>
  );
}
