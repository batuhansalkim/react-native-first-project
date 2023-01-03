import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, Alert  } from 'react-native';
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";

export default function App() {
  const [todos, setTodos] = useState([
    {
      text: "Almanya'da Almanlar yaşıyorsa, Sakarya'da sakarlar mı yaşar?", key:"1"},
    { text: "File çorap aldım. -File niye aldın? Kendine alsaydın ya", key:"2"},
    { text: "Küçük su birikintisine ne denir? -Sucuk", key:"3"},
    {text:"Deneme Sürümü ", key:"4"},
    {text:"Deneme Sürümü2 ", key:"5"},
  ]);
  
  const pressHandler = (key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text)=> {

    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString },
          ...prevTodos
        ]
      });
    }else{
      Alert.alert("Az Kelime Hatası", "3 Kelimeden fazla yazmalısınız.",[{text:"Kapat"}],
      { onPress: ()=> console.log("alert closed")});
    }

    
  }

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
        <FlatList
        data={todos}
        renderItem={({item}) => (
          <TodoItem item={item} pressHandler={pressHandler}/>
        )}
        />
        </View>
      </View>
    </View>
      
    
  );
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#320356",
    color:"#ccc"

  },
  content:{
    padding:40,
    
    
  },
  
})
