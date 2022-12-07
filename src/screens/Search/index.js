import React from "react";
import { View, Text, StatusBar, ScrollView, Image, TouchableOpacity, TextInput } from "react-native";
import { images, icons, COLORS, dummyData } from "../../constants";
import styles from "./styles";

const SearchPage = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <View style={styles.brandContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={icons.backArrow} style={styles.backArrow} resizeMode='contain' />
                </TouchableOpacity>
                <Text style={styles.pageTitle}>Search</Text>
            </View>
            <View style={styles.topBar}>
                <TextInput style={styles.searchBar} placeholder="Search here" placeholderTextColor={'rgba(50, 50, 50, 0.22)'} >
                </TextInput>
                <TouchableOpacity style={styles.searchBtn}>
                    <Image style={styles.search} source={icons.search} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.closeBtn}>
                    <Image style={styles.close} source={icons.close} resizeMode="contain" />
                </TouchableOpacity>
            </View>
            <View style={styles.recentContainer}>
                <Text style={styles.recentTxt}>
                    Recent
                </Text>
                <View>
                    {dummyData.SearchData.map((item)=>(
                    <View style={styles.recentRow}>
                        <View style={styles.textRow}>
                            <Image source={icons.recentHistory} style={styles.recentHistory} />
                            <Text style={styles.searchText}>{item.title}</Text>
                        </View>
                        <TouchableOpacity style={styles.closeBtn1}>
                            <Image style={styles.close} source={icons.close} resizeMode="contain" />
                        </TouchableOpacity>
                    </View>
                    ))}

                </View>
            </View>
        </ScrollView >
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default SearchPage;