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

    formContainer: {
        marginHorizontal: width * .03,
        marginVertical: height * .03,
        paddingHorizontal: width * .03,
        paddingVertical: height * .02,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#A7A7A7',
        backgroundColor: COLORS.white,
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    
    label: {
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
    },
  
    text:{
        fontFamily: 'Poppins Medium 500',
        fontSize: 12,
        lineHeight: 18,
        color: COLORS.black2,
        marginTop: height * .01,
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
    orderContent:{
        borderColor:'#ADADAD',
        borderBottomWidth:1,
        borderTopWidth:1,
        paddingVertical: height * .02,
        marginTop: height * .02,
    }
})