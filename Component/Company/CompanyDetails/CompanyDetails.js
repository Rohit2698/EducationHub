import React from 'react';
import { View, Text } from 'react-native';
import AmazonHomePage from './Amazon/AmazonHomePage'
import DelloiteHomePage from './Deloitte/Deloitte';
import FlipKartHomePage from './FlipKart/FlipKart';
import GoogleHomePage from './Google/Google';
import NokiaHomePage from './Nokia/Nokia';
import TcsHomePage from './TCS/TcsHpmepage';

const CompanyDetails =({navigation,route})=>{
    console.log(route.params.compName);
    if(route.params.compName==="Amazon")
    {    return (
            <View>
                <AmazonHomePage />
            </View>
        )
    }
    if(route.params.compName==="Flipkart")
    {    return (
            <View>
                <FlipKartHomePage />
            </View>
        )
    }
    if(route.params.compName==="Google")
    {    return (
            <View>
                <GoogleHomePage />
            </View>
        )
    }
    if(route.params.compName==="TCS")
    {    return (
            <View>
                <TcsHomePage />
            </View>
        )
    }
    if(route.params.compName==="Nokia")
    {    return (
            <View>
                <NokiaHomePage />
            </View>
        )
    }
    if(route.params.compName==="Deloitte")
    {    return (
            <View>
                <DelloiteHomePage />
            </View>
        )
    }
}

export default CompanyDetails;