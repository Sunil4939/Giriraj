import React from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, } from "react-native";
import { COLORS, dummyData, icons, images, } from "../../constants";
import styles from "./styles";

const OrderHistory = ({ navigation }) => {

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <View style={styles.container}>
                <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
                <View style={styles.brandContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={icons.backArrow} style={styles.backArrow} />
                    </TouchableOpacity>
                    <Text style={styles.pageTitle}>Order History</Text>
                </View>
                <View style={styles.historyContainer}>
                    {dummyData.HistoryCart.map((item) =>
                        <TouchableOpacity style={styles.historyCart} onPress={()=> navigation.navigate('ProductReturn')}>
                            <Image source={item.cartImg} style={styles.cartImage} resizeMode='stretch' />
                            <View style={styles.rightBox}>
                                <Text style={styles.productName}>{item.productName}</Text>
                                <Text style={styles.brandName}>{item.brandName}</Text>
                                <Text style={styles.price}>{item.price}</Text>
                                <Text style={styles.text}>Size - {item.size}</Text>
                                <View style={styles.row}>
                                <Text style={styles.text}>Quantity <Text style={styles.quantity}> {item.quantity}</Text></Text>
                                <Text style={styles.text}>Status <Text style={[styles.status, item.id == 2 && {color: COLORS.blue}]}> {item.status}</Text></Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                </View>

            </View>
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default OrderHistory;