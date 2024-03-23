import React from 'react';
import {  Text, View } from 'react-native';


export default function Head() {
    return (
        // <View style={{ backgroundColor : "#B2B2B2", shadowColor : "black", shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.8, shadowRadius: 2, elevation : 5}}>

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#708090" }}>

            <Text style={{ fontSize: 35, color:"white" }}>โบราณสถาน</Text>
            
        </View>
    );
}