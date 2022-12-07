
import React, { useState, useRef } from 'react';
import { View, FlatList,  TouchableOpacity, Image, Dimensions, StyleSheet, Text } from 'react-native';
import { dummyData, icons, COLORS,  } from '../../constants';
// import Blogs from '../BlogComponent';
const { width, height } = Dimensions.get('window')

const Slides = ({navigation, blog}) => {
    
    return (
        <View style={styles.blogs}>
            <Image source={blog.blogImage} style={styles.blogImage} />
            <Text style={styles.title}>{blog.title}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SingleBlogScreen')}>
                <Text style={styles.btnTxt}>Read More  &#62;</Text>
            </TouchableOpacity>
            <Text style={styles.blogDate}>{blog.date}</Text>
        </View>
        
    )
}

const Carousel = ({ navigation }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const ref = useRef(null);
    const data = dummyData.BlogData;

    const updateCurrentSlideIndex = (e) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    }
    const goPrevSlide = () => {
        const nextSlideIndex = currentSlideIndex - 1;
        if (nextSlideIndex != data.length) {
            const offset = nextSlideIndex * width * .5;
            ref?.current?.scrollToOffset({ offset });
            setCurrentSlideIndex(nextSlideIndex);
        }

    }

    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != data.length) {
            const offset = nextSlideIndex * width * .5;
            ref?.current?.scrollToOffset({ offset });
            setCurrentSlideIndex(nextSlideIndex);
        }

    }


    return (
        <View style={styles.container} >
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Slides navigation={navigation} blog={item} />
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
                         <Image source={icons.next} style={styles.BtnIcons}  resizeMode="contain"  />
                </TouchableOpacity>
            </View>
        </View>
    );
}


export default Carousel;

const styles = StyleSheet.create({
    container:{
        width: width * .5,
        height:height * .3,
    },
  
    BtnRow:{
        width: width * .5,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    
    Btn:{
        width: width * .06,
        height: height * .03,
        backgroundColor:COLORS.yellow,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 4,
    },
    BtnIcons:{
        width: width * .03,
        height: height * .015,
    },
   
        blogs: {
            width: width * .46,
            height: height * .25,
            alignItems: 'center',
            padding: width * .03,
            margin: width * .02,
            marginTop: height * .01,
            backgroundColor: COLORS.white,
            borderRadius: width * .5,
            // borderColor: COLORS.yellow,
            // borderWidth:.5,
        },
        blogImage: {
            width: width * .2,
            height: height * .1,
            borderRadius: 50,
        },
        title: {
            fontFamily: 'Poppins SemiBold 600',
            fontSize: 10,
            lineHeight: 15,
            color: COLORS.black2,
            marginTop: height * .01,
        },
        btnTxt: {
            fontFamily: 'Poppins Regular 400',
            fontSize: 10,
            lineHeight: 15,
            color: COLORS.red,
            marginTop: height * .01,
        },
        blogDate: {
            width: width * .2,
            textAlign: 'center',
            fontFamily: 'Poppins Regular 400',
            fontSize: 8,
            lineHeight: 12,
            color: 'rgba(35, 35, 35, 0.7)',
            marginTop: height * .01,
        }
    
    
   
})
