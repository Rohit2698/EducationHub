import React, { useState } from 'react';
import { View,Text, StyleSheet } from 'react-native';
import Unorderedlist from 'react-native-unordered-list';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { ScrollView } from 'react-native-gesture-handler';
import { style } from '../Styles';

const GoogleHomePage = () => {
  const [tableHead, setTableHead] = useState([
    "Testing Areas",
    "Number of Questions",
  ]);
  const [tableData, setTableData] = useState([
    ["Logical Reasoning", "10"],
    ["General Aptitude", "10"],
    ["Technical", "15"],
    ["General English", "5"],
    ["Total", "40"],
  ]);
  const [codingRoundHead, setCodingRoundHead] = useState([
    "Section",
    "No. of question",
    "Time limit(in mins)",
  ]);

  const [codingRoundData, setCodingRoundData] = useState(["Coding", "3", "90"]);

  return (
    <ScrollView style={style.container}>
      <Text style={style.title}>About Google</Text>
      <Text style={style.description}>
        Google is the world’s top search engine. This multinational company
        basically includes cloud computing, search, software and online
        advertising technologies. It provides internet related services and
        products.
      </Text>
      <Text style={style.title}>Google Selection Process:</Text>
      <Text style={style.description}>
        In case of job recruitment, selection is the process to choose potential
        working persons for a company or organization. Google Recruitment
        process includes a selection stage when decisions are made as to the
        viability of a particular candidate's job application. It directly
        affects the overall productivity of an organization. A right selection
        may increase the overall performance of a company and a wrong one may lead
        to material and financial loss. A perfect selection process can help to
        pick the most eligible candidates amongst all applicants. The Process of
        selecting candidates focuses on abilities, knowledge, skills, experience
        and various other related factors.
      </Text>
      <Text style={style.types}>
        Stages of selection process to get recruited in Google:
      </Text>
      <Unorderedlist>
        <Text>Written Exam/ Aptitude Test</Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>Coding Test</Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>Client Interview</Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>HR /Technical Interview</Text>
      </Unorderedlist>
      <Text style={style.types}>Written Exam</Text>
      <Text style={style.types}>Academic Criteria</Text>
      <Unorderedlist>
        <Text>Minimum 65 percent in Class X,XII and Graduation</Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>No backlogs at the time of applying.</Text>
      </Unorderedlist>
      <Text style={style.types}>Test Pattern</Text>
      <Text>
        The Amazon written test pattern is sub-divided in the following
        sections:
      </Text>
      <Table style={style.table}>
        <Row data={tableHead} />
        <Rows data={tableData} />
      </Table>
      <Text style={style.types}>Coding Round</Text>
      <Table style={style.table}>
        <Row data={codingRoundHead} />
        <Row data={codingRoundData} />
      </Table>
      <Text style={style.types}>Test Description</Text>
      <Unorderedlist>
        <Text>
          Logical Reasoning section consists of questions from topics such as
          seating arrangement problems, finding the missing numbers puzzle tests
          and theme detection.
        </Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>
          General Aptitude section covers topics such as percentage, A.P & G.P,
          Prime Numbers, Problems on speed and averages.
        </Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>
          Technical section consists of questions from topics such as C, C++,
          Java, Data Structure, and Computer Networks.
        </Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>
          General English section consists of questions from English grammar
          topics like prepositions, antonyms, synonyms, sentence completion and
          reading comprehensions.
        </Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>
          Coding section consists of questions from topics Data Structure, C /
          C++ Language, Algorithms.
        </Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>Overall the level of the paper is moderate to difficult.</Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>
          Only those candidates who clear the written exam will qualify for the
          next round.
        </Text>
      </Unorderedlist>
      <Text style={style.types}>Google Interview Process</Text>
      <Text>
        Google Interview process consists of Client Interview, Technical
        Interview and HR Interview. Following are the details of each phase:
      </Text>
      <Unorderedlist>
        <Text>Client interview</Text>
        <Text>
          The purpose of client round interview is to interact with the new team
          member and know more about the knowledge and interviewee's experience
          and how interviewee can use his/her knowledge in company projects.
        </Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>Technical Interview</Text>
        <Text>
          Questions related to specific technical fields are asked in this
          round. Questions may be based on specific knowledge about the
          company's technical activities; understanding of the technical work
          required to be completed as part of the job applied for or may enquire
          candidates to solve actual technical problems that they would be
          likely to face if employed.
        </Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>HR Interview</Text>
        <Text>
          Final step to select a candidate as an employee is Interview as it
          helps to determine a candidate's personality. Questions can be of wide
          range starting from your introduction, Qualification, Experience,
          Industry specific experience, Courses done, your strengths and
          weaknesses, salary expectations, friends, family etc.
        </Text>
      </Unorderedlist>
    </ScrollView>
  );
};

export default GoogleHomePage;
