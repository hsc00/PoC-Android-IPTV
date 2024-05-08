
import React, { useState, useContext, useEffect, useRef } from 'react';
import axios from 'axios';
import { View, TextInput, StyleSheet, Pressable, TouchableOpacity, Text, ScrollView, Image, ImageBackground, ActivityIndicator, Modal, TouchableWithoutFeedback } from 'react-native';
import { useNavigation, useRoute, useIsFocused } from '@react-navigation/native';
import { Video } from 'expo-av';



const MoviesPageSingular = () => {
    const [movies, setMovies] = useState([]);

    const route = useRoute();
    const { movieId } = route.params;
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('MoviesPlayingPage');
    };

    const getMovies = async () => {
        try {



            const response = await axios.get(`http://192.168.10.106/movies/${movieId}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setMovies(response.data);
        } catch (error) {
            console.error('An error occurred during the login:', error);
        }
    };
    useEffect(() => {
        getMovies();
    }, [movieId]);



    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>{movies.title}</Text>
            <ScrollView style={styles.scrollViewContent}>
                <View style={styles.detailsSection}>
                    <View style={styles.textContainer}>
                        <Text style={styles.movieDesc2}>Director:</Text>
                        <Text style={styles.movieDesc}>{movies.director}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.movieDesc2}>IMDb Rating:</Text>
                        <Text style={styles.movieDesc}>{movies.imdb_rating}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.movieDesc2}>Length:</Text>
                        <Text style={styles.movieDesc}>{movies.length}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.movieDesc2}>Cast:</Text>
                        <Text style={styles.movieDesc}>{movies.cast}</Text>
                    </View>
                    <View style={styles.textContainerDesc}>
                        <Text style={styles.movieDescTitle}>Description:</Text>
                    </View>
                </View>
                <View style={styles.textContainerDesc2}>
                    <Text style={styles.movieDesc3}>{movies.description}</Text>
                </View>
            </ScrollView>
            <Image source={require('../assets/movie1.jpg')} style={styles.movieImage} />
            <View style={styles.buttonContainer}>
                <Pressable onPress={handlePress} style={styles.button}>
                    <Text style={styles.play}>Play</Text>
                </Pressable>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 20,
    },
    textTitle: {
        color: 'white',
        fontSize: 50,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
        textDecorationLine: 'underline',
    },
    scrollViewContent: {
        flex: 1,
    },
    detailsSection: {
        paddingTop: 50
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 10,
    },
    textContainerDesc: {
        marginTop: 130,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },
    textContainerDesc2: {

        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },
    play: {
        color: 'white',
        fontSize: 26,
    },
    buttonContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    button: {
        width: 300,
        backgroundColor: '#006400',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    movieDesc: {
        color: 'white',
        fontSize: 26,
        paddingLeft: 10,
    },
    movieDescTitle: {
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold',
    },
    movieDesc2: {
        color: 'white',
        fontSize: 26,
        textAlign: 'left',
        fontWeight: 'bold',
        
    },
    movieDesc3: {
        color: 'white',
        fontSize: 20,
        textAlign: 'left',
    },
    movieImage: {
        width: 220,
        height: 380,
        borderRadius: 10,
        position: 'absolute',
        top: 0,
        right: 0,
    },
});

export default MoviesPageSingular;