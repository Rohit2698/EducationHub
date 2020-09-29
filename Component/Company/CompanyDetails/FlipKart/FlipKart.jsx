import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { style } from "../Styles";
import Unorderedlist from "react-native-unordered-list";

const FlipKartHomePage = () => {
  return (
    <ScrollView style={style.container}>
      <Text style={style.title}>About Flipkart</Text>
      <Text style={style.description}>
        Flipkart Private Limited is an Indian e-commerce company established in
        2007. It started with a primary focus on online book sales and soon,
        expanded to lifestyle products, electronics, home essentials and
        groceries. Today, Flipkart is the biggest online Indian marketplace
        competing with the world leader Amazon. Since 2010, the company has made
        a number of acquisitions including Letsbuy, Myntra, Jabong, eBay India,
        etc. In addition to its main office in Bengaluru, Flipkart has branch
        offices at Delhi and Mumbai. Apart from India, the firm is registered in
        Singapore. In 2018, the US-based retail chain Walmart acquired majority
        stake in Flipkart. Recently, Flipkart has opened its R&D centre at
        Israel. This is in line with its latest acquisition of Israeli start-up
        Upstream Commerce. The centre is run by talented engineers from across
        the world.
      </Text>
      <Text style={style.title}>Flipkart Test Pattern</Text>
      <Text style={style.description}>
        The exam pattern consists of sections comprising of 55 questions with
        the time limit of 55 minutes. The exam has four sections:
      </Text>
      <Unorderedlist>
        <Text>
          Written Test - This section is of 30 questions with 30 minutes
          duration. It tests your knowledge of Aptitude, Reasoning and, Verbal
          Intellectual.
        </Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text style={style.description}>
          Group Discussion- It tests your knowledge of about certain topic,
          where you will be given 15-20 minutes to talk on the topic.
        </Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>
          Technical Interview- This section is of 10-15 questions with 2o
          minutes duration. It tests your technical and software knowledge.
        </Text>
      </Unorderedlist>
    </ScrollView>
  );
};

export default FlipKartHomePage;
