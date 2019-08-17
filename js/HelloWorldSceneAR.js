"use strict";

import React, { Component } from "react";

import { StyleSheet } from "react-native";

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroAmbientLight,
  Viro3DObject,
  ViroARPlane
} from "react-viro";

export default class HelloWorldSceneAR extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      initialized: false
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        {this.state.initialized ? (
          <>
            <ViroAmbientLight color='#ffffff' />

            <Viro3DObject
              source={require("../assets/tree/tree.fbx")}
              resources={[
                require("../assets/tree/Tree.mtl"),
                require("../assets/tree/DB2X2_L01.png"),
                require("../assets/tree/DB2X2_L01_Spec.png"),
                require("../assets/tree/bark_0021.jpg")
              ]}
              highAccuracyEvents={true}
              position={[0, 0, -1]}
              scale={[0.05, 0.05, 0.05]}
              rotation={[0, 0, 0]}
              type='OBJ'
              transformBehaviors={["billboard"]}
            />
          </>
        ) : (
          <ViroText
            text='Initializing AR...'
            scale={[0.5, 0.5, 0.5]}
            position={[0, 0, -1]}
            style={styles.helloWorldTextStyle}
          />
        )}
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        initialized: true
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle Looss of Tracking
      this.setState({
        initialized: false
      });
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center"
  }
});

module.exports = HelloWorldSceneAR;
