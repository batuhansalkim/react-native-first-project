import React from "react";
import {StyleSheet, Text, View, } from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>Yapılacaklar Listem</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        padding:30,
        height:120,
        paddingTop:38,
        backgroundColor:"black",
        paddingTop:30,
    },
    title:{
        textAlign:"center",
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        paddingTop:30,
    
    }
});














