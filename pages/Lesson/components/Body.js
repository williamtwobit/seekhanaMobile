import React from 'react';
import {StyleSheet,Text, TouchableHighlight} from 'react-native';
import {Body, Spinner} from 'native-base';

import Option from './Option';

export default class CardBody extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const choices = this.props.choices.map(choice => {
      return <Option key={choice.key} text={choice.text} value={choice.key} checkAnswer={(v)=> this.props.checkAnswer(v)}/>
    })
    return(
      <Body style={styles.body}>
        {choices}
      </Body>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 3,
    padding:20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100%',
    width: '100%',
    justifyContent: 'space-around'
  }
})
