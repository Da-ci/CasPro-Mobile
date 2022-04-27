import React, {useEffect, useContext} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Solde from '../screens/CommercialScreen/Solde';
import PvScreen from '../screens/CommercialScreen/PvScreen';
import Commande from '../screens/CommercialScreen/Commande';
import Marque from '../screens/CommercialScreen/Marque';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Auth} from '../components/Context/context';
import Produit from '../screens/CommercialScreen/Produit';
import Choix from '../screens/CommercialScreen/Choix.js';
import AjouterPv from '../screens/CommercialScreen/AjouterPv';
import Commandepv from '../screens/CommercialScreen/Commandepv';
import Header from '../components/header/Header';
import Infocommandes from '../screens/CommercialScreen/infocommande';
import Check from '../screens/Check/Check';

const solde = 'Solde';
const pvName = 'Pv';
const commande = 'Commande';
const marque = 'Marque';
const produit = 'Produit';
const choix = 'Choix';
const ajouter = 'AjouterPv';
const commandepv = 'Commandepv';
const head = 'Header';
const info = 'infocommande';

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  const Value = useContext(Auth);
  useEffect(() => {
    Check(Value);
  }, []);
  return (
    <Tab.Navigator
      initialRouteName={solde}
      screenOptions={({route}) => ({
        headerShown: false,
        unmountOnBlur: true,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;

          if (rn === solde) {
            iconName = focused ? 'cash' : 'cash-outline';
          } else if (rn === pvName) {
            iconName = focused ? 'earth' : 'earth-outline';
          } else if (rn === commande) {
            iconName = focused ? 'receipt' : 'receipt-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name={solde} component={Solde} />
      <Tab.Screen name={pvName} component={PvScreen} />
      <Tab.Screen name={commande} component={Commande} />

      <Tab.Screen
        name={marque}
        component={Marque}
        options={{
          headerShown: false,
          tabBarButton: () => null,
          tabBarStyle: {display: 'none'},
        }}
      />
      <Tab.Screen
        name={produit}
        component={Produit}
        options={{
          headerShown: false,
          tabBarButton: () => null,
          tabBarStyle: {display: 'none'},
        }}
      />
      <Tab.Screen
        name={ajouter}
        component={AjouterPv}
        options={{
          headerShown: false,
          tabBarButton: () => null,
          tabBarStyle: {display: 'none'},
        }}
      />
      <Tab.Screen
        name={choix}
        component={Choix}
        options={{
          headerShown: false,
          tabBarButton: () => null,
          tabBarStyle: {display: 'none'},
        }}
      />
      <Tab.Screen
        name={commandepv}
        component={Commandepv}
        options={{
          headerShown: false,
          tabBarButton: () => null,
          tabBarStyle: {display: 'none'},
        }}
      />
      <Tab.Screen
        name={head}
        component={Header}
        options={{
          headerShown: false,
          tabBarButton: () => null,
          tabBarStyle: {display: 'none'},
        }}
      />
      <Tab.Screen
        name={info}
        component={Infocommandes}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarButton: () => null,
          tabBarStyle: {display: 'none'},
        }}
      />
    </Tab.Navigator>
  );
};

export default MainContainer;
