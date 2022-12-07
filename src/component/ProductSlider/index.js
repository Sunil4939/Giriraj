
import React, { useState, useRef, useEffect, } from 'react';
import { View, FlatList, TouchableOpacity, Image, Dimensions, StyleSheet, Text } from 'react-native';
import { dummyData, icons, COLORS, } from '../../constants';
const { width, height } = Dimensions.get('window')

const Slides = ({ navigation, product }) => {

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={product.image} style={styles.image} resizeMode='stretch' />
            </View>
        </View>
    )
}
const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const tick = () => {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};

const ProductSlider = ({ navigation }) => {

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const ref = useRef(null);
    const data = dummyData.ProductData;

    useInterval(() => {
        goNextSlide();
        if(currentSlideIndex == 4){
            ref?.current?.scrollToOffset(0);
            setCurrentSlideIndex(0);
        }
    }, 2000);


    const updateCurrentSlideIndex = (e) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    }
    const goPrevSlide = () => {
        if (currentSlideIndex == 0) {
            return
        }
        const nextSlideIndex = currentSlideIndex - 1;
        if (nextSlideIndex != data.length) {
            const offset = nextSlideIndex * width;
            ref?.current?.scrollToOffset({ offset });
            setCurrentSlideIndex(nextSlideIndex);
        }

    }

    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != data.length) {
            const offset = nextSlideIndex * width;
            ref?.current?.scrollToOffset({ offset });
            setCurrentSlideIndex(nextSlideIndex);
        }

    }


    return (
        <View style={styles.container} >
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Slides navigation={navigation} product={item} />
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                pagingEnabled
                bounces={false}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                ref={ref}
            />
            <View style={styles.BtnRow}>
                <TouchableOpacity
                    style={styles.Btn}
                    onPress={goPrevSlide} >
                    <Image source={icons.prev} style={styles.BtnIcons} resizeMode="contain" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.Btn}
                    onPress={goNextSlide}>
                    <Image source={icons.next} style={styles.BtnIcons} resizeMode="contain" />
                </TouchableOpacity>
            </View>
            <View style={styles.indicatorRow}>
                {data.map((data, index) =>

                    <Image source={data.image} style={[styles.indicator, currentSlideIndex == index && {
                        borderWidth: 2,
                        borderColor: COLORS.black,
                    }]} resizeMode="cover" />
                )}
            </View>
        </View>
    );
}


export default ProductSlider;

const styles = StyleSheet.create({
    container: {
        width: width,
    },

    BtnRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: width * .08,
    },

    Btn: {
        width: width * .06,
        height: height * .03,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * -.55,
    },
    BtnIcons: {
        width: width * .04,
        height: height * .03,
        tintColor: COLORS.white,
    },

    image: {
        width: width * .9,
        height: height * .5,
        marginTop: height * .02,
        marginBottom: height * .02,
        borderRadius: 12,
        overflow:'hidden',
    },
    imageContainer: {
        alignItems: 'center',
    },
    indicatorRow: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: "center",
        alignItems: 'center',
    },
    indicator: {
        width: width * .16,
        height: height * .08,
        marginHorizontal: width * .015,
        borderRadius: 5,
    },

})

