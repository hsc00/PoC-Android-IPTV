import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LandingPage from './pages/LandingPage/LandingPage';
import ChannelsPage from './pages/ChannelsPage/ChannelsPage';
import LanguagePage from './pages/LanguagePage/LanguagePage';
import MapPage from './pages/MapPage/MapPage';
import MessagesPage from './pages/MessagesPage/MessagesPage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import WeatherPage from './pages/WeatherPage/WeatherPage';
import MoviesPageSingular from './pages/MoviesPage/MoviesPageSingular';
import WebViewPage from './pages/WebViewPage/WebViewPage';
import ChannelsPageSingle from './pages/ChannelsPage/ChannelsPageSingle';
import MoviesPlayingPage from './pages/MoviesPage/MoviesPlayingPage';

const AppStack = createNativeStackNavigator();


const App = () => {




  return (



    <NavigationContainer>

      <AppStack.Navigator
        initialRouteName="LandingPage"
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",

        }}>


        <AppStack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ headerShown: false }}
        />


        <AppStack.Screen
          name="ChannelsPage"
          component={ChannelsPage}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          name="ChannelsPageSingle"
          component={ChannelsPageSingle}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          name="LanguagePage"
          component={LanguagePage}
          options={{ headerShown: false }}
        />

        <AppStack.Screen
          name="MapPage"
          component={MapPage}
          options={{ headerShown: false }}
        />

        <AppStack.Screen
          name="MessagesPage"
          component={MessagesPage}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          name="WebViewPage"
          component={WebViewPage}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          name="MoviesPage"
          component={MoviesPage}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          name="MoviesPlayingPage"
          component={MoviesPlayingPage}
          options={{ headerShown: false }}
        />

        <AppStack.Screen
          name="WeatherPage"
          component={WeatherPage}
          options={{ headerShown: false }}
        />

        <AppStack.Screen
          name="MoviesPageSingular"
          component={MoviesPageSingular}
          options={{ headerShown: false }}
        />


      </AppStack.Navigator>


    </NavigationContainer>
  )
}

export default App