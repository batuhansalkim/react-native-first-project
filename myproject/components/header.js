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
        paddingTop:30,
        height:120,
        paddingTop:38,
        backgroundColor:"#dd5308",
        paddingTop: 30,
    },
    title:{
        textAlign:"center",
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        paddingTop:30,
    }
})
















