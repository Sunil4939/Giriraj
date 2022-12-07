import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: COLORS.white,
        // paddingBottom:height * .04,
    },
    brandContainer: {
        flexDirection:'row',
        alignItems: 'center',
        marginTop: height * .03,
        marginBottom: height * .01,
        marginLeft: width * .03,
    },
   backArrow:{
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
    searchBtn:{
        position:'absolute',
        width: width * .1,
        height: height * .06,
        alignItems:'center',
        justifyContent:'center',
        left: width * .06,
    },
    search:{
        width: width * .04,
        height: height * .025,
    },
    closeBtn:{
        position:'absolute',
        width: width * .1,
        height: height * .06,
        right: width * .07,
        alignItems:'center',
        justifyContent:'center',
    },
    close:{
        width: width * .025,
        height: height * .015,
    },
    searchBar:{
        position:'relative',
        width: width * .9,
        height: height * .06,
        borderRadius:20,
        backgroundColor:"rgba(218, 218, 218, 0.3)",
        paddingLeft: width * .12,
        marginLeft: width * .05,
        marginRight: width * .05,
    },
    topBar:{
        marginTop: height * .01,
        marginBottom: height * .01,
    },
    recentTxt:{
        fontFamily:'Poppins Regular 400',
        color:COLORS.black,
        fontSize:16,
        lineHeight:20,
        paddingLeft: width * .03,
        paddingBottom: height * .01,
        borderBottomColor:'#ADA4A5',
        borderBottomWidth:1,
    },
    recentContainer:{
        marginTop: height * .02,
    },
    recentHistory:{
        width: width * .06,
        height: height * .03,
    },
    recentRow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        margin: width * .03,
        marginTop: height * .03,
    },
    textRow:{
        flexDirection:'row',
        alignItems:'center',
    },
    closeBtn1:{
        width: width * .1,
        height: height * .04,
        alignItems:'center',
        justifyContent:'center',
    },
    searchText:{
        fontFamily:'Poppins Regular 400',
        color:'#ADA4A5',
        fontSize:14,
        lineHeight:18,
        marginLeft: width * .07,
    }
})