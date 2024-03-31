import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PokemonTab from "./PokemonTab";

import HomeStack from "./HomeStack";
const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="HomeStack">
      <Stack.Screen name="PokemonTab" component={PokemonTab} options={{ title: "Pokemon World" }} />
    </Stack.Navigator>


  );
}
