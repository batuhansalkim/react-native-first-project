import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <View style={styles.container}>
      <Text>Enter Name : {name}</Text>
      

      <TextInput
      
      style={styles.input}
      placeholder="enter your name "
      onChangeText={(val)=> setName(val)}
      />
      <Text>Enter Age : {age}</Text>

      <TextInput
      keyboardType="numeric"
      style={styles.input}
      placeholder="enter your age"
      onChangeText={(batu)=> setAge(batu)}/>  
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
    width:150,
    backgroundColor:"white",
    color:"black",
  }

});
