import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  View,
  FlatList,
} from 'react-native';
import Card from '../../components/Card/Card.js';
import Header from '../../components/header/Header';

const Marque = ({navigation}, props) => {
  return (
    <View>
      <Header />
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Marque')}>
          <Card>
            <Text>
              <Text style={styles.baseText}>Ajouter Une Commande</Text>
            </Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Commandepv')}>
          <Card>
            <Text>
              <Text style={styles.baseText}>Consulter Les Commandes</Text>
            </Text>
          </Card>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
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
  search: {
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
  },
  baseText: {
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 3, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 5,
    marginVertical: 5,
    fontSize: 20,
  },

  x: {
    marginLeft: 0,
    flexDirection: 'row',
  },
});

export default Marque;
