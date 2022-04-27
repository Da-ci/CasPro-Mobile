import React, {useEffect, useState, useContext} from 'react';
import {Auth} from '../../components/Context/context';
import {
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import Header from '../../components/header/Header';
import {Searchbar} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Axios from 'axios';
import {useNavigation} from '@react-navigation/native';
const Commandes = ({navigation}, props) => {
  const {account} = useContext(Auth);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  useEffect(() => {
    if (account != null && account != undefined) {
      Axios.post('http://10.0.2.2:8000/api/displayCommandesMarqueLivreur', {
        id: account.id,
      })
        .then(({data}) => {
          console.log('account', account);
          setData(data);
        })
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
    }
  }, [account]);

  return (
    <View>
      <Header />

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
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Commandeinfo', {id: item.id})
                  }>
                  <View style={styles.item}>
                    <View style={styles.subitem}>
                      <Text style={styles.Text}>{item.numCommande} </Text>
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
    width: 400,
  },
  item: {
    borderRadius: 1,
    elevation: 3,
    backgroundColor: '#fff',
    borderRadius: 30,
    shadowOffset: {width: 3, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    padding: 22,
    shadowRadius: 2,
    marginVertical: 10,
    height: 100,
    marginTop: 50,
    width: '100%',

    alignItems: 'center',

    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  Container: {
    flexDirection: 'row',
  },
  Text: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 15,

    color: 'black',
  },
  subtext: {
    color: 'grey',
    fontSize: 15,
    marginLeft: 8,
    marginTop: 20,
  },
  substext: {
    color: 'grey',
    fontSize: 15,
    marginLeft: 192,
    marginTop: 20,
  },
  subsstext: {
    color: 'grey',
    fontSize: 15,
    marginLeft: 80,
    marginTop: 30,
  },
  subitem: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});
export default Commandes;
