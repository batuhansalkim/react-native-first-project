import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [people,setPeople] = useState([
    { name : "batuhan", key: "1"},
    { name: "tunahan", key: "2" },
    { name: "necla", key: "3" },
    { name: "mustafa", key: "4" },
    { name: "fatih", key: "5" },
    { name: "mami", key: "6" },
    { name: "ömer", key: "7" },
    { name: "yusuf", key: "8" },
  ]);

  return (

    <View style={styles.container}>
      <FlatList
      
      />

      {/*<ScrollView>

        {
          people.map(item=>(
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          ))
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
    backgroundColor:"pink",
    fontSize:24
  }
  
});
