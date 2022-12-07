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
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: width * .03,
        marginRight: width * .03,
        marginTop: height * .02,
    },
    header1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sort: {
        width: width * .06,
        height: height * .03,
        tintColor: COLORS.blue,
    },
    filter: {
        width: width * .04,
        height: height * .02,
        tintColor: COLORS.blue,
    },
    btn: {
        backgroundColor: COLORS.white,
        // borderWidth: 1,
        borderRadius: 5,
        borderColor: '#A7A7A7',
        width: width * .2,
        height: height * .06,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-evenly',
        marginRight: width * .05,
        elevation: 5,
    },
    btnTxt: {
        fontFamily: 'Poppins Medium 500',
        fontSize: 14,
        lineHeight: 18,
        color: '#302F33',
    },
    bottomSheet: {
        backgroundColor: COLORS.white,
        paddingHorizontal: width * .03,
        borderTopLeftRadius:  width * .1,
        borderTopRightRadius: width * .1,
        // height: height * .4,
    },
    bottomSheetTitleRow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop: height * .02,
        marginBottom: height * .01,
    },
    bottomSheetTitle: {
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 16,
        // lineHeight: 20,
        color: '#353638',
        textAlign: 'center',
      marginLeft: width * .03,
    },
    radioBtnRow: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        elevation: 4,
        alignItems: 'center',
        marginVertical: height * .01,
        paddingVertical: height * .01,
        borderRadius: 7,
    },
    radioLabelTxt: {
        fontFamily: 'Poppins Regular 400',
        fontSize: 14,
        lineHeight: 18,
        color: '#302F33',
        marginLeft: width * .03,
    },
   
})