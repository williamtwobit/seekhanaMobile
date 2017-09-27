import React from 'react';
import {StyleSheet,Text} from 'react-native';
import {Header, CardItem} from 'native-base';

export default class Prompt extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <CardItem header style={styles.header}>
        <Text style={styles.headerText}>{this.props.text}</Text>
      </CardItem>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#711E69',
  },
  headerText: {
    fontSize: 90,
    color: 'white'
  }
})
