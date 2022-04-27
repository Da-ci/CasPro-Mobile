import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignInScreen from '../screens/SignInScreen';
import MainContainer from './MainContainer';
import Context from '../components/Context/context';
import Container from './Container';

const contain = 'MainContainer';
const Sign = 'SignInScreen';
const cont = 'Container';
const {Screen, Navigator} = createNativeStackNavigator();

const SignContainer = () => {
  return (
    <Context>
      <Navigator independent={true}>
        <Screen
          options={{headerShown: false}}
          name={Sign}
          component={SignInScreen}
        />
        <Screen
          options={{headerShown: false, unmountOnBlur: true}}
          name={contain}
          component={MainContainer}
        />
        <Screen
          options={{headerShown: false}}
          name={cont}
          component={Container}
        />
      </Navigator>
    </Context>
  );
};

export default SignContainer;
