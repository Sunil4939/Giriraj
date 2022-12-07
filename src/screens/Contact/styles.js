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
    locationContainer:{
        alignItems:'center',
        marginVertical: height * .02,
    },
    locationBox:{
        width: width * .6,
        height: height * .3,
        alignItems:'center',
        justifyContent:'center',
        elevation:3,
        backgroundColor:COLORS.white,
        borderRadius:7,
    },
    location:{
        width: width * .16,
        height: height * .08,
        marginBottom: height * .03,
        tintColor: COLORS.blue,
    },
    heading:{
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 20,
        lineHeight: 30,
        color: COLORS.black2,
    },
    subHeading:{
        fontFamily: 'Poppins Regular 400',
        fontSize: 12,
        lineHeight: 18,
        color: COLORS.blue,
    },
    boxRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical: height * .02,
        marginHorizontal: width * .03,
    },
    box:{
        width: width * .4,
        height: height * .2,
        alignItems:'center',
        justifyContent:'center',
        elevation:3,
        backgroundColor:COLORS.white,
        borderRadius:5,
    },
    title:{
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 14,
        lineHeight: 24,
        color: COLORS.black2,
    },
    calling:{
        width: width * .1,
        height: height * .05,
        marginBottom: height * .015,
        tintColor: COLORS.blue,
    },
    inputContainer:{
        marginVertical: height * .02,
        marginHorizontal: width * .03,
    },
    inputBox:{
        marginVertical: height * .015,
    },
    labels:{
        fontFamily: 'Poppins Medium 500',
        fontSize: 12,
        lineHeight: 18,
        color: COLORS.black2,
        marginBottom: height * .01,
    },
    input:{
        height: height * .06,
        fontFamily: 'Poppins Regular 400',
        fontSize: 12,
        lineHeight: 18,
        color: COLORS.black2,
        borderWidth:1,
        borderRadius: 5,
        borderColor: 'rgba(33, 151, 212, 0.4)',
        paddingLeft: width * .04,
    },
})