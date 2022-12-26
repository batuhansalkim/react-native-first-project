import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState("Btuhan Salkim");
  const [person, setPerson] = useState({name: "bilecik", age:2001});

  const clickHandler = () => {
    setName("Tunahan Salkim")
  }
  
  const IsimDegistir = ()=>{
    setName("isim degistirildi");
  }

  return (
    <View style={styles.container}>
      <Text>My Name is {name}</Text>
      <Text></Text>
      <View style={styles.buttonContainer}>
        <Button title="Update" onPress={IsimDegistir} />
      </View>
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
  buttonContainer: {
    marginTop: 20,
  }

});
