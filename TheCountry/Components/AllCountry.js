import React from "react";
import { View, FlatList,ActivityIndicator,StyleSheet,Text,ScrollView } from "react-native";
import Country from "./Country";
import {getCountryFromAPI} from "../API/restcountriesAPI";
class AllCountry extends React.Component {

  constructor(props){
    super(props)
    this.state={
      AllcountryList:[],
      showCountry:true
    }
  }
  _getAllCountry=async()=>{
     const data=await getCountryFromAPI()
     this.setState({AllcountryList:data,showCountry:false})
  }
  componentDidMount(){
    this._getAllCountry()
  }
  changeshow=()=>{
    if(this.state.showCountry){
      return(
        <View style={styles.styleActivity}>
          <ActivityIndicator size='large'color='#f4511e' />
        </View>  
      ) 
    }
  }
  render() {
    console.log('acces dev tools');
    
    return (
      <ScrollView style={styles.container}>
        <FlatList
          data={this.state.AllcountryList}
          keyExtractor={(item)=>item.name}
          renderItem={({item}) => <Country countryDonne={item}/> }
        />
        {this.changeshow()}
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  styleActivity:{
    position:'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'red',
  },
  container:{
    flex:1
  }
});

export default AllCountry;