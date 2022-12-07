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

    row: {
        flexDirection: 'row',
        marginTop: height * .02,
    },
    sideBar: {
        width: width * .4,
        height: height,
        paddingVertical: height * .02,
        borderRadius: 7,
        elevation: 8,
        backgroundColor:COLORS.white
    },
    row1: {
        flexDirection: 'row',
        alignItems: "center",
        marginTop: height * .015,
    },
    rightBox: {
        marginTop: height * .02,
        marginLeft: width * .05,
    },
    label: {
        fontFamily: 'Poppins Regular 400',
        fontSize: 14,
        lineHeight: 18,
        color: '#302F33',
        marginLeft: width * .03,
    },

    btn: {
        backgroundColor: COLORS.white,
        height: height * .06,
        alignItems: "flex-start",
        justifyContent: 'center',
        marginTop: height * .01,
        paddingHorizontal: width * .06,
    },
    btnTxt: {
        fontFamily: 'Poppins Regular 400',
        fontSize: 14,
        lineHeight: 18,
        color: '#302F33',
    },
    checkBox:{
        transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }]
    },
    btnRow:{
        position:'absolute',
        bottom: height * .2,
        flexDirection:'row',
        justifyContent: 'space-between',
        width: width * .56,
        marginHorizontal: width * -.032,
    },
    bottomBtn:{
        backgroundColor: COLORS.blue,
        height: height * .05,
        width: width * .27,
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 5,
        elevation:2,
    },
    bottomBtnTxt:{
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.white, 
    },


})