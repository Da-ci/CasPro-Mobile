import React, {useEffect, useState} from 'react';

import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import Cards from '../../components/Card/Cards';
import Axios from 'axios';
import Header from '../../components/header/Header';

const Infocommandes = ({navigation, route}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(['']);
  const [searchQuery, setSearchQuery] = React.useState('');
  const {id} = route.params;
  const [numCommande, setNumCommande] = useState('');
  const [status, setStatus] = useState('');
  const [prixTotal, setPrixTotal] = useState('');

  useEffect(() => {
    console.log(id),
      Axios.post('http://10.0.2.2:8000/api/infoCommande', {
        id: id,
      })
        .then(({data}) => {
          console.log('defaultApp -> data', data);
          setData(data);
          setStatus(data.Commande.status);
          setNumCommande(data.Commande.numCommande);
          setPrixTotal(data.Commande.prixTotal);
        })
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
  }, []);

  return (
    <View>
      <Header />

      <Cards>
        <View>
          <Text style={styles.textStyle}>{numCommande} </Text>
          <Text style={styles.textStyles}>Status: {status} </Text>
          <Text style={styles.textStylese}>Prix :{prixTotal} DA </Text>
        </View>
      </Cards>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  textStyles: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 50,
  },
  textStylese: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 50,
  },
  Container: {
    flexDirection: 'row',
  },
  Card: {
    marginTop: 50,
  },
});
export default Infocommandes;
