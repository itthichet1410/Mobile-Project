import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Body from '../components/Body';
import Home from '../screens/Home';
import BeHistory from '../components/history/BeHistory';
import AfHistory from '../components/history/AfHistory';
import TypeHistory from '../components/history/TypeHistory';


const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: "Home", headerShown: false }}
            />
            <Stack.Screen
                name="BeHistory"
                component={BeHistory}
                options={{ title: "ก่อนประวัติศาสตร์" }}
            />
            <Stack.Screen
                name="AfHistory"
                component={AfHistory}
                options={{ title: "ประวัติศาสตร์" }}
            />
            <Stack.Screen
                name="TypeHistory"
                component={TypeHistory}
                options={{ title: "ประเภทประวัติศาสตร์" }}
            />
        </Stack.Navigator>
    );



}
