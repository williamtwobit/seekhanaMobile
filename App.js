import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';


// firebase stuff ////
import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCc8pKjxtgv_zZyVZLkyCDRjvCUER-ZHMA",
    authDomain: "seekhana-cc86c.firebaseapp.com",
    databaseURL: "https://seekhana-cc86c.firebaseio.com",
    projectId: "seekhana-cc86c",
    storageBucket: "seekhana-cc86c.appspot.com",
    messagingSenderId: "498023864683"
  };
const fire = firebase.initializeApp(config);
// //////// ////


class Landing extends React.Component {
  constructor(props){
    super(props);
    this.ref = fire.database().ref();
    this.state = {
      items: []
    }
  }

  componentDidMount(){
    this.ref.on('value', (snap) => {
      let items = [];
      snap.forEach(child => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
      });

      this.setState({
        items: items
      });

    })
  }

  addNum(){
    let i = Math.floor(Math.random() * 5);
    const phrases = ['Shooby', 'lee', 'dooooo', 'doodle', 'pi', 'pie'];
    let phrase = phrases[i];
    this.ref.push({title: phrase});
  }


  render() {
    console.log(this.state.items);
    return (
      <View style={styles.container}>
        <Text>Hello!!</Text>
        <Text>{this.state.items.map(item => {
          return <Text key={item._key}>{item.title}</Text>
        })}</Text>
        <Button title="lets add a number" onPress={() => this.addNum()} />
      </View>
    );
  }
}

export default App = StackNavigator({
  Landing: {screen: Landing},
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
