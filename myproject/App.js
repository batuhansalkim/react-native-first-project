import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [people,setPeople] = useState([
    { name : "ankara", id: "1"},
    { name: "izmir", id: "2" },
    { name: "bursa", id: "3" },
    { name: "bilecik", id: "4" },
    { name: "bolu", id: "5" },
    { name: "van", id: "6" },
    { name: "samsun", id: "7" },
    { name: "konya", id: "8" },
  ]);

  // const pressHandler = (id) => {
  //   window.alert(id);
  // }

  const pressHandler = (id)=>{
    setPeople((prevPeople)=> {
      return prevPeople.filter(person=> person.id != id);
    });
  } 

  return (
      <View style={styles.container}>

        <FlatList
        numColumns={2}
        keyExtractor={(item)=>item.id}
        data={people}
        renderItem={({item})=>(
          // <TouchableOpacity onPress={()=> pressHandler(item.id)}>
          //   <Text style={styles.item}>{item.name}</Text>
          // </TouchableOpacity>
          <TouchableOpacity onPress={()=> pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
          
        )}
      
        />
        
      {/*<ScrollView>
        {people.map(item => (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )
        )

        }
        </ScrollView>*/}


      </View>
      
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    paddingTop:40,
    paddingHorizontal:20,
    
  },
  

  item:{
    marginTop:24,
    padding:30,
    fontSize:24,
    backgroundColor:"lightblue",
    marginHorizontal:10,
    marginTop:24,
    width:150,
    height:90,
    alignItems:"center",
    textAlign:"center",
    justifyContent:"center",
  }
  
});
