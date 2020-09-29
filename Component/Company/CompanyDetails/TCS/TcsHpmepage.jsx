import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Unorderedlist from "react-native-unordered-list";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";
import { ScrollView } from "react-native-gesture-handler";
import { style } from "../Styles";

const TcsHomePage = () => {
  const [tableHead, setTableHead] = useState([
    "Section",
    "Number of Questions",
    "Time Allotted(in mins)",
  ]);
  const [tableData, setTableData] = useState([
    ["English", "10", "10"],
    ["Quantitative", "20", "40"],
    ["Programming Logic", "10", "20"],
    ["Coding", "1", "20"],
  ]);

  return (
    <ScrollView style={style.container}>
      <Text style={style.title}>About TCS</Text>
      <Text style={style.description}>
        Tata Consultancy Services is software services consulting company
        headquartered in Mumbai, India. It is the world’s tenth largest IT
        service provider. The company also provides business solutions and
        outsourcing services.
      </Text>
      <Text style={style.title}>TCS Selection Process</Text>
      <Text style={style.description}>
        In terms of employment opportunities, TCS is the 4th largest employer in
        India .In case of job recruitment, selection is the process to choose
        potential working persons for a company or organization. Recruitment
        process includes a selection stage when decisions are made as to the
        viability of a particular candidate's job application. It directly
        affects the overall productivity of an organization. A right selection
        may increase the overall performance of a company & a wrong one may lead
        to material and financial loss. A perfect selection process can help to
        pick the most eligible candidates amongst all applicants. The Process of
        selecting candidates focuses on abilities, knowledge, skills, experience
        and various other related factors.
      </Text>
      <Text style={style.types}>
        Stages of selection process to get recruited.
      </Text>
      <Unorderedlist>
        <Text>Written Exam</Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>TCS Interview Process</Text>
        <Unorderedlist>
          <Text>Technical Interview</Text>
        </Unorderedlist>
        <Unorderedlist>
          <Text>Personal Interview</Text>
        </Unorderedlist>
      </Unorderedlist>
      <Text style={style.types}>Written Exam</Text>
      <Text style={style.types}>Academic Criteria</Text>
      <Unorderedlist>
        <Text>Minimum 60 percent in Class X,XII and Graduation</Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>No backlogs should be there.</Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>
          A gap in studies for up to 2 years is allowed for valid reasons.
        </Text>
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
      <Text>Test Description</Text>
      <Unorderedlist>
        <Text>
          The total time allotted to the written exam is 90 minutes. There is a
          negative marking of 0.33 in Quantitative Aptitude and Programming
          Language Efficiency section but there is no negative marking in rest
          of the sections.
        </Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>
          Quantitative Aptitude section consists of certain questions marked
          with a star in this section which signifies a higher weightage. This
          also means that they can give you a higher negative marking if
          answered incorrectly. This section comprises of questions on Averages,
          Time and Distance, Functions, Geometry. Time and Work, Mixtures and
          Allegations, Algebra, Percentages, Ratios, and Number System.
        </Text>
      </Unorderedlist>
      <Unorderedlist>
        <Text>
          Programming Language Efficiency contains MCQs which is related to the
          basic programming concepts.
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
          Overall the level of the paper is moderate. Only those candidates who
          clear the written exam will qualify for the next round
        </Text>
      </Unorderedlist>
      <Text style={style.types}>TCS Interview Process</Text>
      <Text>
        Tata Interview Process consists of Technical Interview, Managerial and
        HR Interview. Following are the details of each phase:
      </Text>
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
        <Text>Managerial Interview</Text>
        <Text>
          Managerial Interview is much different from entry-level job
          interviews. Instead of asking you about your skills, the hiring
          manager will address a number of different competencies. This helps
          the hiring manager understand how you'll think and act in tough
          management situations.
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

export default TcsHomePage;
