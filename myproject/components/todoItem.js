import React from "react";
import { StyleSheet, Text, TouchableOpacity,View } from "react-native";
import {MaterialIcons} from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler }){
    return(
        <TouchableOpacity onPress={()=> pressHandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name="delete" size={18} color="#333"/>
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>

    )
}


const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:"#032f60",
        backgroundColor:"orange",
        borderWidth:2,
        borderStyle:"solid",
        borderRadius:10,
        color:"black",
        flexDirection:"row",
    },
    itemText:{
        marginLeft:10,
    }

})


















