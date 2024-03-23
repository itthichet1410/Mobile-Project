

import React from 'react';
import { Image,  View } from 'react-native';

export default function Section1() {
    return (
        <View style={{ padding: 0 }}>
            {/* View รูป */}
            <View style={{ flexDirection: "row" }}>
                <Image style={{ flex: 1, resizeMode: "cover", aspectRatio: 4 / 2 }} source={require("../assets/temple1.jpg")} />
            </View>
            </View>

            );
}