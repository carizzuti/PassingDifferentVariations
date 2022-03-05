/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  View
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <Box variation="variation1"/>
      <Box variation="variation2"/>
      <Box variation="variation3"/>
      <Box variation="variation4"/>
      <Box variation="noVariation"/>
    </SafeAreaView>
  );
};

const Box = (props) => {
  if (props.variation === 'variation1') {
    return <View style={[style.style1]} />
  } else if (props.variation === 'variation2') {
    return <View style={[style.style2]} />
  } else if (props.variation === 'variation3') {
    return <View style={[style.style3]} />
  } else if (props.variation === 'variation4') {
    return <View style={[style.style4]} />
  } else {
    return <View style={[style.style1]} />
  }
};

const style = {
  style1: {
    backgroundColor: "yellow",
    flex: 1,
    flexDirection: "row",
    padding: 24,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 25,
    marginBottom: 25,
    borderColor: "#90ee90",
    borderWidth: 4
  }, 
  style2: {
    backgroundColor: "yellow",
    flex: 1,
    flexDirection: "row",
    padding: 24,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 25,
    marginBottom: 25,
    borderColor: "#90ee90",
    borderWidth: 4,
    borderStyle: "dashed"
  },
  style3: {
    backgroundColor: "yellow",
    flex: 1,
    flexDirection: "row",
    padding: 24,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 25,
    marginBottom: 25,
    borderColor: "red",
    borderWidth: 10
  },
  style4: {
    backgroundColor: "yellow",
    flex: 1,
    flexDirection: "row",
    padding: 24,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 25,
    marginBottom: 25,
    borderColor: "#90ee90",
    borderWidth: 4,
    borderStyle: "dotted"
  }
}

export default App;
