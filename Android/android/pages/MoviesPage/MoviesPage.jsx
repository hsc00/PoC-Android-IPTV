
import React, { useState, useContext, useEffect, useRef } from 'react';
import axios from 'axios';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, ScrollView, Image, ImageBackground, ActivityIndicator, Modal, TouchableWithoutFeedback } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';


const MoviesPage = () => {
  const [movies, setMovies] = useState([]);


  const getMovies = async () => {
    try {
      const response = await axios.get('http://192.168.10.106/movies/all_movies', {
        headers: {
          'Content-Type': 'application/json',
        },

      });
      
      setMovies(response.data);
    } catch (error) {
      console.error('Error response:', error.response);
      console.error('Error message:', error.message);

    }
  };
  useEffect(() => {
    getMovies();
  }, []);

  const navigation = useNavigation();



  const handleMoviePress = (movie) => {
    navigation.navigate('MoviesPageSingular', { movieId: movie.id });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movies</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}>
        {movies.map((movie) => (
          <TouchableOpacity
            key={movie.id}
            style={styles.movieItem}
            onPress={() => handleMoviePress(movie)}>
            <Image  source={require('../assets/movie1.jpg')} style={styles.movieImage} />

            <Text style={styles.movieTitle}>{movie.title}</Text>
          </TouchableOpacity>

        ))}
      </ScrollView>
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
  scrollViewContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 50,
    marginRight:50
  },
  movieItem: {
    margin: 40,
  },
  movieImage: {
    width: 150,
    height: 280,
    borderRadius: 10,
  },
  movieTitle: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
    color: 'white'
  },
  title: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 40,
    textDecorationLine: 'underline'
  }
});

export default MoviesPage;