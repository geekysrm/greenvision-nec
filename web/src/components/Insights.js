import React, { Component } from "react";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from "victory";

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
        <div
          style={{
            color: "#7392a0",
            alignSelf: "center",
            marginRight: "-30px",
            marginLeft: "3px"
          }}
        >
          Hello
        </div>
        <VictoryChart
          style={{ parent: { maxWidth: "100%" } }}
          theme={VictoryTheme.material}
          domainPadding={10}
        >
          <VictoryAxis
            crossAxis
            tickValues={["1", "2", "3", "4"]}
            tickFormat={t => `Day ${t}`}
            style={{
              ticks: { stroke: "red", size: 5 }
            }}
          />
          <VictoryAxis
            dependentAxis
            crossAxis
            width={400}
            height={400}
            domain={[0, 10]}
            theme={VictoryTheme.material}
            // offsetX={200}
            standalone={false}
          />
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
              labels: { fontSize: 0.5, fill: "000" }
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
