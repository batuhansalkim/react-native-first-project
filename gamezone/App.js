import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" }
  ]);
  return (
    <View style={styles.container}>
      {/*header */}
      <View style={styles.content}>
        {/*to form */}
        <View style={styles.list}>
          <FlatList>
            data={todos}
            renderItem={({ item }) => (
              <Text>{item.text}</Text>
            )}
          </FlatList>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    //alignItems:"center",
    //justifyContent:"center"
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
  },
  content: {
    padding: 40,

  }
})





// export default function App(){
//   const [name,setName] = useState("Name test ");
//   const [age, setAge] = useState("Age test");

//   return(
//     <View style={styles.container}>
//       <Text>Enter name : </Text>
//       <TextInput 
//         multiline
//         keyboardType="numeric"
//         style={styles.input} 
//         placeholder="e.g. batu slkm"
//         onChange={(val)=>setName(val)}
//       />
//       <Text>Enter age : </Text>
//       <TextInput 
//         style={styles.input}
//         placeholder="e.g. age "
//         onChange={(val)=> setAge(val)}
//       />

//       <Text>name: {name}, age: {age}</Text>
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     backgroundColor:"#fff",
//     alignItems:"center",
//     justifyContent:"center",
//   },
//   input:{
//     borderWidth:1,
//     borderColor:"#777",
//     padding:8,
//     margin:10,
//     width:200,
//   }
// })















