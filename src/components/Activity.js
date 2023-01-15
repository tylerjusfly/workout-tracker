import HeatMap from "@uiw/react-heat-map";
import Tooltip from "@uiw/react-tooltip";
import React, { useState } from "react";
import "../assets/css/activity.css";

const value = JSON.parse(localStorage.getItem("activites")) || [];

const Activity = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const januaryDate = new Date(currentYear, 0).toLocaleDateString();
  const yearEnd = new Date(currentYear, 11, 31).toLocaleDateString();

  return (
    <div className="Activity--map">
      <span className="activity-span"> Activities Table </span>
      <HeatMap
        value={value}
        width={900}
        rectSize={15}
        space={2}
        legendCellSize={20}
        rectRender={(props, data) => {
          const options = { month: "long", day: "numeric", year: "numeric" };
          const eachDate = new Date(data.date).toLocaleDateString("en-US", options);

          const style = {
            fontWeight: 700,
          };

          return (
            <Tooltip trigger="click" key={props.key} placement="top" content={`${data.count || 0} pushups on ${eachDate}`} style={style}>
              <rect {...props} />
            </Tooltip>
          );
        }}
        style={{ color: "#fff" }}
        startDate={januaryDate}
        endDate={new Date(yearEnd)}
      />
    </div>
  );
};

export default Activity;
