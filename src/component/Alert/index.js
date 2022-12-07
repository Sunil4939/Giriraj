import React from "react";
import { TouchableOpacity, Text, View, StyleSheet, Dimensions, Image} from 'react-native';
import {  COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

const Alert = ( {image, title, content, onPress} ) => {
    return (
        <TouchableOpacity style={styles.alert} onPress={onPress}>
            <Image style={styles.alertImage} source={ image ? image : '' } />
            <View>
                <Text style={styles.alertTitle}>{title}</Text>
                <Text style={styles.alertContent}>{content}</Text>
            </View>
        </TouchableOpacity>
    )
}

export {
    Alert,
}

const styles = StyleSheet.create({
    alert:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:'#C8C8C8',
        borderRadius:7,
        paddingVertical: height * .01,
        paddingHorizontal: width * .02,
        marginTop: height * .01,
        alignItems:'center',
        elevation:1,
        backgroundColor: COLORS.white
    },
    alertImage:{
        width: width * .16,
        height: height * .08,
        borderRadius: 50,
        backgroundColor: 'rgba(33, 151, 212, 0.45)',
        marginRight: width * .03,
    },
    alertTitle:{
        fontFamily: 'Poppins Medium 500',
        fontSize: 12,
        lineHeight: 16,
        color: '#353638',
    },
    alertContent:{
        fontFamily: 'Poppins Regular 400',
        fontSize: 12,
        lineHeight: 16,
        color: '#353638',
    },
})