import React from "react";
import { StyleSheet,Text,View } from "react-native";

export default function Sandbox(){
    return(
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:40,
        backgroundColor:"#394746",
    },
    boxOne:{
        color:"white",
    },
    boxTwo: {
        color: "white",
    },
    boxThree: {
        color: "white",
    },
    boxFour: {
        color: "white",
    },
});






