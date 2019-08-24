import React, { Component } from "react";

import { Avatar } from "antd";

import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="app-contianer">
        <div className="app-header">
          <div className="header-text">GreenVision</div>
        </div>

        <div className="profile-container">
          <div className="avatar-container">
            <Avatar shape="square" size={64} icon="user" className="avatar" />
          </div>
          <div className="profile-name">{this.props.user.name}</div>
          <div className="profile-email">{this.props.user.email}</div>
        </div>

        <div className="cards-container">
          <div className="card">
            <div className="score">{this.props.stats.totalEarthPoints}</div>
            <div className="card-label">Earth Points</div>
          </div>
          <div className="card">
            <div className="score">{this.props.stats.totalKMTraveled}</div>
            <div className="card-label">Distance Traveled (km) </div>
          </div>
          <div className="card">
            <div className="score">{this.props.stats.totalCarbonReduced}</div>
            <div className="card-label">
              Reduction in CO<sub>2</sub> emission (kg){" "}
            </div>
          </div>
          <div className="card">
            <div className="score">{this.props.stats.totalMoneySaved}</div>
            <div className="card-label">Money Saved (&#8377;) </div>
          </div>
        </div>

        <div
          className="goto-button"
          onClick={() => {
            this.props.history.push("/insights");
          }}
        >
          View All Stats <div className="arrow">&rArr;</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    stats: state.stats
  };
};

export default connect(mapStateToProps)(App);
