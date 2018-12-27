import React from "react";
import {StyleSheet, View, Text,TouchableOpacity } from "react-native";

class Country extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.mainConteneur}>
         <View style={styles.ImageStyle}>
          {/* <Image
            style={{width: 50, height: 50}}
            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
          /> */}
         </View>
         <View>
           <View>
             <Text>Pays : contry name</Text>
           </View>
           <View>
             <Text>Capital : </Text>
             <Text>Population :</Text>
           </View>
           <View>
              <Text>superficie : </Text>
              <Text>Monnaie : </Text>
           </View>
         </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    mainConteneur : {
      height: 150,
      margin:10,
      display:'flex',
      flexDirection: 'row',
    },
    ImageStyle:{
      flex : 1,
      backgroundColor:'red',
    },
    contBloc2Style :{
      flex:3,
      display : 'flex',
      flexDirection : 'column'
    },
    contPays :{
      flex : 1,
      backgroundColor : 'red'
    },
    contcapitalPopulation :{
      flex : 1,
      backgroundColor : 'black'
    },
    contSuperficieMonnaie :{
      flex : 1,
      backgroundColor : 'green'
    }
  });
export default Country;