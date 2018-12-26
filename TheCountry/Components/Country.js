import React from "react";
import { View, Text,TouchableOpacity } from "react-native";

class AllCountry extends React.Component {
  render() {
    return (
      <TouchableOpacity>
          <View>

          </View>
          <View>
              
          </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    AllCountryStyle: {
      backgroundColor: '#56FF40',
    },
    SearchCountrystyle: {
      backgroundColor: '#E8AA0C',
    },
    textStyle:{
      fontSize:35,
      color:'#200CE8'
    },
    mainContenair :{
      flex:1,
      justifyContent:'space-around',
      alignItems:'center'
    },
    boxStyle:{
      width:300,
      height:150,
      borderColor:'black',
      borderRadius:10,
      borderWidth:3,
      justifyContent:'center',
      alignItems:'center',
    }
  });
export default AllCountry;