import React, {useEffect, useState} from 'react';

import {
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  View,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Axios from 'axios';
import Header from '../../components/header/Header';
import {Searchbar} from 'react-native-paper';
const Marque = ({navigation}, props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  useEffect(() => {
    Axios.get('http://10.0.2.2:8000/api/displayBrands')
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
      <Searchbar
        style={styles.search}
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
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
              <TouchableOpacity
                onPress={() => navigation.navigate('Produit', {id: item.id})}>
                <View style={styles.item}>
                  <View style={styles.subitem}>
                    <Text style={styles.Text}>{item.name} </Text>
                    <Text style={styles.subtext}> {item.email} </Text>
                  </View>
                  <View style={{marginTop: 10}}>
                    <Ionicons size={25} name="chevron-forward"></Ionicons>
                  </View>
                </View>
              </TouchableOpacity>
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
    width: 400,
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
  },
  item: {
    borderRadius: 1,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 3, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    padding: 22,
    borderRadius: 30,
    shadowRadius: 2,
    marginVertical: 1,
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
  },
  subitem: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});
export default Marque;
