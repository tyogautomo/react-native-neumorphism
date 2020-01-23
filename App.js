/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableWithoutFeedback
} from 'react-native';
import { BoxShadow } from 'react-native-shadow';

const App = () => {

  const [bottomShadow, setBottomShadow] = useState({ color: "#000", opacity: 0.1 });
  const [upperShadow, setUpperShadow] = useState({ color: "#fff", opacity: 0.4 });

  const bottomShad = {
    width: 236,
    height: 236,
    color: bottomShadow.color,
    border: 15,
    radius: bottomShadow.opacity,
    opacity: 0.1,
    x: 3,
    y: 3,
    style: { position: 'absolute' }
  }

  const whiteShad = {
    width: 236,
    height: 236,
    color: upperShadow.color,
    border: 15,
    radius: 8,
    opacity: upperShadow.opacity,
    x: -3,
    y: -3,
    style: { position: 'absolute' }
  }

  const onPressBoxIn = () => {
    setBottomShadow({ color: "#fff", opacity: 0.4 })
    setUpperShadow({ color: "#000", opacity: 0.1 })
  }

  const onPressBoxOut = () => {
    setBottomShadow({ color: "#000", opacity: 0.1 })
    setUpperShadow({ color: "#fff", opacity: 0.4 })
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.body}>
        <BoxShadow setting={bottomShad} />
        <BoxShadow setting={whiteShad} />
        <TouchableWithoutFeedback>
          <View style={styles.board}>
            <Text style={styles.text1}>Neumorphism</Text>
            <Text style={styles.text2}>Neumorphism</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#DAE0E8',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  board: {
    width: 250,
    height: 250,
    backgroundColor: '#DAE0E8',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text1: {
    fontFamily: 'Bebas-Regular',
    fontSize: 40,
    color: '#DAE0E8',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
    textShadowColor: 'rgba(0,0,0,0.1)',
    position: 'absolute'
  },
  text2: {
    fontFamily: 'Bebas-Regular',
    fontSize: 40,
    color: '#DAE0E8',
    textShadowOffset: { width: -2, height: -2 },
    textShadowRadius: 3,
    textShadowColor: 'rgba(255,255,255,0.2)',
    position: 'absolute'
  }
})

export default App;
