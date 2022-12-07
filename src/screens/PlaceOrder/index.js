import React from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, TextInput, Dimensions, ImageBackground } from "react-native";
import { COLORS, dummyData, icons, images, } from "../../constants";
import styles from "./styles";
const { width, height } = Dimensions.get('window')

const PlaceOrder = ({ navigation }) => {

    return (
        <ScrollView showsVerticalScrollIndicator={false}  style={styles.container}>
            <View>
                <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
                <View style={styles.brandContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={icons.backArrow} style={styles.backArrow} />
                    </TouchableOpacity>
                    <Text style={styles.pageTitle}>Checkout</Text>
                </View>
                
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Order details</Text>
                    <View style={styles.orderContent}>
                        <Text style={styles.text}>2 item selected from your cart</Text>
                        <View style={styles.row}>
                            <Text style={styles.text}>Total MRP</Text>
                            <Text style={styles.text}>₹20000</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.text}>Discount on MRP</Text>
                            <Text style={[styles.text, {color:'#488A07'}]}>-₹200</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.text}>Coupon Discount</Text>
                            <Text style={[styles.text, {color:'#488A07'}]}>-₹200</Text>
                        </View>
                    </View>
                    <View style={[styles.row, {marginTop: height * .02,}]}>
                            <Text style={styles.label}>Total Amount</Text>
                            <Text style={styles.label}>₹16400</Text>
                        </View>
                    <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate('AddressScreen')}>
                        <Text style={styles.addBtnText}>Place Order</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default PlaceOrder;