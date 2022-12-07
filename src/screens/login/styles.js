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
        marginBottom: height * .03,
    },
    inputContainer: {
        margin: width * .03,
    },
    label: {
        color: "rgba(35, 35, 35, 0.4)",
        fontFamily:'Poppins Regular 400',
        fontSize:14,
        lineHeight:18,
        marginBottom: height * .015,
    },
    inputs: {
        flexDirection:'row',
        width: width * .93,
        height: height * .07,
        borderWidth: 1,
        borderColor: "rgba(35, 35, 35, 0.17)",
        borderRadius: 12,
    },
    dropDownBtn: {
        width: width * .19,
        height: height * .065,
        position: 'absolute',
        backgroundColor: COLORS.white,
        borderRadius: 12,
        color: COLORS.white,
        paddingLeft: -10,
    },
    dropDown: {
        height: height * .28,
        borderRadius: 10,
        textAlign: 'left',
        justifyContent:'center',
    },
    dropDownBtnText: {
        fontFamily:'Poppins Regular 400',
        textAlign: 'left',
        color: COLORS.gray2,
        fontSize:16,
        lineHeight:21,
    },
    dropDownText: {
        fontFamily:'Poppins Regular 400',
        textAlign: 'left',
        fontSize:16,
        lineHeight:21,
    },
    I: {
        width: 1.5,
        height: height * .05,
    },
    arrowDown: {
        width: width * .02,
        height: height * .01,
        marginRight: width * .022,
    },
    dropDownIcons:{
        flexDirection:'row',
        alignItems:'center',
    },
    textInput: {
        width: width * .72,
        marginLeft: width * .21,
        color: COLORS.black,
        borderRadius: 12,
    },
    btn: {
        marginTop: height * .15,
        backgroundColor: COLORS.blue,
    },
    textRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: width * .03,
        marginTop: height * .01,
    },
    text: {
        fontFamily:'Poppins SemiBold 600',
        fontSize:14,
        color: COLORS.black2,
        lineHeight:18,
    },
    terms: {
        fontFamily:'Poppins SemiBold 600',
        fontSize:14,
        color: COLORS.blue,
        lineHeight:18,
    },
    textRow1: {
        flexDirection: 'row',
        marginLeft: width * .03,
        justifyContent: 'center',
        marginTop: height * .01,
    },

})