import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: COLORS.white,
    },
    brandContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    brand: {
        width: width * .3,
        height: height * .12,
        marginVertical: height * .05,
    },
    title: {
        fontFamily:'Poppins Bold 700',
        fontSize:20,
        lineHeight:30,
        color: COLORS.black,
        marginLeft: width * .03,
    },
   
    label: {
        fontFamily:'Poppins Regular 400',
        color: "rgba(35, 35, 35, 0.4)",
        fontSize:14,
        lineHeight:24,
        marginLeft: width * .03,
        marginRight: width * .03,
    },
    inputs: {
        flexDirection: 'row',
        width: width * .93,
        height: height * .07,
        borderWidth: 1,
        borderColor: "rgba(35, 35, 35, 0.17)",
        borderRadius: 12,
    },
    
 
    btn: {
        marginTop: height * .1,
        // backgroundColor: "rgba(35, 35, 35, 0.34)",
    },

    text: {
        fontFamily:'Poppins SemiBold 600',
        fontSize:16,
        color: COLORS.black2,
        lineHeight:18,
    },
    resendOtp: {
        fontFamily:'Poppins SemiBold 600',
        fontSize:16,
        color: COLORS.blue,
        lineHeight:18,
    },
   
    textRow: {
        flexDirection: 'row',
        marginLeft: width * .03,
        justifyContent: 'center',
    },
    OtpRow: {
        marginLeft: width * .05,
        marginRight: width * .05,
    },
    OtpinputBox: {
        height: height * .15,
    },

    boxstyle: {
        width: width * .13,
        height: height * .065,
        borderWidth: 1,
        borderBottomWidth:4,
        borderRadius: 7,
        borderColor: COLORS.black,
        fontFamily:'Poppins Bold 700',
        fontSize:16,
        color: COLORS.black,
        backgroundColor: COLORS.white,
        padding:0,
    },
})