import React, { Component } from "react";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from "victory";

class BarGraph extends Component {
  render() {
    const newData = this.props.newData;

    return (
      <div className="graph-wrapper">
        {/* <div
          style={{
            color: "#7392a0",
            alignSelf: "center",
            marginRight: "-30px",
            marginLeft: "3px"
          }}
        >
          {this.props.xAxisLabel}
        </div> */}
        <VictoryChart
          style={{ parent: { maxWidth: "100%" } }}
          theme={VictoryTheme.material}
          domainPadding={10}
          // standalone={false}
        >
          <VictoryAxis
            crossAxis
            tickValues={["1", "2", "3", "4"]}
            tickFormat={t => `Day ${t}`}
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
            barWidth={40}
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
