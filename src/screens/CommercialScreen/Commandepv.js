import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Header from '../../components/header/Header';

const Commandepv = props => {
  return (
    <View>
      <Header />
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
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
};
export default Commandepv;
