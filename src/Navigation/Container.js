import React, {useEffect, useContext} from 'react';
import {Auth} from '../components/Context/context';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Check from '../screens/Check/Check';
import Commandes from '../screens/LivreurScreen/Commandes';
import Commandeinfo from '../screens/LivreurScreen/Commandeinfo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const commande = 'Commandes';
const info = 'Commandeinfo';
const Tab = createBottomTabNavigator();

const Container = () => {
  const Value = useContext(Auth);
  useEffect(() => {
    Check(Value);
  }, []);
  return (
    <Tab.Navigator
      initialRouteName={commande}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;

          if (rn === commande) {
            iconName = focused ? 'receipt' : 'receipt-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        name={commande}
        component={Commandes}
        option={{
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name={info}
        component={Commandeinfo}
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

export default Container;
