import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View,  } from 'react-native';
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";

export default function App() {
  const [todos, setTodos] = useState([
    {
      text: "Almanya'da Almanlar yaşıyorsa, Sakarya'da sakarlar mı yaşar?", key:"1"},
    { text: "File çorap aldım. -File niye aldın? Kendine alsaydın ya", key:"2"},
    { text: "Küçük su birikintisine ne denir? -Sucuk", key:"3"},
    { text: "deneme deneme", key:"4"},
    { text: "deneme deneme2", key:"5"},
    { text: "deneme deneme3", key:"6"},
    { text: "deneme deneme3", key:"7"},
    { text: "deneme deneme3", key:"8"},
  ]);
  
  const pressHandler = (key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text)=> {
    setTodos((prevTodos)=> {
      return[
        {text: text, key:Math.random().toString},
        ...prevTodos
      ]
    })
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
