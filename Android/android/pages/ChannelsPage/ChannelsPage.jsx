
import React, { useState, useContext, useEffect, useRef } from 'react';
import axios from 'axios';
import { View, TextInput, StyleSheet, Button, TouchableOpacity, Text, KeyboardAvoidingView, Image, ImageBackground, ActivityIndicator, Modal, TouchableWithoutFeedback, Pressable } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';


const ChannelsPageSingle = () => {

    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('ChannelsPageSingle');
    };
    return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Channels</Text>
          </View>
          <View style={styles.squaresContainer}>
            <Pressable onPress={handlePress}>
              <View style={styles.square}>
                <Image
                  style={styles.image}
                  source={{ uri: 'https://logosmarcas.net/wp-content/uploads/2020/11/CNN-Logo.png' }}
                />
              </View>
            </Pressable>
            <Pressable onPress={handlePress}>
              <View style={styles.square}>
                <Image
                  style={styles.image}
                  source={{ uri: 'https://areavip.pt/wp-content/uploads/2020/06/Logo-TVI-1280x720.jpg' }}
                />
              </View>
            </Pressable>
            <Pressable onPress={handlePress}>
              <View style={styles.square}>
                <Image
                  style={styles.image}
                  source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/a/aa/SICNovelas.png/640px-SICNovelas.png' }}
                />
              </View>
            </Pressable>
          </View>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      titleContainer: {
        marginBottom: 190,
      },
      title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 54,
        textDecorationLine: 'underline'

      },
      squaresContainer: {
        flexDirection: 'row',
          
        justifyContent: 'center',
        alignItems: 'flex-end',
      },
      square: {
        width: 350,
        height: 230,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        padding: 30,
        margin: 30,
       

      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
   
    });
    

export default ChannelsPageSingle;