import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

export default class Header extends React.Component{
  render(){
    return(
      <View style={styles.header}>
        <Image style={styles.logoImg} source={require('../../assets/images/pngs/mandala-logo.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    height:'20%',
    width: '100%',
    paddingTop: '5%',
    backgroundColor:'#711E69',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoImg:{
    height: 100,
    width: 100
  }
})
