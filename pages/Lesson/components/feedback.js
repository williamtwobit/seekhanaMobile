import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class Feedback extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <TouchableOpacity style={styles.modal} onPress={() => this.props.clear()} >
        <View>
          {
            this.props.answer.correct ?
            <Text style={styles.correct}> Correct! </Text>   :
            <View style={styles.container}>
            <Text style={styles.incorrect}>Sorry, the correct answer was:</Text>
            <Text style={styles.answer}> {this.props.answer.text} </Text>
            </View>
          }
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  modal:{
    position: 'absolute',
    top: '29%',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor:'rgba(255,255,255,.9)',
    justifyContent: 'center',
    alignItems:'center',
    zIndex: 999
  },
  correct:{
    fontSize:80,
    marginTop: -80
  },
  incorrect:{
    fontSize:20,
    marginTop:-60,
    textAlign: 'center'
  },
  answer:{
    fontSize:60,
    textAlign: 'center'
  },
  container:{
    justifyContent:'center',
  }
})
