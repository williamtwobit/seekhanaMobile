import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Spinner } from 'native-base';

import Header from './Header';


export default class Container extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fontsLoaded: false
    }
  }

  async componentWillMount(){
    await Expo.Font.loadAsync({
      'Varela': require('../../assets/fonts/Varela.ttf'),
      'Hind-Bold': require('../../assets/fonts/Hind-Bold.ttf'),
      'Hind-Light': require('../../assets/fonts/Hind-Light.ttf'),
      'Hind-Med': require('../../assets/fonts/Hind-Med.ttf'),
      'Hind-Reg': require('../../assets/fonts/Hind-Reg.ttf'),
      'Hind-SemiBold': require('../../assets/fonts/Hind-SemiBold.ttf')
    });
    this.setState({fontsLoaded: true});
  }

  static navigationOptions = {
    headerStyle: {display: 'none'}
  }

  render() {
    const loading = <Spinner color='#FF5F28' />
    return (
      <View style={styles.containerSuper}>
        <Image style={styles.bg} source={require('../../assets/images/pngs/pattern-bg.png')} />
        <Header />
        <View style={styles.container}>
          {this.state.fontsLoaded ? this.props.children : loading}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerSuper: {
    flex: 1,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C55DB0',
  },
  container: {
    flex: 1,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    position:'absolute',
    width:'150%',
    height:'150%',
    zIndex: -999,
    opacity: 0.2
  }
});
