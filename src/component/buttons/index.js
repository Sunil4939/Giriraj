import React from "react";
import { TouchableOpacity, Text, View, StyleSheet, Dimensions} from 'react-native';
import {  COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

const Button = ({ text, style, onPress}) => {
    return (
        <View>
            <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            {text && (
                <Text style={styles.buttonTxt}>{text}</Text>
            )}
            </TouchableOpacity>
        </View>
    )
}

export {
    Button,
}

const styles = StyleSheet.create({
    button:{
        height: height * .07,
        backgroundColor: COLORS.blue,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 12,
        margin: width * .03,
    },
    buttonTxt:{
        fontFamily:'Poppins Bold 700',
        color: COLORS.white,
        fontSize: 18,
        lineHeight: 27,
        textAlign:'center',
        marginBottom: -5,
    },
})