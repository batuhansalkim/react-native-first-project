import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState("Batuhan");
  const [age, setAge] = useState("21");

  return (
    <View style={styles.container}>
      <Text>Enter Name : </Text>
      <TextInput style={styles.input}/>

      <Text>name : {name}, age : {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth:1,
    borderColor:"#777",
    padding:8,
    margin:10,
    width:100,
  }

});
