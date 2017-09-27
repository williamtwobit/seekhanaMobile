import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default class Scroller extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      display: [],
      scroll:['Hello', 'Namaste', 'नमस्ते']
    };
  }

  scroll(index){
    let i;
    time = 200;
    const word = this.state.scroll[index].split('');
    for(let j = 0 ; j <= word.length ; j++){
      setTimeout(() => {
        let set = [...this.state.display, word[j]];
        this.setState({
          display: set
        });
      }, time)
      time += 200
    }
    time += 400
    for(let j = 0 ; j <= word.length ; j++){
      setTimeout(() => {
        let set = [...this.state.display];
        set.pop();
        this.setState({
          display: set
        })
      }, time);
      time += 200
    }
  }


  componentDidMount(){
    this.scroll(0);
    let index = 1
    setInterval(() => {
        if(index >= 3){
          index = 0;
        }
        this.scroll(index);
        index++
    }, 5000);
  }

  render(){
    return(

      <Text style={styles.scroller}>
        {this.state.display}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  scroller:{
    fontFamily: 'Hind-SemiBold',
    color: 'white',
    fontSize: 80,
    flex: .5
  }
})
