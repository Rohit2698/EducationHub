import React from "react";
import AllCompany from "./Component/Company/Allcompany";
import Topic from "./Component/Topics/aptiTopics";
import { NavigationContainer, StackActions } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Homepage from "./Component/Homepage/Homepage";
import CompanyDetails from "./Component/Company/CompanyDetails/CompanyDetails";

const Stack=createStackNavigator();
function App() {
  return (
    <>
      <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={Homepage}
                options={{ title: 'My app' }}
              />
              <Stack.Screen
                name="Company"
                component={AllCompany}
                options={{ title: 'My app' }}
              />
              <Stack.Screen
                name="CompanyDetails"
                component={CompanyDetails}
                options={{ title: 'My app' ,compName:'rohit'}}
              />
              <Stack.Screen
                name="Topics"
                component={Topic}
                options={{ title: 'My app' }}
              />
              <Stack.Screen
                name="AboutUs"
                component={Topic}
                options={{ title: 'My app' }}
              />
          </Stack.Navigator>          
      </NavigationContainer>
    </>
  );
}
export default App;