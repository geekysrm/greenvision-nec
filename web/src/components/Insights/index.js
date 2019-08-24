// This is the Insights Page
import React, { Component } from "react";
import { connect } from "react-redux";
import BarGraph from "./BarGraph";

class Index extends Component {
  render() {
    console.log(this.props.stats);
    return (
      <div>
        <h3
          style={{
            textAlign: "center",
            paddingTop: "13px",
            marginBottom: "-31px"
          }}
        >
          Earth Points
        </h3>
        <BarGraph newData={this.props.stats.earthPointsHistory} />
        <h3
          style={{
            textAlign: "center",
            paddingTop: "13px",
            marginBottom: "-31px"
          }}
        >
          KMs Travelled
        </h3>
        <BarGraph newData={this.props.stats.kmTravelledHistory} />
        <h3
          style={{
            textAlign: "center",
            paddingTop: "13px",
            marginBottom: "-31px"
          }}
        >
          Money (₹) Saved
        </h3>
        <BarGraph newData={this.props.stats.moneySavedHistory} />
        <h3
          style={{
            textAlign: "center",
            paddingTop: "13px",
            marginBottom: "-31px"
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
