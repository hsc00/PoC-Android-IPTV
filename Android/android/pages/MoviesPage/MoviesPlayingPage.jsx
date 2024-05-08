
import React, { useState, useContext, useEffect, useRef } from 'react';
import axios from 'axios';
import { View, TextInput, StyleSheet, Pressable, TouchableOpacity, Text, ScrollView, Image, ImageBackground, ActivityIndicator, Modal, TouchableWithoutFeedback } from 'react-native';
import { useNavigation, useRoute, useIsFocused } from '@react-navigation/native';
import { Video } from 'expo-av';



const MoviesPlayingPage = () => {
    const video = React.useRef(null);
    const secondVideo = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [statusSecondVideo, setStatusSecondVideo] = React.useState({});
   
   


    return (
        <View style={styles.container}>
            <Video
                ref={video}
                style={styles.video}
                source={require('../assets/wod.mp4')}
                
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

export default MoviesPlayingPage;