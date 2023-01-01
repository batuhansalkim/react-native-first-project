import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TodoItem({item}){
    return(
        <TouchableOpacity>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>

    )
}


const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:"#032f60",
        backgroundColor:"#07c6aa",
        borderWidth:2,
        borderStyle:"solid",
        borderRadius:10,

    }
})


















