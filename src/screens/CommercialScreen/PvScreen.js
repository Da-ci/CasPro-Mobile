import React, {useEffect, useState} from 'react';

import {
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  View,
  Image,
  Modal,
  ScrollView,
  Pressable,
  FlatList,
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Axios from 'axios';
import Header from '../../components/header/Header';
import {Searchbar} from 'react-native-paper';
import Fab from '../../components/Fab/FAB.js';

const PvScreen = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  useEffect(() => {
    Axios.get('http://10.0.2.2:8000/api/displayPdv')
      .then(({data}) => {
        console.log('defaultApp -> data', data);
        setData(data);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View>
      <Header />

      <View style={styles.Container}>
        <Searchbar
          style={styles.search}
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('AjouterPv')}
          style={styles.fab}>
          <Text style={styles.fabIcon}>+</Text>
        </TouchableOpacity>
      </View>

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => {
            // console.log("index", index)
            return index.toString();
          }}
          renderItem={({item}) => {
            return (
              <ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate('Marque')}>
                  <View style={styles.item}>
                    <View style={styles.subitem}>
                      <Text style={styles.Text}>{item.name} </Text>
                      <Text style={styles.subtext}> {item.adresse} </Text>
                    </View>
                    <View style={{marginTop: 10}}>
                      <Ionicons size={25} name="chevron-forward"></Ionicons>
                    </View>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            );
          }}
        />
      )}
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
    marginRight: 10,
    width: 340,
  },
  item: {
    borderRadius: 1,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 3, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    padding: 22,
    shadowRadius: 2,
    marginVertical: 2,
    marginTop: 5,
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  Text: {
    fontWeight: 'bold',
    fontSize: 19,
    color: 'black',
  },
  subtext: {
    color: 'grey',
    fontSize: 15,
    marginLeft: 8,
    marginTop: 10,
  },
  subitem: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  fab: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    top: 11,
    backgroundColor: '#6d358b',
    borderRadius: 25,
    elevation: 5,
  },
  fabIcon: {
    fontSize: 35,
    color: 'white',
    bottom: 2,
  },
  Container: {
    flexDirection: 'row',
  },
});
export default PvScreen;
