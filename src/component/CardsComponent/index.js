import React, { useState } from "react";
import { View,  TouchableOpacity, Text, Image, StyleSheet, Dimensions, ImageBackground } from "react-native";
import {  icons, COLORS, dummyData } from "../../constants";
import CheckBox from '@react-native-community/checkbox';
const { width, height } = Dimensions.get('window')


const QuantityCart = ({navigation, onPress}) => {
    const item = dummyData.QuantityCart[0];
    const [cartItem, setCartItem] = useState(1);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const Decrement = () => {
        if(cartItem >= 1){
            setCartItem(cartItem - 1)
        }
    }
    return (

        <View style={styles.cart}>
            <View style={styles.cartHead}>
                <TouchableOpacity>
                    <Image source={item.cartImg} style={styles.cartImage} resizeMode='stretch' />
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        tintColors={{ true: 'black', false: 'white' }}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        style={styles.checkBox}
                    />
                </TouchableOpacity>

                <View>
                    <View style={styles.row1}>
                        <Text style={styles.cartBrand}>{item.productName}</Text>
                        <Text style={styles.price}>{item.price}</Text>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.productName}>{item.Category}</Text>
                        <View style={styles.row1}>
                            <View style={styles.dots}></View>
                            <View style={[styles.dots, { backgroundColor: '#DB195F' }]}></View>
                            <View style={[styles.dots, { backgroundColor: '#C87F6C' }]}></View>
                        </View>
                    </View>
                  
                    <View style={styles.row1}>
                        <Text style={styles.productName}>Quantity</Text>
                        <View style={styles.row2}>
                            <TouchableOpacity onPress={Decrement} style={styles.Btn} >
                                <Text style={styles.BtnTxt}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.counter}>{cartItem}</Text>
                            <TouchableOpacity onPress={()=> setCartItem(cartItem + 1)} style={styles.Btn} >
                                <Text style={styles.BtnTxt}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.cartBtn}  onPress={onPress}>
                <Text style={styles.cartBtnTxt}>Checkout</Text>
            </TouchableOpacity>
        </View>

    )
}

const CategoryCart = ({navigation}) => {
    const item = dummyData.CategoryCart[0];
    return (

        <View style={styles.cart}>
            <View style={styles.cartHead}>
                <TouchableOpacity
                //  onPress={()=> navigation.navigate('Login')}
                >
                    <Image source={item.cartImg} style={styles.cartImage} resizeMode='stretch' />
                </TouchableOpacity>

                <View>
                    <View style={styles.row1}>
                        <Text style={styles.cartBrand}>{item.productName}</Text>
                        <Text style={styles.price}>{item.price}</Text>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.productName}>{item.Category}</Text>
                        <View style={styles.row1}>
                            <View style={styles.dots}></View>
                            <View style={[styles.dots, { backgroundColor: '#DB195F' }]}></View>
                            <View style={[styles.dots, { backgroundColor: '#C87F6C' }]}></View>
                        </View>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.cartBtn} >
                <Text style={styles.cartBtnTxt}>View Product</Text>
            </TouchableOpacity>
        </View>

    )
}

export { 
    QuantityCart,
    CategoryCart,
};


const styles = StyleSheet.create({

    cart: {
        width: width * .45,
        borderWidth: 1,
        borderColor: '#DDDADA',
        borderRadius: 10,
        backgroundColor: '#FBFAFB',
        marginTop: height * .03,
        overflow: 'hidden',
    },
    cartHead: {
        padding: width * .03,
    },
    cartImage: {
        width: width * .39,
        height: height * .15,
        borderRadius:7,
        // margin:0,
        overflow:'hidden',
    },
    star: {
        width: width * .04,
        height: height * .02,

    },
    ratingContainer: {
        height: height * .04,
        position: 'absolute',
        bottom: height * .02,
        right: -2,
        flexDirection: 'row',
        paddingLeft: width * .02,
        paddingRight: width * .02,
        alignItems: 'center',
        backgroundColor: '#E3E3E3',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    ratingTxt: {
        fontFamily: 'Poppins Regular 400',
        fontSize: 10,
        color: COLORS.black2,
        marginBottom: -1,
        textAlign: 'center',
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
        marginTop: height * .005,
        marginBottom: height * .005,
    },
    cartBrand: {
        color: COLORS.black,
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 12,
        marginLeft: -3,
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
    },
    checkBox: {
        position: 'absolute',
        top: height * -.01,
        left: width * -.03,
    },
    row2: {
        width: width * .2,
        height: height * .03,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: height * .005,
        marginBottom: height * .005,
        borderWidth:1,
        borderRadius:5,
    },
    Btn:{
        width: width * .05,
        // height: height * .025,
        backgroundColor: COLORS.black,
        alignItems:'center',
        justifyContent:'center',
    },
    BtnTxt:{
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 12,
        color: COLORS.white,
        // marginBottom: -3,
    },
    counter:{
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 12,
        color: COLORS.black,
    }
})