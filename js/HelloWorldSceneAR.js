"use strict";

import React, { Component } from "react";

import { StyleSheet, View } from "react-native";
import axios from "axios";

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
  ViroNode,
  ViroARCamera
} from "react-viro";

export default class HelloWorldSceneAR extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      initialized: false,
      score: 8240,
      coinCount: 7,
      coins: [],
      treePostion: 0
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  componentDidMount = async () => {
    let newCoins = [];
    for (let i = 0; i < this.state.coinCount; i++) {
      newCoins.push({
        x: this.getRandomNumbers(),
        y: 0,
        visible: true
      });
    }
    const response = await axios.get(
      "https://greenvision-api.herokuapp.com/points"
    );

    this.setState({ coins: newCoins, initialized: true, score: response.data });

    setInterval(this.changePos, 200);
  };

  changePos = () => {
    if (this.state.treePostion <= -1) {
      this.setState({
        treePostion: 1
      });
    } else {
      const newPos = this.state.treePostion - 0.1;

      this.setState({
        treePostion: newPos
      });
    }
  };

  componentDidUpdate = async () => {
    const response = await axios.get(
      "https://greenvision-api.herokuapp.com/points"
    );
    this.setState({
      score: response.data
    });
  };

  getRandomNumbers = () => {
    return Math.floor(Math.random() * 6) - 3;
  };

  handleCoinClick = index => {
    let newCoins = [];
    for (let i = 0; i < this.state.coinCount; i++) {
      if (i !== index) newCoins.push(this.state.coins[i]);
      else {
        newCoins.push({ ...this.state.coins[i], visible: false });
      }
    }

    axios.get("https://greenvision-api.herokuapp.com/add/10");

    //increase score by 10 and make the clicked coin invisible
    this.setState(state => ({
      coins: newCoins
    }));
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ViroARScene>
          {this.state.initialized ? (
            <ViroARCamera>
              <ViroText
                position={[1.5, 2.5, -6]}
                text={`Earth Points: ${this.state.score}`}
                width={2}
                height={2}
              />
            </ViroARCamera>
          ) : null}

          <ViroNode position={[0.0, 0.0, -1.0]} scale={[0.5, 0.5, 0.5]}>
            <ViroAmbientLight color='#ffffff' />

            <ViroImage
              height={1}
              width={1}
              source={require("../assets/tree-min.png")}
              position={[this.state.treePostion, 0, 0]}
              transformBehaviors={["billboard"]}
            />
          </ViroNode>

          {this.state.coins.map(({ x, y, visible }, index) => (
            <ViroNode
              onClick={() => this.handleCoinClick(index)}
              key={index}
              position={[x, y, -1]}
              scale={[0.5, 0.5, 0.5]}
              visible={visible}
            >
              <Viro3DObject
                source={require("../assets/earth/Earth.obj")}
                resources={[
                  require("../assets/earth/Earth.mtl"),
                  require("../assets/earth/Earth_TEXTURE_CM.png")
                ]}
                type='OBJ'
                position={[1, 1, -1]}
                scale={[0.1, 0.1, 0.1]}
              />
            </ViroNode>
          ))}
        </ViroARScene>
      </View>
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
