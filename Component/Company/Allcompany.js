import React, { Component, useEffect } from "react";
import { Text, StyleSheet, View, Image, ScrollView, Button, TouchableOpacity } from "react-native";
import data from "./Companies";


const AllCompany=({navigation})=>{
  return (
    <View style={styles.Alltopics}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.ScrollView}>
        {data.map((item) => {
          return (
              <View key={item.id} style={{marginRight:40}}>
                  <TouchableOpacity onPress={()=>{navigation.navigate('CompanyDetails',{compName: item.username})}}>
                    <Image source={{uri: item.user_avatar}} style={styles.image} alt="image" />
                    <Text>{item.username}</Text>
                  </TouchableOpacity>
              </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Alltopics: {
    marginTop: 30,
  },
  topics: {
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
      height: 50,
      width: 50,
      borderRadius:50
  },
  ScrollView: {
    padding: 5
  }
});

export default AllCompany;
