import React from 'react';
import {View, Text, TextInput, Image, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import MainContainer from './src/Navigation/MainContainer';
import SignContainer from './src/Navigation/SignContainer';
import Container from './src/Navigation/Container';
import Commandes from './src/screens/LivreurScreen/Commandes';
import Infocommandes from './src/screens/CommercialScreen/infocommande';

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <SignContainer />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;
