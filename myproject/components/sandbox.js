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
        flexDirection:"row",
        paddingTop:40,
        backgroundColor:"#394746",
        
        justifyContent:"center",
       
    },
    boxOne:{
        color:"white",
        backgroundColor:"violet",
        padding:10,
        width:50,
        height:40,
        margin:10,

    },
    boxTwo: {
        color: "white",
        color: "white",
        backgroundColor: "gold",
        width: 50,
        height: 40,
        margin:10,
        padding:10,
    },
    boxThree: {
        color: "white",
        color: "white",
        backgroundColor: "coral",
        width: 50,
        height: 40,
        margin:10,
        padding:10,
    },
    boxFour: {
        color: "white",
        color: "white",
        backgroundColor: "skyblue",
        width: 50,
        height: 40,
        margin:10,
        padding:10,
    },
});






