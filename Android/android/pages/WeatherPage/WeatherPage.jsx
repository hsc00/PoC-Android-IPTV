
import React, { useState, useContext, useEffect, useRef, } from 'react';
import axios from 'axios';
import { ScrollView, View, Alert, RefreshControl, FlatList, TextInput, Dimensions, StyleSheet, TouchableOpacity, Text, KeyboardAvoidingView, Image, ImageBackground, ActivityIndicator, Modal, TouchableWithoutFeedback, SafeAreaView } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import * as Location from 'expo-location'



const WeatherPage = () => {
    const [forecast, setForecast] = useState(null);
    const [refreshing, setRefreshing] = useState(false);

    const loadForecast = async () => {
        setRefreshing(true);

        try {
            const openWeatherKey = '5cf78ff63718e4dbf856d894edeea42d';

            const { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                throw new Error('Permission was denied');
            }

            let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });

            const response = await axios.get(` http://api.openweathermap.org/data/2.5/onecall?lat=${location.coords.latitude}&lon=${location.coords.longitude}&units=metric&exclude=minutely&appid=${openWeatherKey}`);

            if (response.status < 200 || response.status >= 300) {
                throw new Error(`OpenWeatherMap API request failed with status ${response.status}`);
            }
            const data = await response.data;
            setForecast(data);
        } catch (error) {
            console.error("An error occurred:", error);
            Alert.alert(`Error: ${error.message}`);
        } finally {
            setRefreshing(false);
        }
    };



    useEffect(() => {
        loadForecast();
    }, [])

    if (!forecast) {
        return (
            <SafeAreaView style={styles.loading}>
                <ActivityIndicator size='large'></ActivityIndicator>

            </SafeAreaView>
        )
    }

    const current = forecast.current.weather[0];

    return (


        <SafeAreaView style={styles.container}>

            <ScrollView resfreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={() => loadForecast()}></RefreshControl>

            }

                style={{ marginTop: 0 }}>

                <Text style={styles.title}>
                    Next 7 days
                </Text>

                <Text style={{
                    alignItems: 'center', textAlign: 'center', color: 'white', fontSize: 22,
                }}>
                    Your location
                </Text>
                <View style={styles.containerFlat}>
                    <FlatList
                        style={styles.flatlistDay}
                        horizontal

                        data={forecast.daily.slice(0, 7)}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={(day) => {
                            const weather = day.item.weather[0];
                            var dt = new Date(day.item.dt * 1000);
                            const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(dt);
                            return (
                                <View style={styles.hour}>
                                    <Text style={{ fontWeight: 'bold', color: 'white' }}>
                                        {weekday}
                                    </Text>
                                    <Image
                                        style={styles.smallIcon}
                                        source={{
                                            uri: `http://openweathermap.org/img/wn/${weather.icon}@4x.png`
                                        }}
                                    />

                                    <Text style={{ fontWeight: 'bold', color: 'white' }}>
                                        {weather.description}
                                    </Text>
                                </View>
                            )
                        }}
                    />
                </View>

                <Text style={styles.currentDescription}>
                    {current.description}
                </Text>


                <View style={styles.extraInfo}>
                    <View style={styles.info}>
                        <Image
                            source={require('../assets/temp.png')}
                            style={{ width: 70, height: 70, borderRadius: 40 / 2, alignSelf: 'center' }}
                        />
                        <Text style={styles.text}>
                            {forecast.current.feels_like}ºC
                        </Text>

                        <Text style={styles.text}>
                            Feels like
                        </Text>
                    </View>
                    <View style={styles.info}>
                        <Image
                            source={require('../assets/humidade.png')}
                            style={{ width: 70, height: 70, borderRadius: 40 / 2, alignSelf: 'center' }}
                        />
                        <Text style={styles.text}>
                            {forecast.current.humidity}%
                        </Text>

                        <Text style={styles.text}>
                            Humidity
                        </Text>
                    </View>

                </View>

                <Text style={styles.titleHour}>
                    Hourly Forecast
                </Text>

                <FlatList
                    style={styles.flatlist}
                    horizontal

                    data={forecast.hourly.slice(0, 11)}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={(hour) => {
                        const weather = hour.item.weather[0];
                        var dt = new Date(hour.item.dt * 1000);
                        return (
                            <View style={styles.hour}>
                                <Text style={{ fontWeight: 'bold', color: 'white' }}>
                                    {dt.toLocaleTimeString().replace(/:\d+ /, '')}
                                </Text>
                                <Text style={{ fontWeight: 'bold', color: 'white' }}>
                                    {Math.round(hour.item.temp)}ºC
                                </Text>
                                <Image
                                    style={styles.smallIcon}
                                    source={{
                                        uri: `http://openweathermap.org/img/wn/${weather.icon}@4x.png`
                                    }}
                                />
                                <Text style={{ fontWeight: 'bold', color: 'white' }}>
                                    {weather.description}
                                </Text>
                            </View>
                        )
                    }}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    containerFlat: {
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white'
    },
    flatlist:{
    },
    titleHour: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white'
    },
    current: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'

    },
    flatlistDay: {
        padding: 15,

    },
    largeIcon: {

        width: 250,
        height: 200,

    },
    currentTemp: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },
    currentDescription: {
        width: '100%',
        textAlign: 'center',
        fontWeight: '200',
        fontSize: 24,
        marginBottom: 5
    },
    info: {
        width: Dimensions.get('screen').width / 2.5,
        padding: 10,
        borderRadius: 15,
        justifyContent: 'center'
    },
    extraInfo: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        padding: 10
    },
    text: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    },
    hour: {
        padding: 6,
        alignItems: 'center',

    },
    smallIcon: {
        width: 100,
        height: 100,
    }
});

export default WeatherPage;