import React from "react";
import { View, StyleSheet, Text, FlatList, SafeAreaView, Button, ImageBackground } from "react-native";
function Options() {
  return (
    <View style={styles.options}>
        <ImageBackground style={styles.image} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTb_162ld4-61H-6tgxvIhUZOyXKTolmrJ6vA&usqp=CAU'}}>
          <Text style={styles.tagLine}>Apti is always important</Text>
        </ImageBackground>
    </View>
  );
}

export default Options;

const styles = StyleSheet.create({
  image:{
    height:250,
    justifyContent:'center',
    borderRadius:20
  },
  tagLine:{
    fontSize:30,
    fontWeight:'bold',
    color:'#fff',
    marginTop:160
  }
});
