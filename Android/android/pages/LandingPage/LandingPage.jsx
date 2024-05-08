import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
  AppState,
  Animated,
} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import { FontAwesome5 } from '@expo/vector-icons';



const LandingPage = ({ hasTVPreferredFocus }) => {
  const navigation = useNavigation();

  const [focus, setFocus] = useState(false);

  const [bounceValue] = useState(new Animated.Value(1));

  // Function to create a bounce animation
const bounceAnimation = () => {
  Animated.spring(bounceValue, {
    toValue: 1.1,
    friction: 2,
    useNativeDriver: true,
  }).start(() => {
    bounceValue.setValue(1);
  });
};

  const iconMapping = {
    Channels: 'tv',
    Movies: 'film',
    Messages: 'comment',
    Map: 'map-marked-alt',
    Weather: 'sun',
    Language: 'language',
  };


  const [items] = useState([
    { title: 'Channels', key: 'Channels' },
    { title: 'Movies', key: 'Movies' },
    { title: 'Messages', key: 'Messages' },
    { title: 'Map', key: 'Map' },
    { title: 'Weather', key: 'Weather' },
    { title: 'Language', key: 'Language' },
  ]);

  const onFocus = useCallback((items) => {
    console.log('Focused item ', items.key);

    setFocus(true);
  }, [items.key]);

  const onBlur = useCallback(() => {
    setFocus(false);
  }, []);

  const handleItemPress = (item) => {

    navigation.navigate(`${item}Page`);

  };

  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0.9 }}
        end={{ x: 0, y: 1 }}
        colors={['#00050a', '#000000']}

      >

        <ImageBackground source={require('../assets/cruzeiro.png')} style={styles.image}>


          <View style={styles.titleContainer}>
            <Text style={styles.title}>Amadouro</Text>
            <Text style={styles.title2}>103</Text>

          </View>
          <ScrollView
            style={styles.scrollView}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContent}
          >
            {items.map((item) => (

              <TouchableHighlight
                key={item.key}
                style={[
                  styles.wrapper,
                  focus === item.key ? styles.wrapperFocused : null,
                ]}
                onPress={() =>{ handleItemPress(item.key);
                  bounceAnimation();
                }}
                onFocus={onFocus}
                onBlur={onBlur}
              >
                <View hasTVPreferredFocus
                  key={item.key}
                >
                  <LinearGradient
                    colors={['rgba(205, 155, 155, 0.5)', 'rgba(255, 255, 255, 0)']}
                    start={{ x: 0.6, y: 0.1 }}
                    end={{ x: 0.1, y: 0.9 }}
                    style={[styles.item, styles[item.key.toLowerCase()]]}
                  >
                    <FontAwesome5 name={iconMapping[item.key]} size={18} color="white" />

                    <Text style={styles.itemText}>{item.title}</Text>
                  </LinearGradient>
                </View>
              </TouchableHighlight>
            ))}
          </ScrollView>
        </ImageBackground>
      </LinearGradient>

    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',


  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    paddingBottom: 150
  },
  scrollView: {
    marginBottom: 10,
    alignContent: 'center',

  },
  selectedItem: {
    transform: [{ translateY: -10 }],
    width: 180,
    height: 100,
  },

  containerScroll: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollViewContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 46,
    fontWeight: 'bold',

    paddingRight: 280

  },
  title2: {
    color: '#ab9773',
    fontSize: 36,
    fontWeight: 'bold',

    paddingRight: 430,
    marginBottom: 10

  },
  titleContainer: {
    marginTop: 330,

    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  wrapper: {
  },
  wrapperFocused: {
    backgroundColor: 'black'
  },
  item: {
    width: 150,
    height: 80,
    borderRadius: 10,
    marginHorizontal: 15,
    padding: 15,
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },


  itemText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'black',



  },
  channels: {
    backgroundColor: '#d93455',
  },
  movies: {
    backgroundColor: '#6ab354',
  },
  webview: {
    backgroundColor: '#6ab354'
  },
  messages: {
    backgroundColor: '#4b6dd1',
  },
  map: {
    backgroundColor: '#b8bd5c',
  },
  weather: {
    backgroundColor: '#a15099',
  },
  language: {
    backgroundColor: '#54b038',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
  },
});

export default LandingPage;
