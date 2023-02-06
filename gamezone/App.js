import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [name, setName] = useState("batuhan");
}
return (
  <View style={styles.container}>
    <Text>My name is {name}</Text>
  </View>
)
// export default function App() {
//   const [name, setName] = useState("shaun");
//   const [person, setPerson] = useState({name: "mario", age:40});

//   const clickHandler = () => {
//     setName("batuhan");
//     setPerson({name: "degisti", age: 22})
//   }

//   return (
//     <View style={styles.container}>
//       <Text>My name is {name}</Text>
//       <Text>His name is {person.name} and his age is {person.age}</Text>
//       <View style={styles.buttonContainer}>
//         <Button title="isim degistir" onPress={clickHandler } />
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   buttonContainer: {
//     marginTop: 20,
//   }
// })












