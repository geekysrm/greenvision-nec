import React, { Component } from "react";

import { Avatar } from "antd";

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
        </div>
      </div>
    );
  }
}

export default App;
