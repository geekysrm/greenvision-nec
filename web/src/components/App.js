import React, { Component } from "react";

import { Avatar, Icon, Progress } from "antd";

import { connect } from "react-redux";

import { getEarthPoints } from "../actions/earthPointsActions";

class App extends Component {
  componentDidMount() {
    this.props.getEarthPoints();
  }

  render() {
    return (
      <div className="app-contianer">
        <div className="app-header">
          <div className="header-text">GreenVision</div>
        </div>

        <div className="profile-container">
          <div className="avatar-container">
            <Avatar
              shape="square"
              size={96}
              icon="user"
              className="avatar"
              src="https://sonu12485.github.io/images/avatar.jpg"
            />
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

        <div className="streks">
          <div className="streks-heading">Day 5/7 Streak</div>
          <div>
            <Progress
              percent={71}
              status="active"
              strokeColor="#4DDCFC"
              strokeWidth={12}
            />
          </div>
        </div>

        <div className="streks">
          <div className="streks-heading" style={{ color: "#FBC130" }}>
            26760/35000 Earth Points away from CM's Award
          </div>
          <div>
            <Progress
              percent={24}
              status="active"
              strokeColor="#FBC130"
              strokeWidth={12}
            />
          </div>
        </div>

        <div
          className="goto-button"
          onClick={() => {
            this.props.history.push("/insights");
          }}
        >
          View All Stats{" "}
          <div className="arrow">
            <Icon type="right" />
          </div>
        </div>

        <div
          className="goto-button"
          onClick={() => {
            this.props.history.push("/leaderboard");
          }}
        >
          View LeaderBoard{" "}
          <div className="arrow">
            <Icon type="right" />
          </div>
        </div>

        <div
          className="goto-button"
          onClick={() => {
            this.props.history.push("/redeem");
          }}
        >
          Redeem Earth Points{" "}
          <div className="arrow">
            <Icon type="right" />
          </div>
        </div>

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
    user: state.user,
    stats: state.stats
  };
};

export default connect(
  mapStateToProps,
  {
    getEarthPoints
  }
)(App);
