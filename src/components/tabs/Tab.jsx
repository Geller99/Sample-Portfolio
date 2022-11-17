import React from "react";
import './Tabs.css'

export const Tab = ({src}) => {
  return (
    <div className="Tabs">
      <iframe
      title="GG"
      width="500"
      height="400"
      src={src}
    ></iframe>
    <a href={src} target="_blank"><h2>Visit Project Site</h2> </a>
    </div>
  );
};
