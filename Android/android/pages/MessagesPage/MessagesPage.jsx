
import React, { useState, useContext, useEffect, useRef } from 'react';
import axios from 'axios';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, KeyboardAvoidingView, Image, ImageBackground, ActivityIndicator, Modal, TouchableWithoutFeedback } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';


const MessagesPage = () => {




    return (


        <View style={styles.container}>

            <Text style={styles.title}>

                Messages
            </Text>
            <Text style={styles.message}>

                Hello , this is your capitain and this is a message!

            </Text>

            <Text style={styles.message}>
                Hope you are having a nice time and voyage!

            </Text>
            <Text style={styles.message}>

                If there´s anything you need please call reception!
            </Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    message: {
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold'
    },
    title: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 40,
        textDecorationLine: 'underline'

    }
});

export default MessagesPage;