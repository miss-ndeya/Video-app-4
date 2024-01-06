import React from "react";
import Sections from "./Sections";
import SideBare from "./SideBare";

const Main = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <SideBare />
        <Sections />
      </div>
    </div>
  );
};

export default Main;
