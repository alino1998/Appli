import React from "react";
import { StyleSheet, View, Text, TouchableOpacity ,Image} from "react-native";
class Country extends React.Component {
  constructor(props){
    super(props)
  }
  donnepays=this.props.countryDonne

  render() {
    return (
      <TouchableOpacity style={styles.mainConteneur}>
        <View style={styles.ImageStyle}>
          <Image
            style={{resizeMode:"contain"}}
            source={{uri: `${this.donnepays.drapeau}`}}
          />
        </View>
        <View style={styles.contBloc2Style}>
          <View style={styles.contPays}>
            <Text style={styles.textStyle}>Pays : {this.donnepays.name} </Text>
          </View>
          <View style={styles.contcapitalPopulation}>
            <Text style={styles.textStyle}>Capital : {this.donnepays.capital} </Text>
            <Text style={styles.textStyle}>Population : {this.donnepays.population}</Text>
          </View>
          <View style={styles.contSuperficieMonnaie}>
            <Text style={styles.textStyle}>superficie : {this.donnepays.area}</Text>
            <Text style={styles.textStyle}>Monnaie : {this.donnepays.monnaie}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  mainConteneur: {
    height: 150,
    margin: 10,
    display: "flex",
    flexDirection: "row"
  },
  ImageStyle: {
    flex: 1,
  },
  contBloc2Style: {
    flex: 2,
    display: "flex",
    flexDirection: "column"
  },
  contPays: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "center"
  },
  contcapitalPopulation: {
    flex: 1,
    backgroundColor: "black"
  },
  contSuperficieMonnaie: {
    flex: 1,
    backgroundColor: "green"
  },
  textStyle: {
    fontSize: 17,
    paddingLeft: 5,
    color: "#f4511e"
  }
});
export default Country;
