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
          <div className="card">hello</div>
          <div className="card">hello</div>
          <div className="card">hello</div>
          <div className="card">hello</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(App);
