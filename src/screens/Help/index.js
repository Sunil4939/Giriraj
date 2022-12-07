import React, { useState } from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, } from "react-native";
import { COLORS, dummyData, icons, } from "../../constants";
import Collapsible from 'react-native-collapsible';
import styles from "./styles";


const Help = ({ navigation }) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleExpanded = () => {
        setCollapsed(!collapsed);
    };
 

    return (
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <View style={styles.brandContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={icons.backArrow} style={styles.backArrow} />
                </TouchableOpacity>
                <Text style={styles.pageTitle}>Help/FAQ</Text>
            </View>
            <View style={styles.headRow}>
                <TouchableOpacity style={styles.headBtn}>
                    <Image source={icons.orderTrack} style={styles.icons} />
                    <Text style={styles.headText}>Orders & Tracking</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.headBtn}>
                    <Image source={icons.account} style={styles.icons} />
                    <Text style={[styles.headText, { fontFamily: 'Poppins SemiBold 600', }]}>My Account</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.headBtn}>
                    <Image source={icons.returnProduct} style={styles.icons} />
                    <Text style={styles.headText}>Returns & Exchanges</Text>
                </TouchableOpacity>
            </View>
           
         <View style={styles.questionContainer}>
         {dummyData.Questions.map((item) =>
                <View style={styles.questionBox}>
                    <TouchableOpacity onPress={toggleExpanded} style={styles.question} >
                        <View style={styles.header}>
                            <Text style={styles.questionTxt}>
                                {item.title}
                            </Text>
                        </View>
                            <Image source={collapsed===false? icons.up :icons.down} style={styles.arrow} />
                    </TouchableOpacity>
                    <Collapsible
                        collapsed={collapsed}
                    >
                        <View style={styles.content}>
                            <Text style={styles.answerTxt}>
                                {item.content}
                            </Text>
                        </View>
                    </Collapsible>
                </View>
            )}
         </View>
        </ScrollView>

    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default Help;