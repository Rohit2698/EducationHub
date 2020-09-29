import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Unorderedlist from "react-native-unordered-list";
import { style } from '../Styles';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";

const DelloiteHomePage = () => {
  const [testPattern, settestPattern] = useState([
    "Deloitte Recruitment process",
    "Number of Questions",
    "Time",
    "Difficulty",
  ]);
  const [logicalAbilityHead, setLogicalAbility] = useState([
    "Deloitte Recruitment process",
    "Number of Questions",
    "Time",
    "Difficulty",
  ]);
  const [quantitativeAbilityHead, setQuantitativeAbility] = useState([
    "Deloitte Aptitude Test Questions",
    "Expected Number of Questions",
    "Difficulty Level",
  ]);
  const [logicalReasoningHead, setlogicalReasoning] = useState([
    "Deloitte Logical Reasoning topics",
    "Expected Number of Questions",
    "Difficulty Level",
  ]);
  const [quantitativeAbilityData, setQuantitativeAbilityData] = useState([
    ["Number System", "5-6", "Medium"],
    ["Averages", "2-3", "Hard"],
    ["Time Speed & Distance", "2", "Medium"],
    ["Percentage & Interest", "4-5", "Hard"],
    ["Permutation & Combination", "2", "Hard"],
    ["Probability", "2", "Medium"],
    ["Logarithms", "2", "Medium"],
    ["Geometry", "2-3", "Medium"],
  ]);
  const [logicalReasoningHeadData, setlogicalReasoningHeadData] = useState([
    ["Objective Reasoning", "3-4", "Medium"],
    ["Pattern recognition", "2-3", "Hard"],
    ["Data sufficiency", "3-4", "Medium"],
    ["Blood Relation", "1-2", "Easy"],
    ["Coding deductive logic", "3-4", "Medium"],
    ["Number series pattern recognition", "3", "Hard"],
    ["Logical word sequence", "3-4", "Easy"],
  ]);
  const [testPatternData, settestPatternData] = useState([
    ["Quantitative Ability", "25", "35 mins", "Medium"],
    ["Logical Reasoning", "25", "35 mins", "High"],
    ["Verbal Ability", "25", "25 mins", "Medium"],
    ["Total", "75", "1.58 Hours", "Medium"],
  ]);

  return (
    <ScrollView style={style.container}>
      <Text style={style.title}>About Deloitte</Text>
      <Text style={style.description}>
        Deloitte is a leading global provider of audit and assurance,
        consulting, financial advisory, risk advisory, tax, and related
        services. With more than 150 years of hard work and commitment to making
        a real difference, our organization has grown in scale and
        diversity—approximately 286,000 people in 150 countries and territories,
        providing these services—yet our shared culture remains the same. Our
        organization serves four out of five Fortune Global 500® companies.
      </Text>
      <Text style={style.title}>Deloitte Test Pattern</Text>
      <Text style={style.description}>
        Deloitte's online Test Pattern consists of 3 sections, comprising of 75
        questions with the time limit of 95 minutes. There is no negative
        marking in any section. The sections in Deloitte test pattern are as
        follows:
      </Text>
      <Table style={style.table}>
        <Row data={testPattern} />
        <Rows data={testPatternData} />
      </Table>
      <Text style={style.title}>Deloitte Quantitative Aptitude Section</Text>
      <Unorderedlist>
        <Text>Total Questions: 25</Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>Time Allotted: 35 minutes</Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>Minimum questions to attempt: 18-20</Text>
      </Unorderedlist>
      <Text style={style.types}>Important Topics</Text>
      <Table style={style.table}>
        <Row data={quantitativeAbilityHead} />
        <Rows data={quantitativeAbilityData} />
      </Table>
      <Text style={style.title}>Deloitte Logical Reasoning</Text>
      <Unorderedlist>
        <Text>Total Questions: 25</Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>Time Allotted: 35 minutes</Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>Expected Cutoff: 70%</Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>Minimum questions to attempt: 18-20</Text>
      </Unorderedlist>
      <Text style={style.types}>Important Topics</Text>
      <Table style={style.table}>
        <Row data={logicalReasoningHead} />
        <Rows data={logicalReasoningHeadData} />
      </Table>
      <Text style={style.title}>Deloitte Computer Programming</Text>
      <Text style={style.description}>
        Computer Programming section consists of basic Programming, Data
        Structure, and OOPS. This section of the Deloitte Aptitude Test is easy
        to crack if you are proficient in your Basic Programming knowledge.
        Given below are the topics to be covered for the test.
      </Text>
      <Unorderedlist>
        <Text>Data Types</Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>Iteration, Recursion, Decision</Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>Procedure, functions and scope</Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>Arrays,Linked Lists, Trees and Graphs</Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>Stacks, Queues</Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>Hash Tables</Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>Searching and Sorting</Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>Polymorphism</Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>Abstraction</Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>Encapsulation</Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>Complexity Theory</Text>
      </Unorderedlist>
    </ScrollView>
  );
};

export default DelloiteHomePage;
