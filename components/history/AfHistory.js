import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { ScrollView, Image } from "react-native";

export default function AfHistory() {
    const navigation = useNavigation();
    return (
        <View>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 20, marginTop: 5, marginLeft: 10 }}>ยุคสมัยทางประวัติศาสตร์</Text>
                <Text style={{ color: "grey", marginLeft: 10 }}>แบ่งเป็น 2 ยุคแบ่งโดยการมีตัวอักษรใช้</Text>
                <ScrollView horizontal={true} style={{ flexDirection: "row", marginTop: 10 }}>
                    <View style={{ marginRight: 10, marginLeft: 10 }}>
                        <TouchableOpacity onPress={() => navigation.navigate("BeHistory")}>
                            <Image style={{ width: 300, height: 150, borderRadius: 10 }} source={{ uri: "https://raw.githubusercontent.com/itthichet1410/mobile-project/main/assets/%E0%B8%81%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%95%E0%B8%B4%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C.png" }} />
                        </TouchableOpacity>

                        <View style={{ marginTop: -30, height: 30, width: 300, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, alignItems: "center" }}>
                            <Text style={{ fontSize: 20, color: "white" }}>ยุคก่อนประวัติศาสตร์</Text>
                        </View>
                    </View>

                    <View style={{ marginRight: 10 }}>
                        <TouchableOpacity onPress={() => navigation.navigate("TypeHistory")}>
                            <Image style={{ width: 300, height: 150, borderRadius: 10 }} source={{ uri: "https://raw.githubusercontent.com/itthichet1410/mobile-project/fd78720b3a2d293f34b988c89079120b7cf83122/assets/%E0%B8%A2%E0%B8%B8%E0%B8%84%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%95%E0%B8%B4%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C.jpg" }} />
                        </TouchableOpacity>

                        <View style={{ marginTop: -30, height: 30, width: 300, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, alignItems: "center" }}>
                            <Text style={{ fontSize: 20, color: "white" }}>ยุคประวัติศาสตร์</Text>
                        </View>
                    </View>

                </ScrollView>

            </View>
            
        </View>

    );
}
