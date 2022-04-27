import {View, Text, Pressable, TouchableOpacity, U} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Seachbar from '../Searchbar/Searchbar';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const {textStyle, viewStyle} = styles;
  const navigation = useNavigation();
  return (
    <View>
      <View style={viewStyle}>
        <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
          <Ionicons size={30} name="log-out"></Ionicons>
        </TouchableOpacity>
        <Text style={textStyle}>Meteor Dash </Text>

        <Ionicons> </Ionicons>
      </View>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#f9b233',
    height: 60,
    padding: 15,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    positiom: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  textStyle: {
    fontSize: 24,
  },
};
export default Header;
