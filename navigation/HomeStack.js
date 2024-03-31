import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Body from '../components/Body';
import Home from '../screens/Home';
import BeHistory from '../components/history/BeHistory';
import AfHistory from '../components/history/AfHistory';
import TypeHistory from '../components/history/TypeHistory';
import Content_Afhistory from '../components/history/Content_Afhistory';
import PokemonTab from './PokemonTab';
import History from '../components/history/History';
import Checklist from '../components/history/Checklist';
import Thai_History from '../components/history/Thai_History';


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
            <Stack.Screen
                name="Content_Afhistory"
                component={Content_Afhistory}
                options={{ title: "ประวัติศาสตร์" }}
            />
            <Stack.Screen
                name="PokemonTab"
                component={PokemonTab}
                options={{ title: "ประวัติศาสตร์" }}
            />
            <Stack.Screen
                name="History"
                component={History}
                options={{ title: "สถานที่น่าไป" }}
            />
            <Stack.Screen
                name="Checklist"
                component={Checklist}
                options={{ title: "สถานที่น่าไป" }}
            />
            <Stack.Screen
                name="Thai_History"
                component={Thai_History}
                options={{ title: "ประวัติศาสตร์ไทย" }}
            />
        </Stack.Navigator>
    );



}
