
import React, { useState, useContext, useEffect, useRef } from 'react';
import axios from 'axios';
import { View, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, Text, KeyboardAvoidingView, Image, ImageBackground, ActivityIndicator, Modal, TouchableWithoutFeedback } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import {WebView} from 'react-native-webview';


const WebViewPage = () => {

const url = 'http://192.168.10.102/IPTV3.1.1/index.html'


    return (


    <View style={styles.container}>

      <WebView
      style={styles.webview}
      source={{uri:url}}
      >

      </WebView>
    </View>
  );
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
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

export default WebViewPage;