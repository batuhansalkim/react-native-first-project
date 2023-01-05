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
        flexDirection:"row",
        backgroundColor:"#394746",
        paddingTop:40,
        justifyContent:"space-around",
        alignItems:"flex-end",

    },

    boxOne:{
        flex:3,
        color:"white",
        backgroundColor:"violet",
        padding:10,
        

    },
    boxTwo: {
        flex:3,
        color: "white",
        backgroundColor: "gold",
        padding:20,
        
    },
    boxThree: {
        color: "white",
        flex:5,
        backgroundColor: "coral",
        padding:30,
    },
    boxFour: {
        flex:5,
        color: "white",
        backgroundColor: "skyblue",
        padding:40,
    },
});






