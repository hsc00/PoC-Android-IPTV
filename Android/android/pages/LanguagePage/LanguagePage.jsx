
import React, { useState, useContext, useEffect, useRef } from 'react';
import axios from 'axios';
import { View, TextInput, StyleSheet, Animated, Text, KeyboardAvoidingView, Image, ImageBackground, ActivityIndicator, Modal, TouchableWithoutFeedback, Pressable } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';


const LanguagePage = () => {

    const animatedScaleButton1 = useRef(new Animated.Value(1)).current;
    const animatedScaleButton2 = useRef(new Animated.Value(1)).current;

    const navigation = useNavigation();


    const handlePressIn = (animatedScale) => {
        animatedScale.setValue(0.9)
        Animated.spring(animatedScale, {
            bounciness: 24,
            toValue: 1,
            useNativeDriver: true,
        }).start();
        navigation.navigate(`LandingPage`);

    };




    useEffect(() => {
        animatedScaleButton1.setValue(1);
        animatedScaleButton2.setValue(1);
    }, []);
    return (

        <View style={styles.container}>
            <Pressable onPress={() => handlePressIn(animatedScaleButton1)}>

                <Animated.View style={[styles.button, { transform: [{ scale: animatedScaleButton1 }] }]}>
                    <Image
                        source={require('../assets/Germany.png')}
                        style={styles.flag}
                    />
                </Animated.View>

            </Pressable>
            <Pressable onPress={() => handlePressIn(animatedScaleButton2)}>
                <Animated.View style={[styles.button, { transform: [{ scale: animatedScaleButton2 }] }]}>

                    <Image
                        source={require('../assets/English.png')}
                        style={styles.flag}
                    />
                </Animated.View>

            </Pressable>

        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    flag: {
        width: 350,
        height: 250,
        margin: 70,
        borderColor: 'white',
        borderRadius: 10,
        borderWidth: 1
    }
});

export default LanguagePage;