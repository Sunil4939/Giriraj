import React, { useState } from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, } from "react-native";
import { COLORS, icons, } from "../../constants";
import CheckBox from '@react-native-community/checkbox';
import styles from "./styles";


const FilterPage = ({ navigation }) => {
    

    const ButtonName = [
        { id: 1, name: 'Catergory 1' },
        { id: 2, name: 'Catergory 2' },
        { id: 3, name: 'Catergory 3' },
        { id: 4, name: 'Catergory 4' },
        { id: 5, name: 'Catergory 5' },
    ]

    const [option, setOption] = useState([
        { label: 'Option 1', value: 'first', checked: false, },
        { label: 'Option 2', value: 'second', checked: false, },
        { label: 'Option 3', value: 'third', checked: false, },
        { label: 'Option 4', value: 'first', checked: false, },
        { label: 'Option 5', value: 'second', checked: false, },
        { label: 'Option 6', value: 'third', checked: false, },
    ])

    const checkboxHandler = (value, index) => {
        const newValue = option.map((checkbox, i) => {
            if (i === index) {
                const item = {
                    ...checkbox,
                    checked: !checkbox.checked,
                }
                return item
            }
            return checkbox
        })
        setOption(newValue)
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <View style={styles.brandContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={icons.backArrow} style={styles.backArrow} />
                </TouchableOpacity>
                <Text style={styles.pageTitle}>Filters</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.sideBar}>

                    {ButtonName.map((item) => (
                        <TouchableOpacity style={[styles.btn, item.id == 1 && { backgroundColor: COLORS.blue}]}>
                            <Text style={[styles.btnTxt, item.id == 1 && { color: COLORS.white }]}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}

                </View>
                <View style={styles.rightBox}>

                    {option.map((item, i) => (
                        <View style={styles.row1}>
                            <CheckBox
                                disabled={false}
                                value={item.checked}
                                tintColors={{ true: COLORS.blue, false: COLORS.blue }}
                                onValueChange={(value) => checkboxHandler(value, i)}
                                style={styles.checkBox}
                            />
                            <Text style={styles.label}>{item.label}</Text>
                        </View>
                    ))}
                     <View style={styles.btnRow}>
                        <TouchableOpacity style={[styles.bottomBtn, {backgroundColor: COLORS.white}]}>
                            <Text style={[styles.bottomBtnTxt, {color: COLORS.blue}]}>Reset</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bottomBtn} >
                            <Text style={styles.bottomBtnTxt}>Apply filters</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>

    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default FilterPage;