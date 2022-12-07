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
    icons:{
        width: width * .18,
        height: height * .093,
        marginBottom: height * .01,
        tintColor: COLORS.blue,
    },
    headRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"center",
        marginHorizontal: width * .03,
        marginVertical: height * .02,
    },
    headText:{
        fontFamily: 'Poppins Regular 400',
        fontSize: 10,
        lineHeight: 14,
        color: COLORS.black,
        textAlign:'center',
    },
    headBtn:{
        alignItems:'center',
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
        fontSize: 10,
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
        width: width * .02,
        height: height * .01,
    },
    
})