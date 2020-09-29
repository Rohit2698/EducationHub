import React from 'react'
import { View, Text, Image, ImageBackground, StyleSheet, ScrollView, TouchableOpacityComponent, TouchableOpacity } from 'react-native'
import {data} from './topics';

const Topic=({navigation})=>{
    return (
        <View style={style.container}>
                {data.map((item)=>{
                    return (
                        
                        <View key={item.id} style={{flexBasis:'50%',borderRadius:30}}>
                            <TouchableOpacity onPress={()=>navigation.navigate('Topic',item)}>
                                <Image source={{uri:item.topic_img}} style={style.image} alt="image"/>
                            </TouchableOpacity>
                        </View>
                        )
                })}
        </View>
    )
}

export default Topic;
const style=StyleSheet.create({
    container : {
        flexWrap:"wrap",
        flexDirection:"row"
    },
    username:{
        marginTop:100
    },
    image: {
        height: 120,
        width:130,
        borderRadius:20,
        marginLeft:15,
        padding:0,
        margin:10,
        backfaceVisibility:"visible",
        shadowColor:"black"
    }
})