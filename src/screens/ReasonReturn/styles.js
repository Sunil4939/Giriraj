import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    brandContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: height * .03,
        marginBottom: height * .01,
        marginLeft: width * .03,
    },
    backArrow: {
        width: width * .03,
        height: height * .02,
    },
    pageTitle: {
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 16,
        lineHeight: 20,
        color: '#353638',
        marginLeft: width * .03,
    },

    sadMood:{
        width: width * .7,
        height: height * .35,
    },
    imageContainer:{
        alignItems:'center',
        marginTop: height * .04,
        marginHorizontal: width * .04,
    },
    reasonContainer:{
        marginTop: height * .01,
        marginHorizontal: width * .04,  
    },

    title: {
        fontFamily: 'Poppins Medium 500',
        fontSize: 14,
        lineHeight: 21,
        color: COLORS.black,
    },

   
    row1: {
        flexDirection: 'row',
        alignItems: "center",
        marginTop: height * .015,
    },
    label: {
        fontFamily: 'Poppins Regular 400',
        fontSize: 14,
        lineHeight: 18,
        color: '#302F33',
        marginLeft: width * .03,
    },
    checkBox:{
        transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }]
    },
    btnRow:{
        alignItems:'center',
        marginVertical: height * .05,
    },
    bottomBtn:{
        backgroundColor: COLORS.blue,
        height: height * .06,
        width: width * .3,
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 7,
    },
    bottomBtnTxt:{
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.white, 
    },
})