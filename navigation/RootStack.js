import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab";

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    
    <Stack.Navigator initialRouteName="HomeStack">
    </Stack.Navigator>

    
  );
}
