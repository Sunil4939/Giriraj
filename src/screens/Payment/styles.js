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

    label: {
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
    },
    paymentContainer:{
        marginTop: height * .05,
    },
    paymentBtn: {
        height: height * .075,
        marginVertical: height * .01,
        marginHorizontal: width * .03,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderRadius: 7,
        borderColor:'rgba(35, 35, 35, 0.5)',
        paddingHorizontal: width * .06,
        justifyContent: 'center',
    },
    paymentBtnTxt: {
        fontFamily: 'Poppins Medium 500',
        fontSize: 14,
        lineHeight: 21,
        color: COLORS.black2,
    },

})