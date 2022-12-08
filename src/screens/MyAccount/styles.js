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

    userProfile:{
        width: width * .325,
        height: height * .17,
        borderRadius: width * .18,
        overflow:'hidden',
    },
    profileBox:{
        alignItems:'center',
        marginVertical: height * .03,
    },
    Edit:{
        width: width * .06,
        height: height * .03,
        position:'absolute',
        right:7,
        bottom: height * .015,
        tintColor: COLORS.blue,
    },
    userDetails:{
        alignItems: 'center',
        borderBottomColor:'#ADA4A5',
        borderBottomWidth:1,
        paddingBottom: height * .03,
    },
    userName:{
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 20,
        lineHeight: 30,
        color: COLORS.black2,
    },
    text:{
        fontFamily: 'Poppins Regular 400',
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
    },

    profileIcon:{
        width: width * .08,
        height: height * .04,
        marginRight: width * .03,
        tintColor:COLORS.blue,
    },
   btnContainer:{
    marginTop: height * .02,
    marginBottom: height * .1,
   },
    BtnRow:{
        flexDirection: 'row',
        marginTop: height * .01,
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal: width * .04,
        backgroundColor: COLORS.white,
        height: height * .06,
        // borderWidth: 1,
    },
    row:{
        flexDirection: 'row',
        alignItems:'center',
    },
   
    btnTxt:{
        fontFamily: 'Poppins Medium 500',
        fontSize: 14,
        lineHeight: 18,
        color:'#A7A7A7',
    },
    arrow:{
        fontFamily: 'Poppins Regular 400',
        fontSize: 20,
        lineHeight: 30,
        color: COLORS.black, 
        marginBottom: -2,
    },

})