import React from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, TextInput, Dimensions, ImageBackground } from "react-native";
import { COLORS,  icons, images, } from "../../constants";
import styles from "./styles";



const OrderPlaced = ({ navigation }) => {

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <View style={styles.container}>
                <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
                <View style={styles.brandContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={icons.backArrow} style={styles.backArrow} />
                    </TouchableOpacity>
                    <Text style={styles.pageTitle}>Order Info</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={images.delivery} style={styles.delivery} resizeMode="contain" />
                <Text style={styles.title}>Order Placed</Text>
                <Text style={styles.text}>Your order number 1021 is placed will be delivered by 29 November 2022</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default OrderPlaced;