import React from "react";
import Plot from "react-plotly.js";

const BasicLinePlot = ({ stats, playerTitle, averages }) => {
  const y =
    stats && stats.length > 0 && Object.values(stats).map((obj) => obj.fga);
  //console.log(y);

  const x =
    stats &&
    stats.length > 0 &&
    Object.values(stats).map((obj) => obj.game.date);
  //console.log(x);

  const Avgy = averages;
  Object.values(averages).map((obj) => obj.fga);

  //   const Avgx =
  //     averages &&
  //     stats.length > 0 &&
  //     Object.values(averages).map((obj) => obj.game.date);

  const AvgYPts = Avgy.fga;
  //console.log(AvgYPts);

  return (
    <>
      {stats && stats.length > 0 && playerTitle && averages && (
        <Plot
          style={{ width: "100%", height: "100%" }}
          data={[
            {
              x: x,
              y: y,
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "blue" },
              name: "Player Fga", // Add a name for the legend
            },
            {
              x: [x[0], x[x.length - 1]], // Start and end points for the line
              y: [AvgYPts, AvgYPts], // Average points for both x points
              type: "scatter",
              mode: "lines+markers",
              line: { color: "red", width: 2 }, // Solid red line properties
              name: "Average Fga", // Add a name for the legend
            },
          ]}
          layout={{
            title: `${playerTitle.first_name} ${playerTitle.last_name} Fga Per Game`,
            yaxis: { title: "Fga" },
            xaxis: { title: "Date" },
          }}
        />
      )}
    </>
  );
};

export default BasicLinePlot;
