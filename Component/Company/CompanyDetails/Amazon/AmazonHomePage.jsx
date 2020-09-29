import React, { useState } from 'react';
import { View,Text, StyleSheet } from 'react-native';
import Unorderedlist from 'react-native-unordered-list';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { ScrollView } from 'react-native-gesture-handler';
import { style } from '../Styles';


const AmazonHomePage=()=>{
    const [tableHead,setTableHead]=useState(['Testing Areas','Number of Questions']);
    const [tableData,setTableData]=useState([
        ['Aptitude & Reasoning/Technical','20'],
        ['Programming','2'],
        ['Total','22']
    ]);

    return (
        <ScrollView style={style.container}>
            <Text style={style.title}>About Amazon</Text>  
            <Text style={style.description}>
                Amazon.com Inc. Is an American international electronic commerce company with headquarters in Seattle, Washington, United States. 
                It is the world's largest online retailer. Amazon.com started as an online bookstore, but soon diversified, selling DVDs, VHSs, CDs, 
                video and MP3 downloads/streaming, software, video games, electronics, apparel, furniture, food, toys, and jewellery. The company also 
                produces consumer electronics notably the Amazon Kindle e-book reader and the Kindle Fire tablet computer and is a major provider of cloud computing services.
            </Text>
            <Text style={style.title}>Amazon Selection Process</Text>
            <Text style={style.description}>
                In case of job recruitment, selection is the process to choose potential working persons for a company or organization. 
                Amazon Recruitment process includes a selection stage when decisions are made as to the viability of a particular candidate's 
                job application. It directly affects the overall productivity of an organization. A right selection may increase the overall 
                performance of a company & a wrong one may lead to material and financial loss. 
                A perfect selection process can help to pick the most eligible candidates amongst all applicants. The Process of selecting 
                candidates focuses on abilities, knowledge, skills, experience and various other related factors.
            </Text>
            <Text style={style.types}>
                Stages of selection process to get recruited.
            </Text>
            <Unorderedlist>
                <Text>Written Exam</Text>
            </Unorderedlist>
            <Unorderedlist>
                <Text>Amazon Interview Process</Text>
            </Unorderedlist>
            <Text style={style.types}>Academic Criteria</Text>
            <Unorderedlist>
                <Text>60 percent in Class X,XII and Graduation</Text>
            </Unorderedlist>
            <Unorderedlist>
                <Text>Education gap of not more than one year.</Text>
            </Unorderedlist>
            <Text style={style.types}>Test Pattern</Text>
            <Text>The Amazon written test pattern is sub-divided in the following sections:</Text>
            <Table style={style.table}>
                <Row data={tableHead}/>
                <Rows data={tableData}/>
            </Table>
            <Text>Test Description</Text>
            <Unorderedlist>
                <Text>The total time allotted to the written exam is 90 minutes.</Text>
            </Unorderedlist>
            <Unorderedlist>
                <Text>There is a negative marking in the paper.</Text>
            </Unorderedlist>
            <Unorderedlist>
                <Text>Technical section consists of o/p, complexity, C language and DBMS and some of the questions are output based</Text>
            </Unorderedlist>
            <Unorderedlist>
                <Text>Aptitude section consists of questions from basic permutation combination, probability.</Text>
            </Unorderedlist>
            <Unorderedlist>
                <Text>Programming section includes question based on Algorithmic and Mathematical concepts.</Text>
            </Unorderedlist>
            <Unorderedlist>
                <Text>Overall the level of the paper is easy to moderate. Only those candidates who clear the written exam will qualify for the next round.</Text>
            </Unorderedlist>
            <Text style={style.types}>
                Amazon Interview Process
            </Text>
            <Text>Amazon interview process consists of Technical Interview and HR Interview. Following are the details of each phase:</Text>
            <Unorderedlist>
                <Text>Technical Interview</Text>
                <Text>Questions related to specific technical fields are asked in this round. Questions may be based on specific knowledge about the company's technical activities; understanding of the technical work required to be completed as part of the job applied for or may enquire candidates to solve actual technical problems that they would be likely to face if employed.</Text>
            </Unorderedlist>
            <Unorderedlist>
                <Text>HR Interview</Text>
                <Text>Final step to select a candidate as an employee is Interview as it helps to determine a candidate's personality. Questions can be of wide range starting from your introduction, Qualification, Experience, Industry specific experience, Courses done, your strengths and weaknesses, salary expectations, friends, family etc.</Text>
            </Unorderedlist>
        </ScrollView>
    )
}

export default AmazonHomePage;
