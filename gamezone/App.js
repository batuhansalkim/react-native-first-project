import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App(){
  const [name,setName] = useState("Name test ");
  const [age, setAge] = useState("Age test");

  return(
    <View style={styles.container}>
      <Text>Enter name : </Text>
      <TextInput 
        multiline
        keyboardType="numeric"
        style={styles.input} 
        placeholder="e.g. batu slkm"
        onChange={(val)=>setName(val)}
      />
      <Text>Enter age : </Text>
      <TextInput 
        style={styles.input}
        placeholder="e.g. age "
        onChange={(val)=> setAge(val)}
      />

      <Text>name: {name}, age: {age}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center",
  },
  input:{
    borderWidth:1,
    borderColor:"#777",
    padding:8,
    margin:10,
    width:200,
  }
})















