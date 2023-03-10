import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, Alert, TouchableWithoutFeedback,Keyboard  } from 'react-native';
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";
import Sandbox from "./components/sandbox";

export default function App() {
  const [todos, setTodos] = useState([
    {
      text: "Almanya'da Almanlar yaşıyorsa, Sakarya'da sakarlar mı yaşar?", key:"1"},
    { text: "File çorap aldım. -File niye aldın? Kendine alsaydın ya", key:"2"},
    { text: "Küçük su birikintisine ne denir? -Sucuk", key:"3"},
    
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
    //<Sandbox/>

    
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
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
    </TouchableWithoutFeedback>
    
  );
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    color:"#ccc"

  },
  content:{
    padding:40,
    flex:1,
  },
  list:{
    flex:1,
    marginTop:20,
  }
})
