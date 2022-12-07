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
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: height * .02,
        marginBottom: height * .02,
    },
    aboutTxt: {
        color: COLORS.black,
        fontFamily: 'Poppins Regular 400',
        fontSize: 16,
        marginBottom: -5,
        textAlign: 'center',
    },
    aboutImgTxt: {
        position: 'absolute',
        color: ' rgba(255, 255, 255, 0.6)',
        fontFamily: 'Poppins Bold 700',
        fontSize: 10,
        width: width * .2,
        top: height * .13,
        left: width * .03,
        right: width * .03,
        textAlign: 'center',
    },

    aboutBox: {
        width: width * .2,
        height: height * .007,
        backgroundColor: COLORS.blue,
    },
    aboutImg: {
        width: width * .28,
        height: height * .2,
    },
    aboutImgBox: {
        width: width * .28,
        height: height * .2,
    },

    productTitileRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: height * .005,
    },
    productTitile: {
        fontFamily: 'Poppins SemiBold 600',
        color: COLORS.black,
        fontSize: 16,
        lineHeight: 24,
    },
    productTxtBox: {
        marginLeft: width * .03,
        marginRight: width * .03,
        marginTop: height * .018,
    },
    productBrandName: {
        fontFamily: 'Poppins Regular 400',
        color: COLORS.black,
        fontSize: 14,
        lineHeight: 21,
        marginTop: height * .01,
    },
    materialRow: {
        flexDirection: 'row',
        marginTop: height * .01,
    },
    productPrice: {
        fontFamily: 'Poppins SemiBold 600',
        color: COLORS.blue,
        fontSize: 16,
        lineHeight: 24,
        marginRight: width * .03,
    },
    material: {
        fontFamily: 'Poppins SemiBold 600',
        color: COLORS.black,
        fontSize: 12,
        lineHeight: 18,
    },
    materialName: {
        fontFamily: 'Poppins Regular 400',
        color: COLORS.black,
        fontSize: 12,
        lineHeight: 18,
    },
    colorRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: height * .01,
        padding: width * .03,
        borderRadius: 5,
        backgroundColor: COLORS.white,
        elevation: 10,
        // shadowColor:'rgba(0, 0, 0, 0.1)'
    },
    colorBox: {
        width: width * .04,
        height: height * .021,
        borderRadius: 20,
    },
    colorName: {
        fontFamily: 'Poppins Regular 400',
        color: COLORS.black,
        fontSize: 11,
        lineHeight: 12,
        marginTop: 4,
    },
    colorContainer: {
        width: width * .1,
        marginLeft: width * .03,
        alignItems: 'center',
    },

    productBtn: {
        height: height * .07,
        borderColor: COLORS.blue,
        borderWidth: 2,
        borderRadius: 5,
        marginTop: height * .03,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
    },
    productBtnText: {
        fontFamily: 'Poppins SemiBold 600',
        color: COLORS.black,
        fontSize: 16,
        lineHeight: 21,
    },
    blueTitle: {
        fontFamily: 'Poppins SemiBold 600',
        color: COLORS.blue,
        fontSize: 14,
        lineHeight: 18,
        paddingTop: height * .01,
        marginHorizontal: width * .03,
        marginTop: height * .01,
    },
    button: {
        width: width * .15,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: COLORS.black2,
        padding: width * .01,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontFamily: 'Poppins Regular 400',
        color: COLORS.black2,
        fontSize: 8,
        lineHeight: 14,
    },
    row3: {
        flexDirection: 'row',
        width: width * .5,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    button1: {
        width: width * .08,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: COLORS.black2,
        padding: width * .01,
        alignItems: 'center',
        justifyContent: 'center',
    },
    row4: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width * .6,
        marginTop: height * .005,
        marginBottom: height * .005,
    },
    row2: {
        width: width * .35,
        height: height * .03,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: height * .005,
        marginBottom: height * .005,
        borderWidth: 1,
        borderRadius: 5,
    },
    Btn: {
        width: width * .05,
        backgroundColor: COLORS.black,
        alignItems: 'center',
        justifyContent: 'center',
    },
    BtnTxt: {
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 12,
        color: COLORS.white,
    },


    text: {
        fontFamily: 'Poppins Regular 400',
        color: '#656565',
        fontSize: 10,
        lineHeight: 14,
        marginTop: height * .02,
        borderBottomColor: '#D8D8D8',
        borderBottomWidth: 2,
        paddingBottom: height * .02,
    },

    question:{
        paddingBottom: height * .02,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    questionTxt:{
        fontFamily: 'Poppins Regular 400',
        fontSize: 12,
        lineHeight: 18,
        color: COLORS.black,
    },
    answerTxt:{
        fontFamily: 'Poppins Regular 400',
        fontSize: 12,
        lineHeight: 18,
        color: COLORS.black2,
        marginBottom: height * .02,
    },
    questionBox:{
        borderBottomColor:'#ADADAD',
        borderBottomWidth:1,
        marginVertical: height * .01,
    },
    questionContainer:{
        marginHorizontal: width * .03,
        marginTop: height * .04,
    },
    arrow:{
        width: width * .03,
        height: height * .015,
    },
    backgroundVideoContainer:{
        height: height * .25,
        borderRadius: 7,
        marginVertical: height * .01,
        marginHorizontal: width * .03,
        overflow:'hidden',
    },
    backgroundVideo:{
        height: height * .25,
        borderRadius: 7,
    },
   play:{
    width: width * .1,
    height: height * .053,
    // tintColor: COLORS.blue,
},
playBtn:{
    position:'absolute',
    top: height * .1,
    left:width * .45,
   },
})