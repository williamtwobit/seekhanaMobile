import React from 'react';
import {StyleSheet,Text, TouchableOpacity, View} from 'react-native';
import {Card} from 'native-base';

export default class Option extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      submit: false
    }
  }

  handleGuess(v){
    if(this.state.submit){
      this.props.checkAnswer(v);
    }
    this.setState({
      submit: true
    });
  }

  render(){
    return(
      <TouchableOpacity
         style={styles.touch} onPress={() => this.handleGuess(this.props.value)}>
        <View style={styles.option} ref={view => this.view = view}>
          <Text style={this.state.submit ? styles.textSelected : styles.text}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  option:{
    margin: 'auto',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  optionSelected:{
    margin: 'auto',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    borderColor: '#711E69'
  },
  touch:{
    width: 125,
    height: 125,
    margin:'auto'
  },
  text:{
    fontFamily: 'Hind-Reg',
    margin: 'auto',
    textAlign: 'center',
    fontSize: 30
  },
  textSelected:{
    fontFamily: 'Hind-SemiBold',
    margin: 'auto',
    textAlign: 'center',
    fontSize: 30
  }
})
