import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

import Container from '../static/Container';

import Scroller from './components/scroller';

export default class Landing extends React.Component {
  static navigationOptions = {
    headerStyle: {display: 'none'}
  }

  constructor(props){
    super(props);
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
        <Scroller />
        <View style={styles.container}>
          <Text style={styles.landingCopy}>
            Hindi is the official language of India, and is spoken natively by nearly 200 million people. Despite being the 4th most spoken language on the planet, the free learning tools avaliable for a westerner to pick up basic Hindi are few and far between, so we made our own.
          </Text>
          <Button title="Let's get started!" onPress={() => navigate('LessonCard')} />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    flex: 2,
    alignItems: 'center'
  },
  landingCopy: {
    fontFamily: 'Varela',
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    padding: 10
  },
  button: {
    marginTop:'5%',
    backgroundColor:'#FF5F27'
  }

})
