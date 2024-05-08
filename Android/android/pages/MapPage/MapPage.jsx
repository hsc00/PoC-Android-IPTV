
import React, { useState, useContext, useEffect, useRef } from 'react';
import axios from 'axios';
import MapView, { Marker } from 'react-native-maps';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, KeyboardAvoidingView, Image, ImageBackground, ActivityIndicator, Modal, TouchableWithoutFeedback } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, watchPositionAsync, LocationAccuracy } from 'expo-location';

const MapPage = () => {
    const [location, setLocation] = useState(null);


    const mapRef = useRef(MapView);

    async function requestLocationPermissions() {
        const { granted } = await requestForegroundPermissionsAsync();
        if (granted) {
            const currentPosition = await getCurrentPositionAsync();
            setLocation(currentPosition);
        }
    }

    useEffect(() => {
        requestLocationPermissions();
    }, []);

    useEffect(() => {
        const watchPosition = async () => {
            const watcher = await watchPositionAsync(
                {
                    accuracy: LocationAccuracy.Highest,
                    timeInterval: 1000,
                    distanceInterval: 1,
                },
                (response) => {
                    setLocation(response);
                    mapRef.current?.animateCamera({
                        center: response.coords,
                    });
                }
            );

            return () => {
                watcher.remove();
            };
        };

        watchPosition();
    }, []);
    return (


        <View style={styles.container}>

            {
                location &&
                <MapView
                    ref={mapRef}
                    style={styles.map}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005
                    }}
                >

                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                        image={require('../assets/imagem.png')}

                    >
                       </Marker>
                </MapView>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        flex: 1,
        width: '100%',

    }
});

export default MapPage;