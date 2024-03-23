import React from "react";
import { ScrollView, View } from "react-native";
import Head from "../components/Head";
import Body from "../components/Body";
import Section1 from "../components/Image_cover";
import History from "../components/history/History";
import BeHistory from "../components/history/BeHistory";
import AfHistory from "../components/history/AfHistory";
import TypeHistory from "../components/history/TypeHistory";





export default function Home() {
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <Head />
                <Section1 />
                <Body />
                <History/>
                <TypeHistory/>
                <AfHistory/>
                
                

                
                
            </View>
        </ScrollView>

    );
}
