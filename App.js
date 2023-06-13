import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createSwitchNavigator, createAppContainer} from "react-navigation";
import HomeScreen from "./screens/HomeScreen"
import dictionary from './database'; 


var word = dictionary[text]["word"]
var lexicalCategory = dictionary[text]["lexicalCategory"]
var definition = dictionary[text]["definition"]



export default class App extends React.Component {
  
 render(){
return (
    
    <View style={styles.container}>
    <AppContainer/>
    </View>
  );
 } 
}
var switchNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen
})

var AppContainer = createAppContainer(switchNavigator)

getWord=(text)=>{

var text = text.toLowerCase()
try{

var word = dictionary[text]["word"]
var lexicalCategory = dictionary[text]["lexicalCategory"]
var definition = dictionary[text]["definition"]
this.setState({

  "word" :word,
  "lexicalCategory" :lexicalCategory,
  "definition" :definition

})
}
catch(err){
  alert("Sorry this word is not available for now")
  this.setState({
'text':'',
'isSearchPressed': false


  })
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
