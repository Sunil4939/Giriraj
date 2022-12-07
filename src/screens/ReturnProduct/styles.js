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
    returnBtn:{
        width: width * .5,
        height: height * .06,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'rgba(35, 35, 35, 0.3)',
        borderRadius:7,
        marginHorizontal: width * .22,
        marginVertical: height * .02,
        backgroundColor:COLORS.white,
    },
   return:{
    width: width * .05,
    height: height * .02,
    marginRight: width * .04,
    tintColor: COLORS.blue,
   },
   returnTxt:{
    fontFamily: 'Poppins Regular 400',
    fontSize: 14,
    lineHeight: 18,
    color: COLORS.black2,
   },
   addressContainer:{
    borderWidth:1,
    borderRadius: 7,
    borderColor:'rgba(35, 35, 35, 0.2)',
    paddingVertical: height * .015,
    paddingHorizontal: width * .03,
    marginVertical: height * .01,
    backgroundColor: COLORS.white,

   },
   labels:{
    fontFamily: 'Poppins Medium 500',
    fontSize: 14,
    lineHeight: 21,
    color: COLORS.black2,
   },
   addressBox:{
    width: width * .8,
    marginTop: height * .02,
   },
   address:{
    fontFamily: 'Poppins Regular 400',
    fontSize: 12,
    lineHeight: 18,
    color: COLORS.black2,
    marginTop: height * .01,
   },
   phoneTxt:{
    fontFamily: 'Poppins Medium 500',
    fontSize: 12,
    lineHeight: 18,
    color: COLORS.black2,
    marginRight: width * .04,
    marginTop: height * .01,
   },
   phoneRow:{
    flexDirection:'row',
    alignItems:'center',
   },
   call:{
    width: width * .04,
    height: height * .02,
    bottom: height * -.005,
    marginRight: width * .06,
   },
   mail:{
    width: width * .06,
    height: height * .03,
    bottom: height * -.005,
    marginRight: width * .04,
   },
   row1:{
    width: width * .5,
    flexDirection:'row',
    alignItems:'center',
   },
   orderId:{
    fontFamily: 'Poppins Regular 400',
    fontSize: 12,
    lineHeight: 18,
    color: '#656565',
   },

})