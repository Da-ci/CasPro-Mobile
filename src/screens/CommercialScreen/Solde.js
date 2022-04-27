import React, {useEffect, useState, useContext} from 'react';
import {Auth} from '../../components/Context/context';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Header from '../../components/header/Header';
import Card from '../../components/Card/Card';
import Axios from 'axios';
const Solde = props => {
  const {account} = useContext(Auth);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [Salaire, setSalaire] = useState(0);

  useEffect(() => {
    if (account != null && account != undefined) {
      Axios.post('http://10.0.2.2:8000/api/displaySalaireCommercial', {
        user_id: account.id,
      })
        .then(({data}) => {
          console.log(data);
          console.log('account', account);
          setData(data);
          setSalaire(data[0].Salaire);
        })
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
    }
  }, [account]);
  return (
    <View>
      <Header />
      <Text style={styles.textStyles}> Salaire</Text>
      <Card>
        <View style={styles.Container}>
          <Ionicons size={28} name="cash"></Ionicons>
          <Text style={styles.textStyle}>{Salaire} DA </Text>
        </View>
      </Card>
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
    marginLeft: 60,
  },
  textStyles: {
    fontSize: 35,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 45,
  },
  Container: {
    flexDirection: 'row',
  },
  Card: {
    marginTop: 50,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 19,
    paddingHorizontal: 19,
    borderRadius: 90,
    marginHorizontal: 5,
    marginVertical: 5,
    marginTop: 90,
    marginLeft: 60,
    marginRight: 60,
    elevation: 3,
    backgroundColor: '#6d358b',
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
};
export default Solde;
