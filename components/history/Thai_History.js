import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, View } from "react-native";
import { Avatar, Button, Card, Divider, Icon, Text } from "react-native-paper";

export default function Thai_History() {
    const navigation = useNavigation();
    return (
        <ScrollView style={{ paddingVertical: 25, flex: 2 }}>
            <Card>
                <Card.Title
                    title="Steve Garrett"
                    subtitle="5 hours ago | 100k views"
                    left={(props) => <Avatar.Image size={40} source={{ uri: "https://raw.githubusercontent.com/itthichet1410/mobile-project/main/assets/homo-erectus.jpg" }} />}
                    subtitleStyle={{ color: "grey" }}
                />
                <Card.Cover style={{ borderRadius: 0 }} source={{ uri: "https://raw.githubusercontent.com/itthichet1410/mobile-project/main/assets/%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2%E0%B9%82%E0%B8%9A%E0%B8%A3%E0%B8%B2%E0%B8%93.jpg" }} />
                <Card.Title
                    title="สมัยโบราณ(Ancient history) 3,500 ปีก่อนคริสตกาล - ค.ศ. 476"
                    subtitle=" ช่วงเวลาที่มนุษย์รู้จักการตั้งถิ่นฐานถาวร สร้างอารยธรรม วัฒนธรรม อักษรต่างๆ ขึ้นมา "
                    subtitleStyle={{ color: "grey" }}
                />
            </Card>

            <Text style={{ fontSize: 20, marginTop: 5, marginLeft: 10 }}>อาณาจักรโบราณ</Text>
            <ScrollView horizontal={true} style={{ flexDirection: "row", marginTop: 10 }}>
                <View style={{ marginRight: 10, marginLeft: 10 }}>
                    <Image style={{ width: 250, height: 150, borderRadius: 10 }} source={{ uri: "https://raw.githubusercontent.com/itthichet1410/mobile-project/main/assets/%E0%B9%80%E0%B8%A1%E0%B9%82%E0%B8%AA%E0%B9%82%E0%B8%9B%E0%B9%80%E0%B8%95%E0%B9%80%E0%B8%A1%E0%B8%B5%E0%B8%A2.jpg" }} />
                    <View style={{ marginTop: -30, height: 30, width: 250, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, alignItems: "center" }}>
                        <Text style={{ fontSize: 20, color: "white" }}>เมโสโปเตเมีย (Mesopotemia)</Text>
                    </View>
                </View>

                <View style={{ marginRight: 10 }}>
                    <Image style={{ width: 250, height: 150, borderRadius: 10 }} source={{ uri: "https://raw.githubusercontent.com/itthichet1410/mobile-project/main/assets/%E0%B8%AD%E0%B8%B5%E0%B8%A2%E0%B8%B4%E0%B8%9B%E0%B8%95%E0%B9%8C%20(Egypt).jpg " }} />
                    <View style={{ marginTop: -30, height: 30, width: 250, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, alignItems: "center" }}>
                        <Text style={{ fontSize: 20, color: "white" }}>อียิปต์ (Egypt)</Text>
                    </View>
                </View>

                <View style={{ marginRight: 10 }}>
                    <Image style={{ width: 250, height: 150, borderRadius: 10 }} source={{ uri: "https://raw.githubusercontent.com/itthichet1410/mobile-project/main/assets/%E0%B8%81%E0%B8%A3%E0%B8%B5%E0%B8%81%20(Greek).jpg" }} />
                    <View style={{ marginTop: -30, height: 30, width: 250, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, alignItems: "center" }}>
                        <Text style={{ fontSize: 20, color: "white" }}>กรีก (Greek)</Text>
                    </View>
                </View>

                <View style={{ marginRight: 10 }}>
                    <Image style={{ width: 250, height: 150, borderRadius: 10 }} source={{ uri: "https://raw.githubusercontent.com/itthichet1410/mobile-project/main/assets/%E0%B9%82%E0%B8%A3%E0%B8%A1%E0%B8%B1%E0%B8%99%20(Roman).jpg" }} />
                    <View style={{ marginTop: -30, height: 30, width: 250, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, alignItems: "center" }}>
                        <Text style={{ fontSize: 20, color: "white" }}>โรมัน (Roman)</Text>
                    </View>
                </View>

            </ScrollView>


            <Divider style={{ marginVertical: 10 }} />

            {/* สมัยกลาง */}
            <Card>
                <Card.Title
                    title="Steve Garrett"
                    subtitle="5 hours ago | 100k views"
                    left={(props) => <Avatar.Image size={40} source={{ uri: "https://raw.githubusercontent.com/itthichet1410/mobile-project/main/assets/homo-erectus.jpg" }} />}
                    subtitleStyle={{ color: "grey" }}
                />
                <Card.Cover style={{ borderRadius: 0 }} source={{ uri: "https://raw.githubusercontent.com/itthichet1410/mobile-project/main/assets/%E0%B8%A2%E0%B8%B8%E0%B8%84%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87.jpg" }} />
                <Card.Title
                    title="สมัยกลางหรือยุคมืด คริสต์ศตวรรษที่ 4 -15 "
                    subtitle="การกระทำทุกอย่างถูกครอบงำโดยศาสนา ห้ามกระทำนอกเหนือจากคำสอนของศาสนา ไม่เช่นนั้นจะถูกลงโทษอย่างรุนแรง โดยมีรายละเอียดดังนี้"
                    subtitleStyle={{ color: "grey" }}
                />
            </Card>

            <Text style={{ fontSize: 20, marginTop: 5, marginLeft: 10 }}>ยุคกลางแบ่งได้ 3 ช่วง</Text>
            <ScrollView horizontal={true} style={{ flexDirection: "row", marginTop: 10 }}>
                <View style={{ marginRight: 10, marginLeft: 10 }}>
                    <Image style={{ width: 250, height: 150, borderRadius: 10 }} source={{ uri: "https://raw.githubusercontent.com/itthichet1410/mobile-project/main/assets/%E0%B8%A2%E0%B8%B8%E0%B8%84%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%95%E0%B9%89%E0%B8%99.jpg" }} />
                    <View style={{ marginTop: -30, height: 30, width: 250, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, alignItems: "center" }}>
                        <Text style={{ fontSize: 20, color: "white" }}>ยุคกลางตอนต้น(Early Middle Ages) </Text>
                    </View>
                </View>

                <View style={{ marginRight: 10 }}>
                    <Image style={{ width: 250, height: 150, borderRadius: 10 }} source={{ uri: "https://raw.githubusercontent.com/itthichet1410/mobile-project/main/assets/%E0%B8%A2%E0%B8%B8%E0%B8%84%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87.jpg " }} />
                    <View style={{ marginTop: -30, height: 30, width: 250, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, alignItems: "center" }}>
                        <Text style={{ fontSize: 20, color: "white" }}>ยุคกลางรุ่งโรจน์(High Middle Ages)</Text>
                    </View>
                </View>

                <View style={{ marginRight: 10 }}>
                    <Image style={{ width: 250, height: 150, borderRadius: 10 }} source={{ uri: "https://raw.githubusercontent.com/itthichet1410/mobile-project/main/assets/%E0%B8%A2%E0%B8%B8%E0%B8%84%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%A2.jpg" }} />
                    <View style={{ marginTop: -30, height: 30, width: 250, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, alignItems: "center" }}>
                        <Text style={{ fontSize: 20, color: "white" }}>ยุคปลายสมัยกลาง(Late Middle Ages)</Text>
                    </View>
                </View>


            </ScrollView>


            <Divider style={{ marginVertical: 10 }} />

            {/* ยุคสมัยใหม่ */}

            <Card>
                <Card.Title
                    title="Steve Garrett"
                    subtitle="5 hours ago | 100k views"
                    left={(props) => <Avatar.Image size={40} source={{ uri: "https://raw.githubusercontent.com/itthichet1410/mobile-project/main/assets/homo-erectus.jpg" }} />}
                    subtitleStyle={{ color: "grey" }}
                />
                <Card.Cover style={{ borderRadius: 0 }} source={{ uri: "https://raw.githubusercontent.com/itthichet1410/mobile-project/main/assets/%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88.jpg" }} />
                <Card.Title
                    title="สมัยใหม่ ค.ศ. 1453-ค.ศ. 1945 "
                    subtitle="  ผู้คนเริ่มเชื่อว่ามนุษย์สามารถลิขิตชีวิตของตนได้ด้วยการกระทำของตนเอง จึงเริ่มดิ้นรนเพื่อชีวิตที่ดีกว่า และมีการคิดค้นทฤษฎี สิ่งประดิษฐ์ รวมไปถึงศิลปะขึ้นมากมาย ทำให้เข้าสู่สมัยใหม่ในที่สุด "
                    subtitleStyle={{ color: "grey" }}
                />
            </Card>
            <Text style={{ fontSize: 20, marginTop: 5, marginLeft: 10 }}>สมัยใหม่แบ่งได้ 5 ช่วง</Text>
            <ScrollView horizontal={true} style={{ flexDirection: "row", marginTop: 10 }}>
                <View style={{ marginRight: 10, marginLeft: 10 }}>
                    <Image style={{ width: 250, height: 150, borderRadius: 10 }} source={{ uri: "https://raw.githubusercontent.com/itthichet1410/mobile-project/main/assets/%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88_%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9F%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%9F%E0%B8%B9%E0%B8%A8%E0%B8%B4%E0%B8%A5%E0%B8%9B%E0%B8%B0%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3%20(Renaissance).jpg" }} />
                    <View style={{ marginTop: -30, height: 30, width: 250, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, alignItems: "center" }}>
                        <Text style={{ fontSize: 20, color: "white" }}>การฟื้นฟูศิลปะวิทยาการ (Renaissance) </Text>
                    </View>
                </View>

                <View style={{ marginRight: 10 }}>
                    <Image style={{ width: 250, height: 150, borderRadius: 10 }} source={{ uri: "https://raw.githubusercontent.com/itthichet1410/mobile-project/main/assets/%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88_%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%8F%E0%B8%B4%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%99%E0%B8%B2(Reformation).jpg" }} />
                    <View style={{ marginTop: -30, height: 30, width: 250, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, alignItems: "center" }}>
                        <Text style={{ fontSize: 20, color: "white" }}>การปฏิรูปศาสนา </Text>
                    </View>
                </View>

                <View style={{ marginRight: 10 }}>
                    <Image style={{ width: 250, height: 150, borderRadius: 10 }} source={{ uri: "https://raw.githubusercontent.com/itthichet1410/mobile-project/main/assets/%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88_%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%9A_GettyImages-517433014-5c4a211a46e0fb00017be09b.jpg" }} />
                    <View style={{ marginTop: -30, height: 30, width: 250, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, alignItems: "center" }}>
                        <Text style={{ fontSize: 20, color: "white" }}>การค้นพบ(Age of Discovery)</Text>
                    </View>
                </View>

                <View style={{ marginRight: 10 }}>
                    <Image style={{ width: 250, height: 150, borderRadius: 10 }} source={{ uri: "https://raw.githubusercontent.com/itthichet1410/mobile-project/main/assets/%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88_%E0%B8%9B%E0%B8%8E%E0%B8%B4%E0%B8%A7%E0%B8%B1%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2.png " }} />
                    <View style={{ marginTop: -30, height: 30, width: 250, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, alignItems: "center" }}>
                        <Text style={{ fontSize: 20, color: "white" }}>การปฏิวัติวิทยาศาสตร์</Text>
                    </View>
                </View>

                <View style={{ marginRight: 10 }}>
                    <Image style={{ width: 250, height: 150, borderRadius: 10 }} source={{ uri: "https://raw.githubusercontent.com/itthichet1410/mobile-project/main/assets/%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88_%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%8F%E0%B8%B4%E0%B8%A7%E0%B8%B1%E0%B8%95%E0%B8%B4%E0%B8%AD%E0%B8%B8%E0%B8%95%E0%B8%AA%E0%B8%B2%E0%B8%AB%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1.jpg" }} />
                    <View style={{ marginTop: -30, height: 30, width: 250, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, alignItems: "center" }}>
                        <Text style={{ fontSize: 20, color: "white" }}>การปฏิวัติอุตสาหกรรม</Text>
                    </View>
                </View>




                </ScrollView>
                <Divider style={{ marginVertical: 10 }} />
                <Card>
                <Card.Title
                    title="Steve Garrett"
                    subtitle="5 hours ago | 100k views"
                    left={(props) => <Avatar.Image size={40} source={{ uri: "https://raw.githubusercontent.com/itthichet1410/mobile-project/main/assets/homo-erectus.jpg" }} />}
                    subtitleStyle={{ color: "grey" }}
                />
                <Card.Cover style={{ borderRadius: 0 }} source={{ uri: "https://raw.githubusercontent.com/itthichet1410/mobile-project/main/assets/%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2%E0%B9%82%E0%B8%9A%E0%B8%A3%E0%B8%B2%E0%B8%93.jpg" }} />
                <Card.Title
                    title="สมัยปัจจุบันสากลโลกไว้ให้ตรงกับ ค.ศ. 1945 จนถึงปัจจุบันนี้ "
                    subtitle=" โดยเริ่มนับจากการสิ้นสุดของสงครามโลกครั้งที่สอง"
                    subtitleStyle={{ color: "grey" }}
                />
            </Card>

        


            <Divider style={{ marginVertical: 10 }} />

            </ScrollView>
            );
}