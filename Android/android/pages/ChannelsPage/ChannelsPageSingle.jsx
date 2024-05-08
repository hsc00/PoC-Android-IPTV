
import React, { useState, useContext, useEffect, useRef } from 'react';
import axios from 'axios';
import { View, TextInput, StyleSheet, Button,TouchableOpacity, Text, KeyboardAvoidingView, Image, ImageBackground, ActivityIndicator, Modal, TouchableWithoutFeedback } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';

import { Video } from 'expo-av';

const ChannelsPageSingle = () => {
    const video = React.useRef(null);
    const secondVideo = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [statusSecondVideo, setStatusSecondVideo] = React.useState({});

    return (
        <View style={styles.container}>
            <Video
                ref={video}
                style={styles.video}
                source={{ uri: "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8" }}
                
                resizeMode="cover"
                isLooping
                shouldPlay
                onPlaybackStatusUpdate={setStatus}
            />
            
            
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: ' black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    video: {
        width: '100%',
        height: '100%',
    },
});

export default ChannelsPageSingle;