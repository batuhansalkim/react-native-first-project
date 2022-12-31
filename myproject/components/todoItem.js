import React from "react";
import {StyleSheet, Text, TouchableOpacity } from 'react-native';


export default function TodoItem(item){

    return(
        <TouchableOpacity>
            <Text>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    item:{
        padding:16,
    }
})

























