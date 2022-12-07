import React from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, } from "react-native";
import { Alert } from "../../component/Alert";
import { COLORS, dummyData, icons,  } from "../../constants";
import styles from "./styles";



const Notification = ({ navigation }) => {

    return (
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <View style={styles.brandContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={icons.backArrow} style={styles.backArrow} />
                </TouchableOpacity>
                <Text style={styles.pageTitle}>Notifications</Text>
            </View>
            <View style={styles.notioficationBox}>
                <Text style={styles.heading}>Today</Text>
                {dummyData.NotificationData.map((item)=>
                <Alert title={item.title} content={item.content}  onPress={()=> navigation.navigate('AccountDetails')} />
                )}
            </View>
            <View style={styles.notioficationBox}>
                <Text style={styles.heading}>Yesterday</Text>
                {dummyData.NotificationData.map((item)=>
                <Alert title={item.title} content={item.content} onPress={()=> navigation.navigate('AccountDetails')}  navigation={navigation} />
                )}
            </View>
            <View style={styles.notioficationBox}>
                <Text style={styles.heading}>22 Jan, 2022</Text>
                {dummyData.NotificationData.map((item)=>
                <Alert title={item.title} content={item.content}  onPress={()=> navigation.navigate('AccountDetails')} />
                )}
            </View>
        </ScrollView>

    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default Notification;