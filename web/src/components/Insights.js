import React, { Component } from "react";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory";

class BarGraph extends Component {
  render() {
    const newData = [
      { x: 1, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 5 },
      { x: 4, y: 4 },
      { x: 5, y: 6 }
    ];

    return (
      <div className="graph-wrapper">
        <VictoryChart
          style={{ parent: { maxWidth: "100%" } }}
          theme={VictoryTheme.material}
          domainPadding={10}
        >
          <VictoryBar
            labels={d => `y: ${d.y}`}
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 }
            }}
            style={{
              data: {
                fill: "#67C912"
              },
              labels: { fontSize: 9 }
            }}
            alignment="start"
            data={newData}
          />
        </VictoryChart>
      </div>
    );
  }
}

export default BarGraph;
