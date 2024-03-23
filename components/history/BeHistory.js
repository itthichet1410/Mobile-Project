import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, View } from "react-native";
import { Avatar, Button, Card, Divider, Icon, Text } from "react-native-paper";

export default function BeHistory() {
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
                <Card.Cover style={{ borderRadius: 0 }} source={{ uri: "https://raw.githubusercontent.com/itthichet1410/mobile-project/main/assets/homo-erectus.jpg" }} />
                <Card.Title
                    title="ยุคหินเก่า (Paleolithic) 100,000-8,000 ปีก่อนคริสต์ศักราช"
                    subtitle="  ยุคหินเก่าคือยุคแรกที่มีหลักฐานทางประวัติศาสตร์ว่ามนุษย์ประดิษฐ์เครื่องไม่เครื่องมือต่างๆใช้ โดยการนำหินมาตีให้เป็นรูปร่างต่างๆ และกะเทาะให้คมสำหรับใช้เป็นอาวุธป้องกันตัวหรือฆ่าสัตว์เพื่อนำมาเป็นอาหาร"
                    subtitleStyle={{ color: "grey" }}
                />
            </Card>

            <Divider style={{ marginVertical: 10 }} />

            
                <Card>
                    <Card.Title
                        title="Steve Garrett"
                        subtitle="5 hours ago | 100k views"
                        left={(props) => <Avatar.Image size={40} source={{ uri: "https://raw.githubusercontent.com/itthichet1410/mobile-project/main/assets/homo-erectus.jpg" }} />}
                        subtitleStyle={{ color: "grey" }}
                    />
                    <Card.Cover style={{ borderRadius: 0 }} source={{ uri: "https://raw.githubusercontent.com/itthichet1410/mobile-project/main/assets/neolithic-farmers-2.jpg" }} />
                    <Card.Title
                        title="ยุคหินกลาง 10,000 - 6,000 ปีก่อนคริสต์ศักราช "
                        subtitle="เทคโนโลยีการผลิตเครื่องมือหินก็ได้พัฒนาขึ้นมา มีการคัดเลือกประเภทของหินที่จะนำมาประดิษฐ์เป็นเครื่องมือ และพัฒนาเทคนิคการกะเทาะให้ดียิ่งขึ้น สามารถกะเทาะหินให้มีรูปร่างเหมาะสมแก่การใช้งาน มีความละเอียด และขนาดที่เล็กลง"
                        subtitleStyle={{ color: "grey" }}
                    />
                </Card>

                <Divider style={{ marginVertical: 10 }} />


                
                    <Card>
                        <Card.Title
                            title="Steve Garrett"
                            subtitle="5 hours ago | 100k views"
                            left={(props) => <Avatar.Image size={40} source={{ uri: "https://raw.githubusercontent.com/itthichet1410/mobile-project/main/assets/homo-erectus.jpg" }} />}
                            subtitleStyle={{ color: "grey" }}
                        />
                        <Card.Cover style={{ borderRadius: 0 }} source={{ uri: "https://raw.githubusercontent.com/itthichet1410/mobile-project/main/assets/Neolithic_Community-Illustration.jpg" }} />
                        <Card.Title
                            title="ยุคหินใหม่ 6,000 - 4,000 ปีก่อนคริสต์ศักราช"
                            subtitle=" มีการนำเครื่องมือหินมาขัดให้ผิวเรียบ เพื่อให้เกิดมีความแข็งแรงมากขึ้น และสะดวกต่อการใช้งานในการตัดต้นไม้ และทำเกษตรกรรมให้ดียิ่งขึ้น เรียกว่า “เครื่องมือหินขัด” "
                            subtitleStyle={{ color: "grey" }}
                        />
                    </Card>

                    <Divider style={{ marginVertical: 10 }} />


                </ScrollView>
                );
}