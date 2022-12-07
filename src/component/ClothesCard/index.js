import React from "react";
import { View,  TouchableOpacity, Text, Image, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { icons, COLORS, dummyData } from "../../constants";
const { width, height } = Dimensions.get('window')

const ClothesCard = ({ }) => {
    const item = dummyData.CardCart[0];
    return (

        <View style={styles.cart}>
            <View style={styles.cartTop}>
                <TouchableOpacity
                //  onPress={()=> navigation.navigate('Login')}
                >
                    <Image source={item.cartImg} style={styles.cartImage} resizeMode="stretch" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.cartBtn} >
                    <Image source={icons.buy} style={styles.buy1} />
                    <Text style={styles.cartBtnTxt}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
            <View>
                <View style={styles.row1}>
                    <Text style={styles.cartBrand}>{item.productName}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.productName}>{item.category}</Text>
                    <View style={styles.row1}>
                        <View style={styles.dots}></View>
                        <View style={[styles.dots, { backgroundColor: '#DB195F' }]}></View>
                        <View style={[styles.dots, { backgroundColor: '#C87F6C' }]}></View>
                    </View>
                </View>
            </View>
        </View>

    )
}

export default ClothesCard;
const styles = StyleSheet.create({
   
    cartTop: {
        height: height * .26,
        borderRadius: 10,
        overflow:'hidden',
    },
    cart: {
        width: width * .4,
        marginHorizontal: width * .02,
        marginVertical: height * .03,
    },
    cartImage: {
        width: width * .4,
        height: height * .2,
    },
  
    buy1: {
        width: width * .04,
        height: height * .02,
        tintColor: COLORS.white,
        marginRight: width * .02,
    },
    cartBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: height * .06,
        backgroundColor: COLORS.black,
    },
    cartBtnTxt: {
        color: COLORS.white,
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 12,
        marginBottom: -3,
        textAlign: 'center',
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: width * .01,
    },
    cartBrand: {
        color: COLORS.black,
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 12,
        marginBottom: -3,
    },
    price: {
        color: COLORS.blue,
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 10,
        marginBottom: -3,
    },
    dots: {
        width: width * .02,
        height: height * .01,
        backgroundColor: COLORS.blue,
        borderRadius: 50,
        marginLeft: width * .01,
    },
    productName: {
        color: COLORS.black2,
        fontFamily: 'Poppins Regular 400',
        fontSize: 10,
        marginBottom: -1,
        textAlign: 'center',
    }
})