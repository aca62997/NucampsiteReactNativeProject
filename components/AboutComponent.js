import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { CAMPSITES } from "../shared/campsites";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
    };
  }

  static navigationOptions = {
    title: "About Us",
  };

  render() {
    return <ScrollView></ScrollView>;
  }
}

export default About;
