import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Header(props) {
    
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Let's Improve Aptitude Together</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    header:{
        backgroundColor:'#ff7570',
        justifyContent:"center",
        alignItems:"center",
        paddingBottom:10,
        marginTop:30,
        marginVertical:30,
        borderRadius:10
    },
    headerTitle:{
        fontSize:20,    
        textDecorationLine:'underline'
    }
})
