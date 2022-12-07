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
    delivery:{
        width: width * .8,
        height: height * .4,
    },
    imageContainer:{
        alignItems:'center',
        marginTop: height * .15,
        marginHorizontal: width * .04,
    },
   

    title: {
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 20,
        lineHeight: 30,
        color: COLORS.black,
        textAlign:'center',
    },

    text: {
        fontFamily: 'Poppins Regular 400',
        fontSize: 12,
        lineHeight: 18,
        color: COLORS.black2,
        marginTop: height * .01,
        textAlign:'center',
    },
    
 
  
 
})