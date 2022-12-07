import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { images, icons, COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

const Header = ({navigation, HolderName }) => {
    return( 
        <View style={styles.container}>
            <View style={styles.brandContainer}>
                <Image style={styles.brand} source={images.brand} />
            </View>
            <View style={styles.topBar}>
                <TouchableOpacity onPress={()=> navigation.toggleDrawer()} >
                    <Image style={styles.menu} source={icons.menu} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.searchBar} onPress={()=> navigation.navigate('SearchScreen')}>
                    <Image style={styles.search} source={icons.search} />
                    <Text style={styles.searchTxt}>Search here</Text>
                </TouchableOpacity>
                <View style={styles.profileBox}>
                    <TouchableOpacity style={styles.profile}>
                        <Image style={styles.profileImage} source={images.profile} resizeMode="contain" />
                    </TouchableOpacity>
                    {HolderName && (
                        <Text style={styles.text}>{HolderName}</Text>
                    )}
                </View>
            </View>

        </View>

   
    )
}


export default Header;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: COLORS.white,
    },
    brandContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
   
    brand: {
        width: width * .2,
        height: height * .08,
        marginVertical: height * .01,
    },
    menu:{
        width: width * .06,
        height: height * .027,
    },
    search:{
        width: width * .04,
        height: height * .025,
        marginLeft: width * .03,
        marginRight: width * .03,
    
    },
    searchBar:{
        flexDirection:'row',
        width: width * .7,
        height: height * .05,
        borderRadius:18,
        alignItems:'center',
        backgroundColor:"rgba(218, 218, 218, 0.3)",
    },
    searchTxt:{
        color:"rgba(50, 50, 50, 0.22)",
    },
    topBar:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        margin: width * .03,
    },
    text:{
        fontFamily:'Poppins Regular 400',
        color:COLORS.black,
        fontSize:8,
    },
    profile:{
        width: width * .08,
        height: height * .04,
        borderRadius:20
    },
    profileBox:{
        alignItems:'center',
    },
    profileImage:{
        width: width * .08,
        height: height * .04,
    },
})