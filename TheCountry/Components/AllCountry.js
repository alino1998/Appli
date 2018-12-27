import React from "react";
import { View, Text } from "react-native";
import Country from "./Country";

class AllCountry extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Country />
      </View>
    );
  }
}


export default AllCountry;