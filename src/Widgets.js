import InfoIcon from "@material-ui/icons/Info";
import React from "react";
import "./Widgets.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widget__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widget__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linked News</h2>
        <InfoIcon />
      </div>

      {newsArticle("hihihihi", "test")}
      {newsArticle("hihihihi1", "test1")}
      {newsArticle("hihihihi2", "test2")}
    </div>
  );
}

export default Widgets;
