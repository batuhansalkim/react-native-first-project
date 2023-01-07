import React, { useState } from "react";
import {  StyleSheet, Text } from "react-native";


export default function App() {
  return(
    <Text style={styles.title}>Hello</Text>
  )
  
}

const styles = StyleSheet.create({
  title:{
    fontSize:20,
    color:"white",
    backgroundColor:"black",
    textAlign:"center",
    justifyContent:"center",
    paddingTop:40,
  }
})

