import React from 'react';
import { View, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Content_Afhistory from '../components/history/Content_Afhistory';
const Tab = createMaterialTopTabNavigator();

export default function PokemonTab() {

    return (
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "tomato", tabBarInactiveTintColor: "gray", }} >
        <Tab.Screen
          name="FlashScreen"
          component={FlashScreen}
          options={{
              tabBarLabel: "ประวัติศาสตร์สากล",
            //   tabBarIcon: ({ color, size }) => ( <FontAwesome name="bolt" color={color} size={size} /> ),
              headerShown : false
          }}
        />
        <Tab.Screen
          name="FlameScreen"
          component={FlameScreen}
          options={{
              tabBarLabel: "ประวัติศาสตร์ไทย",
            //   tabBarIcon: ({ color, size }) => ( <FontAwesome name="fire" color={color} size={size} /> ),
            headerShown : false
          }}
        />
    
      </Tab.Navigator>
            
    );
}

function FlashScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
        <Content_Afhistory/>
        </View>
    );
}

function FlameScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
        <Content_Afhistory/>
        </View>
    );
}

function LeafScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Image
                source={{ uri: "https://i.pinimg.com/originals/46/7e/db/467edb818bc862ef7f54dece5df4d762.png" }}
                style={{ width: '100%', height: 500 }}
            />
            <Text style={{ fontSize: 30, paddingTop: 20 }}>Ivysour</Text>
        </View>
    );
}
