import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <View style={styles.container}>

      <Text>Enter Your Name :{name} </Text>
      <TextInput
      
        style={styles.input}
        placeholder="enter your name"
        onChangeText={(degisken) => setName(degisken)}
      />

      <Text>Enter Your Age : {age}</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="enter your age "
        onChangeText={(NewAgeDegisken)=>setAge(NewAgeDegisken)}
        
      />
      
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
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 150,
  }

});
