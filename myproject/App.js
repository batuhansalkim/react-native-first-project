import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [people,setPeople] = useState([
    { name : "batuhan", id: "1"},
    { name: "tunahan", id: "2" },
    { name: "necla", id: "3" },
    { name: "mustafa", id: "4" },
    { name: "fatih", id: "5" },
    { name: "mami", id: "6" },
    { name: "Beyza", id: "7" },
    { name: "Kardelen", id: "8" },
  ]);

  return (
      <View style={styles.container}>

        <FlatList
        numColumns={2}

        keyExtractor={(item)=>item.id}
        data={people}
        renderItem={({item})=>(
          <Text style={styles.item}>{item.name}</Text>
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
  // item:{
  //   marginTop:24,
  //   padding:30,
  //   backgroundColor:"pink",
  //   fontSize:24
  // }
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
