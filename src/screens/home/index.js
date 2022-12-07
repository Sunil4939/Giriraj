
import React from "react";
import { View, Text, Image, TouchableOpacity, StatusBar, ImageBackground, ScrollView, Dimensions, } from "react-native";
import ClothesCard from "../../component/ClothesCard";
import { images, icons, COLORS, dummyData } from "../../constants";
import styles from "./styles";
import Header from "../../component/Header";
import OnSlide from "../../component/OnSlide";
const { width, height } = Dimensions.get('window')


const HomeScreen = ({ navigation }) => {

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />

                <Header navigation={navigation} HolderName={"My Account"} />

                <View style={styles.head}>
                    <View style={styles.leftBox}>
                        <Text style={styles.headTitle}>DELIVER ALL OVER INDIA</Text>
                        <Text style={styles.txt}>We deliver our products all over India.</Text>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.rightBox}>
                        <Text style={styles.headTitle}>AMAZING VALUE EVERY DAY</Text>
                        <Text style={styles.txt}>Items you love at prices that fit your budget.</Text>
                    </View>
                </View>

                <View style={styles.imgRow}>
                    <ImageBackground source={images.image1} style={styles.image}>
                        <View style={styles.imgTxtContainer}>
                            <Text style={styles.imgBoxTitle}>Best Quality Products</Text>
                            <Text style={styles.imgBoxSubTitle}>build a stronger product</Text>
                        </View>
                    </ImageBackground>
                </View>

                <View>
                    <View style={styles.row}>
                        <View style={styles.categoryBox}></View>
                        <Text style={styles.categoryTxt}>Categories</Text>
                        <View style={[styles.categoryBox, { backgroundColor: COLORS.green }]}></View>
                    </View>
                    <View style={styles.categoryCartRow}>
                        {dummyData.CatergoryData.map((item) =>
                            <View style={styles.categoryCart}>
                                <Image source={item.image} style={styles.cartImage} resizeMode='stretch' />
                                <TouchableOpacity style={styles.cartBtn} onPress={()=>navigation.navigate('SingleProductScreen')}>
                                    <Text style={styles.cartBtnTxt}>Product Name</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                </View>

                <View style={styles.imgRow}>
                    <ImageBackground source={images.image6} style={styles.arrivalsImg}>
                        <Text style={styles.specialTitle}>Our Special Products</Text>
                        <TouchableOpacity style={styles.button}>
                            <Image source={icons.light} style={styles.light} />
                            <Text style={styles.buttonText}>Flameproof Light</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { width: width * .48 }]}>
                            <Image source={icons.equipment} style={styles.light} />
                            <Text style={styles.buttonText}>Flameproof Equipments</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Image source={icons.panel} style={styles.light} />
                            <Text style={styles.buttonText}>Electrical Panels</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { width: width * .2 }]}>
                            <Image source={icons.pole} style={styles.light} />
                            <Text style={styles.buttonText}>Poles</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>

                <View>
                    <View style={styles.row}>
                        <View style={styles.categoryBox}></View>
                        <Text style={styles.categoryTxt}>Our Products</Text>
                        <View style={[styles.categoryBox, { backgroundColor: COLORS.green }]}></View>
                    </View>
                    <ImageBackground source={images.image6} style={styles.arrivalsImg}>
                        <View>
                            <Text style={styles.imgBoxTitle}>Grab The New Collection</Text>
                            <Text style={styles.imgBoxSubTitle}>we deliver best quailty in the market</Text>
                        </View>
                        <TouchableOpacity style={styles.shopNowBtn}>
                            <Text style={styles.shopNowTxt}>Shop Now &#62; </Text>
                        </TouchableOpacity>
                    </ImageBackground>
                    <View style={styles.rowCategory}>
                        <TouchableOpacity style={styles.categoryName}>
                            <Text style={styles.categoryNameTxt}>Catergory Name</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryName}>
                            <Text style={styles.categoryNameTxt}>Catergory Name</Text>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Text style={styles.viewAllTxt}>View All &#62; </Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal={true}>
                        {dummyData.CardCart.map((item) => (
                            <ClothesCard />
                        ))}
                    </ScrollView>
                </View>

                <View>
                    <View style={styles.row}>
                        <View style={styles.categoryBox}></View>
                        <Text style={styles.categoryTxt}>Our Services</Text>
                        <View style={[styles.categoryBox, { backgroundColor: COLORS.green }]}></View>
                    </View>
                    <ImageBackground source={images.image6} style={styles.arrivalsImg}>
                        <View>
                            <Text style={styles.imgBoxTitle}>Grab The New Collection</Text>
                            <Text style={styles.imgBoxSubTitle}>we deliver best quailty in the market</Text>
                        </View>
                        <TouchableOpacity style={styles.shopNowBtn}>
                            <Text style={styles.shopNowTxt}>Shop Now &#62; </Text>
                        </TouchableOpacity>
                    </ImageBackground>
                    <View style={styles.rowCategory}>
                        <TouchableOpacity style={styles.categoryName}>
                            <Text style={styles.categoryNameTxt}>Catergory Name</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryName}>
                            <Text style={styles.categoryNameTxt}>Catergory Name</Text>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Text style={styles.viewAllTxt}>View All &#62; </Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal={true}>
                        {dummyData.CardCart.map((item) => (
                            <ClothesCard />
                        ))}
                    </ScrollView>
                </View>
                <View>
                    <View style={styles.row}>
                        <View style={styles.categoryBox}></View>
                        <Text style={styles.categoryTxt}>Our Services</Text>
                        <View style={[styles.categoryBox, { backgroundColor: COLORS.green }]}></View>
                    </View>
                    <OnSlide />
                </View>
            </View>

        </ScrollView >
    )
}


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default HomeScreen;

