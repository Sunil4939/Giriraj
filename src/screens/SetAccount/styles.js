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
        // tintColor:'red',
    },
    formContainer: {
        marginLeft: width * .03,
        marginRight: width * .03,
        paddingLeft: width * .03,
        paddingRight: width * .03,
        paddingBottom: height * .02,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#A7A7A7',
        backgroundColor: COLORS.white,
    },
    input: {
        fontFamily: 'Poppins Regular 400',
        fontSize: 14,
        lineHeight: 21,
        color: COLORS.black,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#A7A7A7',
        backgroundColor: COLORS.white,
        paddingLeft: width * .04,
        marginTop: height * .02,
    },
    label: {
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
        marginTop: height * .03,
    },
    inputRow:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    BtnRow:{
        flexDirection: 'row',
        marginTop: height * .03,
        alignItems:'center',
    },
    btn:{
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: '#A7A7A7',
        width: width * .2,
        height: height * .06,
        alignItems:"center",
        justifyContent: 'center',
        marginRight: width * .02,
    },
    btnTxt:{
        fontFamily: 'Poppins Medium 500',
        fontSize: 14,
        lineHeight: 18,
        color:'#A7A7A7',
    },
    text:{
        fontFamily: 'Poppins Regular 400',
        fontSize: 12,
        lineHeight: 18,
        color: '#A7A7A7',
    },
   addBtn:{
        height: height * .07,
        borderRadius:7,
        marginTop: height * .03,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: COLORS.blue,
    },
   addBtnText:{
        fontFamily: 'Poppins SemiBold 600',
        color: COLORS.white,
        fontSize: 16,
        lineHeight: 21,
    },
})