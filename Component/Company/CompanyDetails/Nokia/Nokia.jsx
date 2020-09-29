import React, { useState } from 'react';
import { View,Text, StyleSheet } from 'react-native';
import Unorderedlist from 'react-native-unordered-list';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { ScrollView } from 'react-native-gesture-handler';
import { style } from '../Styles';

const NokiaHomePage = () => {
  const [tableHead, setTableHead] = useState([
    "Section",
    "Number of Questions",
  ]);
  const [tableData, setTableData] = useState([
    ["Technical", "50"],
    ["Aptitude", "50"],
    ["Total", "100"],
  ]);
  return (
    <ScrollView style={style.container}>
      <Text style={style.title}>About Nokia</Text>
      <Text style={style.description}>
        Nokia is a multinational company of communications and information
        technology, founded in 1865.It is headquartered in Espoo, Finland. The
        company is a creator of technologies that connect people. Nokia is the
        major distributor of mobile telephony industry and is the largest
        distributor of mobile phones.
      </Text>
      <Text style={style.title}>Nokia Selection Process</Text>
      <Text style={style.description}>
        The company conducts recruitment process every year to select new
        candidates. The selection process of the company consists of 3 rounds.
        These rounds are as follows:
      </Text>
      <Text style={style.types}>
        Stages of selection process to get recruited.
      </Text>
      <Unorderedlist>
        <Text>Written Exam</Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>Technical Interview</Text>
        <Unorderedlist>
          <Text>HR Interview</Text>
        </Unorderedlist>
      </Unorderedlist>
      <Text style={style.types}>Written Exam</Text>
      <Text style={style.types}>Academic Criteria</Text>
      <Unorderedlist>
        <Text>Minimum 65 percent in Class X,XII and Graduation</Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>No backlogs should be there.</Text>
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
      <Text style={style.types}>Test Description</Text>
      <Unorderedlist>
        <Text>
          The total time allotted to the written exam is 120 minutes. There is a
          no negative marking.
        </Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>
          Aptitude section consists of data interpretation and logical reasoning
          questions. The section involves easy solving puzzles, blood relations,
          statements & arguments, etc. This section also consists of questions
          from the topics like algebra, time & work, time, speed & distance,
          arithmetic, percentages, profit & loss, geometry, etc. This section is
          of moderate level.
        </Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>
          Technical section involved questions from core subjects of Computer
          science and electronics. The subjects include C & C++ programming,
          Operating Systems, Computer Networks, etc. This section was tough and
          required thorough preparation. A person whose basics are clear could
          easily excel in this section.
        </Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>
          Coding Test section comprises of coding questions on Real Time
          programming. There is an option to choose to code from the languages –
          C/C++/Java/ Perl and Python.
        </Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>
          Overall the level of the paper is moderate to difficult. Only those
          candidates who clear the written exam will qualify for the next round.
        </Text>
      </Unorderedlist>
    </ScrollView>
  );
};

export default NokiaHomePage;
