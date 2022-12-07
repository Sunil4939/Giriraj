import React, { useState } from "react";
import { View, Text, StatusBar, ScrollView, Image, TouchableOpacity, ImageBackground, } from "react-native";
import ClothesCard from "../../component/ClothesCard";
import ProductSlider from "../../component/ProductSlider";
import { images, icons, COLORS, dummyData } from "../../constants";
import styles from "./styles";
import Collapsible from 'react-native-collapsible';
import Video from 'react-native-video';
import video from '../../assets/videos/YehDil.mp4';

const SingleProduct = ({ navigation }) => {
    const [collapsed, setCollapsed] = useState(true);
    const [cartItem, setCartItem] = useState(1);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleExpanded = () => {
        setCollapsed(!collapsed);
    };

    // const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const Decrement = () => {
        if (cartItem >= 1) {
            setCartItem(cartItem - 1)
        }
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
                <View style={styles.brandContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={icons.backArrow} style={styles.backArrow} resizeMode='contain' />
                    </TouchableOpacity>
                    <Text style={styles.pageTitle}>Category Name</Text>
                </View>

                <View>
                    <ProductSlider />

                    <View style={styles.productTxtBox}>
                        <View style={styles.productTitileRow}>
                            <Text style={styles.productTitile}>Product Name</Text>
                            <Text style={styles.productPrice}>₹2490</Text>
                        </View>
                        <Text style={styles.productBrandName}>Category</Text>

                        <View style={styles.materialRow}>
                            <Text style={styles.material}>Material -</Text>
                            <Text style={styles.materialName}> Steel</Text>
                        </View>

                        <View style={styles.row4}>
                            <Text style={styles.materialName}>Quantity</Text>
                            <View style={styles.row2}>
                                <TouchableOpacity onPress={Decrement} style={styles.Btn} >
                                    <Text style={styles.BtnTxt}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.counter}>{cartItem}</Text>
                                <TouchableOpacity onPress={() => setCartItem(cartItem + 1)} style={styles.Btn} >
                                    <Text style={styles.BtnTxt}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.colorRow}>
                            <Text style={styles.material}>Buy Product</Text>
                            <View>
                                <View style={styles.productTitileRow}>
                                    <TouchableOpacity style={styles.button}>
                                        <Text style={styles.buttonText}>Quantity</Text>
                                    </TouchableOpacity>
                                    <View style={styles.row3}>
                                        {dummyData.BuyProduct.map((item) => (
                                            <TouchableOpacity style={styles.button1}>
                                                <Text style={styles.colorName}>{item.quantity}</Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </View>
                                <View style={styles.productTitileRow}>
                                    <TouchableOpacity style={styles.button}>
                                        <Text style={styles.buttonText}>Price (Rs.)</Text>
                                    </TouchableOpacity>
                                    <View style={styles.row3}>
                                        {dummyData.BuyProduct.map((item) => (
                                            <TouchableOpacity style={styles.button1}>
                                                <Text style={styles.colorName}>{item.price}</Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>

                                </View>
                            </View>

                        </View>
                        <View style={styles.colorRow}>
                            <Text style={styles.material}>Colour</Text>
                            <View style={styles.productTitileRow}>
                                {dummyData.ProductColor.map((item) => (
                                    <TouchableOpacity style={styles.colorContainer}>
                                        <View style={[styles.colorBox, { backgroundColor: item.color }]}></View>
                                        <Text style={styles.colorName}>{item.colorName}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                <Text style={styles.leftText}>Checkout</Text>
                        <TouchableOpacity style={styles.productBtn} onPress={()=> navigation.navigate('OrderPlaced')}>
                            <Text style={styles.productBtnText}>Add To Card</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.productBtn, { backgroundColor: COLORS.blue }]} onPress={()=> navigation.navigate('PaymentScreen')}>
                            <Text style={[styles.productBtnText, { color: COLORS.white }]}>Buy Now</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={styles.questionContainer}>
                    {dummyData.ProductDetails.map((item) =>
                        <View style={[styles.questionBox, item.title == 'Specification' && { borderBottomWidth: 0 }]}>
                            <TouchableOpacity onPress={toggleExpanded} style={styles.question} >
                                <View style={styles.header}>
                                    <Text style={styles.questionTxt}>
                                        {item.title}
                                    </Text>
                                </View>
                                <Image source={collapsed === false ? icons.up : icons.down} style={styles.arrow} />
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
                <View>
                    <Text style={styles.blueTitle}>Product Video</Text>
                    <ImageBackground source={images.videoImage} style={styles.backgroundVideoContainer} >
                        <Video
                            source={video}
                            paused={!isPlaying}
                            // controls={true}      // make it start   
                            resizeMode="stretch"
                            filterEnabled={true}
                            style={styles.backgroundVideo}
                        // repeat={true}                   
                        />
                        <TouchableOpacity onPress={() => setIsPlaying(!isPlaying)} style={styles.playBtn} >
                            <Image source={icons.play} style={styles.play} />
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                <View>
                    <View style={styles.row}>
                        <View style={styles.aboutBox}></View>
                        <Text style={styles.aboutTxt}>More About Us</Text>
                        <View style={[styles.aboutBox, { backgroundColor: COLORS.green }]}></View>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.aboutImgBox}>
                            <Image source={images.about1} style={styles.aboutImg} resizeMode="contain" ></Image>
                            <Text style={styles.aboutImgTxt}>String Buils Quality</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.aboutImgBox}>
                            <Image source={images.about2} style={styles.aboutImg} resizeMode="contain" ></Image>
                            <Text style={styles.aboutImgTxt}>Premimum Quality Steel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.aboutImgBox}>
                            <Image source={images.about3} style={styles.aboutImg} resizeMode="contain" ></Image>
                            <Text style={styles.aboutImgTxt}>Different Size & Varities</Text>
                        </TouchableOpacity>
                    </View>
                </View>



                <View>
                    <Text style={[styles.blueTitle, { borderTopWidth: 1, borderTopColor: COLORS.blue, }]}>More Products You Might Like</Text>
                    <ScrollView horizontal={true}>
                        {dummyData.CardCart.map((item) => (
                            <ClothesCard />
                        ))}
                    </ScrollView>
                </View>

            </View>

        </ScrollView >
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default SingleProduct;