import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AllCompany from "../Company/Allcompany";
import Topic from "../Topics/aptiTopics";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../Header/Header";
import Options from "../Main/Main";

const Homepage = ({ navigation }) => {
  return (
    
      <ScrollView>
        <View style={styles.main}>
          <Header />
          <Options />
          <Text style={styles.headings}>Company based Test</Text>
          
          <AllCompany navigation={navigation} />
          <Text style={styles.headings}>Aptitude Topics</Text>
          <Topic navigation={navigation} />
        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 5,
  },
  headings: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
  },
});

export default Homepage;
