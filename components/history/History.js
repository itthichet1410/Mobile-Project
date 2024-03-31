import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ScrollView, Image } from "react-native";
import Checklist from "./Checklist";

export default function History() {
    const navigation = useNavigation();
    return (
        <View>
            <Text style={{ fontSize: 20, marginTop: 5, marginLeft: 10 }}>โบราณสถานตามภูมิภาคต่างๆ</Text>
            <Text style={{ color: "grey", marginLeft: 10 }}>ไปท่องเที่ยวกันเลย</Text>
            <ScrollView horizontal={true} style={{ flexDirection: "row", marginTop: 10 }}>
                <View style={{ marginRight: 10, marginLeft: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Checklist")}>
                        <Image style={{ width: 200, height: 150, borderRadius: 10 }} source={{ uri: "https://raw.githubusercontent.com/itthichet1410/mobile-project/main/assets/%E0%B8%A0%E0%B8%B2%E0%B8%84%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87.jpg" }} />
                    </TouchableOpacity>
                    <View style={{ marginTop: -30, height: 30, width: 200, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, alignItems: "center" }}>
                        <Text style={{ fontSize: 20, color: "white" }}>ภาคกลาง</Text>
                    </View>
                </View>

                <View style={{ marginRight: 10 }}>
                    <Image style={{ width: 200, height: 150, borderRadius: 10 }} source={{ uri: "https://raw.githubusercontent.com/itthichet1410/mobile-project/main/assets/%E0%B8%A0%E0%B8%B2%E0%B8%84%E0%B9%80%E0%B8%AB%E0%B8%99%E0%B8%B7%E0%B8%AD.jpg " }} />
                    <View style={{ marginTop: -30, height: 30, width: 200, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, alignItems: "center" }}>
                        <Text style={{ fontSize: 20, color: "white" }}>ภาคเหนือ</Text>
                    </View>
                </View>

                <View style={{ marginRight: 10 }}>
                    <Image style={{ width: 200, height: 150, borderRadius: 10 }} source={{ uri: "https://raw.githubusercontent.com/itthichet1410/mobile-project/main/assets/%E0%B8%A0%E0%B8%B2%E0%B8%84%E0%B9%83%E0%B8%95%E0%B9%8901.jpeg" }} />
                    <View style={{ marginTop: -30, height: 30, width: 200, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, alignItems: "center" }}>
                        <Text style={{ fontSize: 20, color: "white" }}>ภาคใต้</Text>
                    </View>
                </View>

                <View style={{ marginRight: 10 }}>
                    <Image style={{ width: 200, height: 150, borderRadius: 10 }} source={{ uri: "https://raw.githubusercontent.com/itthichet1410/mobile-project/main/assets/%E0%B8%A0%E0%B8%B2%E0%B8%84%E0%B8%AD%E0%B8%B5%E0%B8%AA%E0%B8%B2%E0%B8%99.jpg" }} />
                    <View style={{ marginTop: -30, height: 30, width: 200, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, alignItems: "center" }}>
                        <Text style={{ fontSize: 20, color: "white" }}>ภาคตัวออกเฉียงเหนือ</Text>
                    </View>
                </View>


                <View style={{ marginRight: 10 }}>
                    <Image style={{ width: 200, height: 150, borderRadius: 10 }} source={{ uri: "https://raw.githubusercontent.com/itthichet1410/mobile-project/main/assets/%E0%B8%A0%E0%B8%B2%E0%B8%84%E0%B8%95%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%95%E0%B8%81.jpg " }} />
                    <View style={{ marginTop: -30, height: 30, width: 200, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, alignItems: "center" }}>
                        <Text style={{ fontSize: 20, color: "white" }}>ภาคตะวันตก</Text>
                    </View>
                </View>

                <View style={{ marginRight: 10 }}>
                    <Image style={{ width: 200, height: 150, borderRadius: 10 }} source={{ uri: "https://raw.githubusercontent.com/itthichet1410/mobile-project/main/assets/%E0%B8%A0%E0%B8%B2%E0%B8%84%E0%B8%95%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%AD%E0%B8%AD%E0%B8%81.jpg " }} />
                    <View style={{ marginTop: -30, height: 30, width: 200, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, alignItems: "center" }}>
                        <Text style={{ fontSize: 20, color: "white" }}>ภาคตะวันออก</Text>
                    </View>
                </View>


            </ScrollView>
        </View>
    );
}
