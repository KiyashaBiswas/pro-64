import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      isSearchedPressed: false,
      word: 'Loading...',
      lexicalCategory: '',
      examples: [],
      definition: '',
    };
  }
  getWord = (typedword) => {
    var searchKeyword = typedword.toLowerCase();
    var url =
      'https://rupinwhitehatjr.github.io/dictionary/' + searchKeyword + '.json';
      console.log(url)
    return fetch(url).then((data) => {
      if (data.status === 200) {
        return data.json();
      } else {
        return null;
      }
    })
    .then((response)=>{
      var responseObject=response
      if(responseObject){
        var wordData=responseObject.definitions[0]
        var wordType=wordData.wordType
        var definition=wordData.description
        this.setState({
          lexicalCategory:wordType,
          definition:definition,
          word:this.state.text
        })
      }
      else{
        this.setState({
          word:this.state.text,
            definition:"Not Found"
        })
      }
    })
  };
  render() {
    return (
      <View>
        <TextInput
          style={styles.inputboxstyle}
          onChangeText={(writtenText) => {
            this.setState({
              text: writtenText,
              isSearchedPressed: false,
              word: 'Loading...',
              lexicalCategory: '',
              examples: [],
              definition: '',
            });
          }}
          value={this.state.text}></TextInput>
        <TouchableOpacity
          style={styles.searchbuttonstyle}
          onPress={() => {
            this.setState({ isSearchedPressed: true });
            this.getWord(this.state.text);
          }}>
          <Text>Search</Text>
        </TouchableOpacity>
        <View>
        <Text>Word:</Text>
        <Text>{this.state.text}</Text>
        </View>
        <View>
        <Text>Definition:</Text>
        <Text>{this.state.definition}</Text>
        </View>
        <View>
        <Text>lexical Category:</Text>
        <Text>{this.state.lexicalCategory}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  inputboxstyle: {
    border: '2px black solid',
    textAlign:"center",
    
  },

  searchbuttonstyle: {
    border: '2px black solid',
    backgroundColor: 'orange',
    width: '100px',
    height: '25px',
    marginLeft: '100px',
    marginTop: '25px',
    color: 'white',
    textAlign: 'center',
  },
});
