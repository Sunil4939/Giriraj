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
        marginBottom: height * .05,
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


    historyContainer: {
        marginHorizontal: width * .03,
        marginVertical: height * .01,
        backgroundColor: COLORS.white,
    },
    historyCart:{
        borderWidth:1,
        borderRadius: 7,
        borderColor:'rgba(35, 35, 35, 0.2)',
        paddingVertical: height * .015,
        paddingHorizontal: width * .03,
        marginVertical: height * .01,
        backgroundColor: COLORS.white,
        flexDirection:'row',
    },
    cartImage:{
        width: width * .22,
        height: height * .14,
        borderRadius: 7,
        overflow:'hidden',
    },
    rightBox:{
        width: width * .62,
        marginLeft: width * .03,
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    productName:{
        fontFamily: 'Poppins Medium 500',
        fontSize: 14,
        lineHeight: 21,
        color: COLORS.black2,
    },

    price: {
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 16,
        lineHeight: 28,
        color: COLORS.blue,
    },
   
    brandName: {
        fontFamily: 'Poppins Regular 400',
        fontSize: 12,
        lineHeight: 18,
        color: COLORS.black2,
    },
    text:{
        fontFamily: 'Poppins Regular 400',
        fontSize: 10,
        lineHeight: 15,
        color: COLORS.black2,
    },
    quantity:{
        fontFamily: 'Poppins Medium 500',
        fontSize: 10,
        lineHeight: 15,
        color: COLORS.black2,
    },
    status:{
        fontFamily: 'Poppins Medium 500',
        fontSize: 10,
        lineHeight: 15,
        color: '#57A608',
    },
  
})