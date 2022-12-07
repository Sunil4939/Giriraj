import React, {  useState } from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView,  } from "react-native";
import { CategoryCart } from "../../component/CardsComponent";
import { COLORS, dummyData, icons, } from "../../constants";
import styles from "./styles";
import { BottomSheet } from "react-native-btr";
import { RadioButton } from 'react-native-paper';

const CategoryPage = ({ navigation }) => {
    const [sortChecked, setSortChecked] = useState('first');

    const sort = [
        { label: 'New arrival', value: 'first' },
        { label: 'Recommended', value: 'second' },
    ]

    const [sortSheet, setSortSheet] = useState(false);

    function toggle(name) {
        if (name == 'genderSheet') {
            setGenderSheet((visible) => !visible);
        } else if (name == 'sortSheet') {
            setSortSheet((visible) => !visible);
        }
    }

    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
                    <View style={styles.brandContainer}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={icons.backArrow} style={styles.backArrow} />
                        </TouchableOpacity>
                        <Text style={styles.pageTitle}>Category Name</Text>
                    </View>
                    <View style={styles.header}>
                        <View style={styles.header1}>
                            <TouchableOpacity style={styles.btn} onPress={() => toggle('sortSheet')}>
                                <Image source={icons.sort} style={styles.sort} resizeMode="contain" />
                                <Text style={styles.btnTxt}>Sort</Text>
                            </TouchableOpacity>
                            <BottomSheet
                                visible={sortSheet}
                                onBackButtonPress={() => toggle('sortSheet')}
                                onBackdropPress={() => toggle('sortSheet')}
                            >
                                <View style={styles.bottomSheet}>
                                    <View style={styles.bottomSheetTitleRow}>
                                        <Image source={icons.sort} style={styles.sort} resizeMode="contain" />
                                        <Text style={styles.bottomSheetTitle}>Sort by</Text>
                                    </View>
                                    {sort.map((radio) => (
                                        <TouchableOpacity style={styles.radioBtnRow} onPress={() => setSortChecked(radio.value)}>
                                            <RadioButton
                                                value="first"
                                                color={COLORS.blue}
                                                status={sortChecked === radio.value ? 'checked' : 'unchecked'}
                                                onPress={() => setSortChecked(radio.value)}
                                            />
                                            <Text style={styles.radioLabelTxt}>{radio.label}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>

                            </BottomSheet>
                            <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('FilterScreen')}>
                                <Image source={icons.filter} style={styles.filter} resizeMode="contain" />
                                <Text style={styles.btnTxt}>Filters</Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={styles.cardContainer}>
                        {dummyData.CategoryCart.map(() => (
                            <CategoryCart navigation={navigation} />
                        ))}
                        {dummyData.CategoryCart.map(() => (
                            <CategoryCart navigation={navigation} />
                        ))}
                    </View>
                </View>

            </ScrollView>


        </>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default CategoryPage;