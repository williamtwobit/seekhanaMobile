import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Spinner, Card} from 'native-base';

import Container from '../static/Container';

import Prompt from './components/Prompt';
import CardBody from './components/Body';
import Feedback from './components/feedback';

import LinkedList from '../../linkedList';

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
let fire = new firebase.initializeApp(config);
// //////// ////

export default class LessonCard extends React.Component{
  constructor(props){
    super(props);
    this.lessonRef = fire.database().ref('lessons/alphabetForBeginners');
    this.state = {
      loading: true,
      prompts: [],
      choices: [],
      card: {
        choices:[],
      },
      answer: null
    };
  };
  static navigationOptions = {
    headerStyle: {display: 'none'}
  };
  swap(arr, i, j){
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  randomizeArray(arr) {
    for( let i = arr.length -1; i>=0; i--){
      let random = Math.floor(Math.random()*i);
      this.swap(arr, i, random);
    };
    return arr;
  };

  checkAnswer(value){
    if(this.state.prompts[this.state.pin].key === value){
      this.setState({
        answer: {
          correct: true
        }
      })
    }
    else{
      const answer = this.state.choices[this.state.prompts[this.state.pin].key];
      this.setState({
        answer: {
          correct: false,
          text: answer
        }
      })
    }
  }


  async componentDidMount(){
    this.lessonRef.on('value', (snap) => {

      const promptsObj = snap.val().prompts;
      let prompts = [];

      for (let k in promptsObj){
        prompts.push(promptsObj[k]);
      };

      this.setState({
        prompts: this.randomizeArray(prompts),
        choices: snap.val().choices,
        length: prompts.length,
      }, () => {
        this.choose(prompts.length);
      });
    });
  };

  choose(length){
    const pIn = Math.ceil(Math.random() * length);
    const answer = {
      text: this.state.choices[this.state.prompts[pIn].key],
      key: this.state.prompts[pIn].key
    };
    const card = {
      prompt: this.state.prompts[pIn].prompt,
      choices: [answer]
    };

    for(let i = 1 ; i <= 3 ; i++){
      let r = Math.ceil(Math.random() * length);
      let choice = {
        text: this.state.choices[this.state.prompts[r].key],
        key: this.state.prompts[r].key
      };
      if(choice.text === card.choices[0].text){
        i--;
        return
      }
      else{
        card.choices.push(choice);
      };
    };

    card.choices = this.randomizeArray(card.choices);

    this.setState({
      card: card,
      loading: false,
      pin: pIn
    });
  }

  clear(){
    this.setState({
      loading: true,
      answer: null
    })
    this.choose(this.state.prompts.length);
  }

  render(){
    console.log(this.state);
    return(
      <Container>
        {this.state.loading && this.state.card?  <Spinner color='#FF5F28' /> : (
          <View style={styles.CardContainer}>
            <Card style={styles.Card} answer={this.state.answer}>
                <Prompt text={this.state.card.prompt} />
                <CardBody choices={this.state.card.choices} checkAnswer={(v) => this.checkAnswer(v)} />
                {this.state.answer ? <Feedback answer={this.state.answer} clear={() => this.clear()}/> : null}
            </Card>
            <Card style={styles.CardBackOne} />
            <Card style={styles.CardBackTwo} />
          </View>
        )}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  Card: {
    height: 400,
    alignSelf: 'center',
    width:'100%',
    flex: 1,
    zIndex: 99,
    flexDirection: 'column'
  },
  CardBackOne: {
    height: 400,
    alignSelf: 'center',
    width:'100%',
    flex:1,
    zIndex: -99,
    transform: [{
      rotate: '2deg'
    }],
    position: 'absolute',
    right: 20,
    backgroundColor: '#f2f2f2ff'
  },
  CardBackTwo: {
    height: 400,
    alignSelf: 'center',
    width:'100%',
    flex:1,
    zIndex: -99,
    transform: [{
      rotate: '-2deg'
    }],
    position: 'absolute',
    right: 20,
    backgroundColor: '#ecececff'
  },
  CardContainer:{
    flexDirection: 'row',
    marginBottom: '10%',
    padding: 20,
    flex:1,
    width:'100%'
  }
})
