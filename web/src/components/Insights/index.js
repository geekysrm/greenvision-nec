// This is the Insights Page
import React, { Component } from "react";
import { connect } from "react-redux";
import BarGraph from "./BarGraph";

class Index extends Component {
  render() {
    return (
      <div className="app-contianer">
        <h3
          style={{
            textAlign: "center",
            paddingTop: "13px",
            height: "7vh"
          }}
        >
          Earth Points
        </h3>
        <BarGraph newData={this.props.stats.earthPointsHistory} />
        <h3
          style={{
            textAlign: "center",
            paddingTop: "13px",
            height: "7vh"
          }}
        >
          KMs Travelled
        </h3>
        <BarGraph newData={this.props.stats.kmTravelledHistory} />
        <h3
          style={{
            textAlign: "center",
            paddingTop: "13px",
            height: "7vh"
          }}
        >
          Money (₹) Saved
        </h3>
        <BarGraph newData={this.props.stats.moneySavedHistory} />
        <h3
          style={{
            textAlign: "center",
            paddingTop: "13px",
            height: "7vh"
          }}
        >
          CO<sub>2</sub> Emission Reduced
        </h3>
        <BarGraph newData={this.props.stats.carbonReducedHistory} />
        <br />
        <br />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stats: state.stats
  };
};

export default connect(
  mapStateToProps,
  null
)(Index);
