import React from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, } from "react-native";
import { Alert } from "../../component/Alert";
import { COLORS, dummyData, icons,  } from "../../constants";
import styles from "./styles";



const Coupons = ({ navigation }) => {

    return (
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <View style={styles.brandContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={icons.backArrow} style={styles.backArrow} />
                </TouchableOpacity>
                <Text style={styles.pageTitle}>Coupons</Text>
            </View>
            <View style={styles.couponBox}>
                {dummyData.CouponData.map((item)=>
                <Alert title={item.title} content={item.content}  />
                )}
            </View>
           
        </ScrollView>

    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default Coupons;