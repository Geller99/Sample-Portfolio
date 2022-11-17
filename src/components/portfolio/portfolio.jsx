import React from "react";
import { Tab } from "../tabs/Tab";
import "./portfolio.css";

export const Portfolio = () => {
  return (
    <div className="Portfolio">
      <h1>My Featured Work</h1>
      <div className="Portfolio-Items">
        <Tab src={"https://uglweb3.netlify.app"} />
        <Tab src={"https://seven22.io"} />
        <Tab src={"https://k12crypto.com"} />
        {/* <Tab src={"https://cubicle.cube-x.gg/"} /> */}
      </div>
    </div>
  );
};
