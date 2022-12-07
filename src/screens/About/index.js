import React, { useState } from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, } from "react-native";
import { COLORS, icons, } from "../../constants";
import styles from "./styles";


const AboutUs = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <View style={styles.brandContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={icons.backArrow} style={styles.backArrow} />
                </TouchableOpacity>
                <Text style={styles.pageTitle}>About us</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>What is your Returns/Exchange policy What is your Returns/Exchange
                     policy What is your Returns/Exchange policy What is your Returns/Exchange 
                     policyWhat is your Returns/Exchange policy What is your Returns/Exchange policy
                      What is your Returns/Exchange policy What is your Returns/Exchange policy What 
                      is your Returns/Exchange policyWhat is your Returns/Exchange policyWhat is your 
                      Returns/Exchange policy What is your Returns/Exchange policy What is your 
                      Returns/Exchange policy What is your Returns/Exchange policyWhat is your 
                      Returns/Exchange policyWhat is your Returns/Exchange policy What is your 
                      Returns/Exchange policy What is your Returns/Exchange policy What is your
                       Returns/Exchange policyWhat is your Returns/Exchange policyWhat is your 
                       Returns/Exchange policy What is your Returns/Exchange policy What is your
                        Returns/Exchange policy What is your Returns/Exchange policyWhat is your 
                        Returns/Exchange policyWhat is your Returns/Exchange policy What is your
                         Returns/Exchange policy What is your Returns/Exchange policy What is your
                          Returns/Exchange policyWhat is your Returns/Exchange policyWhat is your
                           Returns/Exchange policy What is your Returns/Exchange policy What is your
                            Returns/Exchange policy What is your Returns/Exchange policyWhat is your
                             Returns/Exchange policyWhat is your Returns/Exchange policy What is your
                              Returns/Exchange policy What is your Returns/Exchange policy What is your
                           Returns/Exchange policyWhat is your Returns/Exchange policy</Text>
            </View>

        </View>

    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default AboutUs;