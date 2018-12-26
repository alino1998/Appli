import React from 'react';
import {StyleSheet,View ,TouchableOpacity,Text} from 'react-native';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.mainContenair} >
          <TouchableOpacity 
            style={[styles.AllCountryStyle,styles.boxStyle]} 
            onPress={() => this.props.navigation.navigate('AllCountry')}
          >
              <Text style={styles.textStyle} >AllCountry</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.SearchCountrystyle,styles.boxStyle]} >
              <Text style={styles.textStyle}>Search Country</Text>
          </TouchableOpacity>
      </View>
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

export default Home;
