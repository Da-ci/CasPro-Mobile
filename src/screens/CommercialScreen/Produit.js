import React, {useEffect, useState} from 'react';

import {
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  Modal,
  Pressable,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Axios from 'axios';
import Header from '../../components/header/Header';
import CustomInput from '../../components/CustomInput';
import {Searchbar} from 'react-native-paper';

const Produit = ({navigation, route}, props) => {
  const {id} = route.params;
  console.log(route.params);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const [modalVisible, setModalVisible] = useState(false);
  const [nombre, setnombre] = useState('');

  useEffect(() => {
    Axios.post('http://10.0.2.2:8000/api/displayAvailableProducts', {
      id: id,
    })
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
            return index.toString();
          }}
          renderItem={({item}) => {
            return (
              <View style={styles.item}>
                <View style={styles.subitem}>
                  <Text style={styles.Text}>{item.name} </Text>
                  <Text style={styles.subtext}>
                    {' '}
                    Quantiter : {item.quantity}
                  </Text>
                </View>
                <View style={{marginTop: 10}}>
                  <Ionicons size={25} name="chevron-forward"></Ionicons>
                </View>
              </View>
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
  search: {
    width: 400,
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
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
  item: {
    borderRadius: 1,
    elevation: 3,
    borderRadius: 30,
    backgroundColor: '#fff',
    shadowOffset: {width: 3, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    padding: 22,
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
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    marginTop: 20,
  },
  texteStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
});
export default Produit;
