
import React, { useState, useRef, useEffect } from 'react';
import { FlatList, StatusBar, Image, View, Text, TouchableOpacity, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { COLORS, images } from '../../constants';
const { width, height } = Dimensions.get('window')

const data = [
    {
        index: 0,
        image: images.onslide1,
    },
    {
        index: 1,
        image: images.onslide1,
    },
    {
        index: 2,
        image: images.onslide1,
    },
];

const Slide = () => {

    return (
        <View style={styles.card}>
            <View style={styles.row1} >
                <Image source={images.onslide1} style={styles.cardImg} />
                <View>
                    <Text style={styles.title}>Sara Singh</Text>
                    <Text style={styles.subTitle}>Designer</Text>
                </View>
            </View>
            <Text style={styles.txt}>Lorem ipsum dolor sit elit.Lorem ipsum dolor sit ametectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.met consectetur adipisicinLorem ipsum dolor sit elit. </Text>
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


const OnSlide = ({ navigation }) => {

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const ref = useRef(null);

    useInterval(() => {
        goNextSlide();
        if (currentSlideIndex == 2) {
            ref?.current?.scrollToOffset(0);
            setCurrentSlideIndex(0);
        }
    }, 2000);

    const updateCurrentSlideIndex = (e) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    }

    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != data.length) {
            const offset = nextSlideIndex * width * .35;
            ref?.current?.scrollToOffset({ offset });
            setCurrentSlideIndex(nextSlideIndex);
        }

    }

    return (
        <ScrollView style={styles.row} >

            <FlatList
                data={data}
                renderItem={() => (
                    <Slide />
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                pagingEnabled
                bounces={false}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                ref={ref}
            />
            <View style={styles.indicatorRow}>
                {data.map((_, index) =>
                    <View
                        key={index}
                        style={[styles.indicator, currentSlideIndex == index && {
                            backgroundColor: COLORS.blue,
                        }]} />
                )}
            </View>
        </ScrollView>
    );
}

export default OnSlide;

const styles = StyleSheet.create({
    row: {
        backgroundColor: COLORS.black,
        paddingVertical: height * .02,
    },

    card: {
        width: width * .5,
        backgroundColor: COLORS.white,
        padding: width * .03,
        marginHorizontal: width * .03,
        marginVertical: height * .02,
        borderRadius: 5,
        shadowColor: COLORS.blue,
        elevation: 10,
    },
    cardImg: {
        width: width * .1,
        height: height * .05,
        marginRight: width * .02,
    },
    row1: {
        flexDirection: 'row',
    },
    title: {
        fontFamily: "Poppins Medium 500",
        color: COLORS.black2,
        fontSize: 10,
    },
    subTitle: {
        fontFamily: "Poppins Regular 400",
        color: COLORS.black2,
        fontSize: 8,
    },
    txt: {
        marginTop: height * .01,
        fontFamily: "Poppins Regular 400",
        color: COLORS.black2,
        fontSize: 12,
    },

    indicatorRow: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: "center",
        alignItems: 'center',
    },
    indicator: {
        width: 10,
        height: 10,
        backgroundColor: 'gray',
        marginHorizontal: 5,
        borderRadius: 10,
    }
})
