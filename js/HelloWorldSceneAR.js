"use strict";

import React, { Component } from "react";

import { StyleSheet } from "react-native";

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroAmbientLight,
  Viro3DObject,
  ViroARPlaneSelector,
  ViroARPlane,
  ViroSpotLight,
  ViroImage,
  ViroScene,
  ViroPortalScene,
  ViroPortal,
  ViroNode
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
      <ViroARScene>
        <ViroNode position={[0.0, 0.0, -1.0]} scale={[0.5, 0.5, 0.5]}>
          {/* <ViroText
            text='Hello World'
            position={[0, -1, 0]}
            style={styles.helloWorldTextStyle}
          /> */}
          <ViroAmbientLight color='#ffffff' />

          {/* <ViroARPlane minHeight={0.5} minWidth={0.5} alignment={"Horizontal"}> */}
          {/* <Viro3DObject
            source={require("../assets/icecreamman_anim/icecreamman_anim_pbr.vrx")}
            resources={[
              require("../assets/icecreamman_anim/icecream_man_pbr_Base_Color.png"),
              require("../assets/icecreamman_anim/icecream_man_pbr_Metallic.png"),
              require("../assets/icecreamman_anim/icecream_man_pbr_Mixed_AO.png"),
              require("../assets/icecreamman_anim/icecream_man_pbr_Base_Color.png"),
              require("../assets/icecreamman_anim/icecream_man_pbr_Roughness.png")
            ]}
            position={[0, -1, 0]}
            scale={[0.5, 0.5, 0.5]}
            type='VRX'
            transformBehaviors={["billboard"]}
          /> */}
          <ViroImage
            height={1}
            width={1}
            // placeholderSource={require("../assets/tree-min.png")}
            source={require("../assets/tree-min.png")}
            position={[0, 0, 0]}
            transformBehaviors={["billboard"]}
          />

          {/* </ViroARPlane> */}
        </ViroNode>
        <ViroNode position={[1, 0, -1]} scale={[0.5, 0.5, 0.5]}>
          <Viro3DObject
            source={require("../assets/res/res/emoji_smile/emoji_smile.vrx")}
            resources={[
              require("../assets/res/res/emoji_smile/emoji_smile_specular.png")
            ]}
            type='VRX'
            position={[1, 1, -1]}
            scale={[0.25, 0.25, 0.25]}
          />
        </ViroNode>
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
