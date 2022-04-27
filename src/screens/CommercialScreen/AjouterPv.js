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
import axios from 'axios';
import CustomInput from '../../components/CustomInput';
import Header from '../../components/header/Header';

const AjouterPv = ({navigation}, props) => {
  const [nom, setnom] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [wilaya, setwilaya] = useState('');
  const [commune, setcommune] = useState('');
  const [adresse, setadresse] = useState('');
  const [rc, setrc] = useState('');
  const [nif, setnif] = useState('');
  const [nis, setnis] = useState('');
  const [ai, setai] = useState('');

  const AjouterPvPressed = navigation => {
    axios
      .post('http://10.0.2.2:8000/api/createPdv', {
        name: nom,
        email: email,
        phone: phone,
        wilaya: wilaya,
        commune: commune,
        adresse: adresse,
        RC: rc,
        NIF: nif,
        NIS: nis,
        AI: ai,
      })
      .then(rsp => {
        console.log(rsp.data);
      })
      .catch(error => {
        console.log('Login Failed !');
        console.log(error);
      });
  };

  return (
    <View>
      <Header />
      <ScrollView>
        <View style={styles.modalView}>
          <Text style={styles.ztext}>Ajouter Un Point De Vente {'\n'}</Text>
          <Text style={styles.modalText}>NOM </Text>
          <CustomInput style={styles.input} setValue={setnom} value={nom} />
          <Text style={styles.modalText}>PHONE</Text>
          <CustomInput style={styles.input} setValue={setphone} value={phone} />
          <Text style={styles.modalText}>EMAIL</Text>
          <CustomInput style={styles.input} setValue={setemail} value={email} />
          <Text style={styles.modalText}>WILAYA</Text>
          <CustomInput
            style={styles.input}
            setValue={setwilaya}
            value={wilaya}
          />
          <Text style={styles.modalText}>COMMUNE</Text>
          <CustomInput
            style={styles.input}
            setValue={setcommune}
            value={commune}
          />
          <Text style={styles.modalText}>ADRESSE</Text>
          <CustomInput
            style={styles.input}
            setValue={setadresse}
            value={adresse}
          />
          <Text style={styles.modalText}>REGISTRE DE COMMERCE</Text>
          <CustomInput style={styles.input} setValue={setrc} value={rc} />
          <Text style={styles.modalText}>NUMERO D'IDENTIFICATION FISCALE</Text>
          <CustomInput style={styles.input} setValue={setnif} value={nif} />
          <Text style={styles.modalText}>
            NUMERO D'IDENTIFICATION STATISTIQUE
          </Text>
          <CustomInput style={styles.input} setValue={setnis} value={nif} />
          <Text style={styles.modalText}>ARTICLE D'IMPOSITION</Text>
          <CustomInput style={styles.input} setValue={setai} value={ai} />
          <View style={styles.Container}>
            <Pressable
              style={[styles.buttonAjouter]}
              onPress={() => {
                AjouterPvPressed();
                navigation.navigate('Pv');
              }}>
              <Text style={styles.texteStyle}>Ajouter</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = {
  modalText: {
    marginBottom: 10,

    fontSize: 15,
  },
  ztext: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
  },
  centeredView: {
    flex: 1,

    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#FFF8E3',
    borderRadius: 15,
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
    fontSize: 20,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#6d358b',
    marginTop: 20,
    width: 100,
  },
  buttonAjouter: {
    backgroundColor: '#6d358b',
    borderRadius: 20,
    marginTop: 10,
    padding: 10,
    fontSize: 20,
    width: 200,
    elevation: 2,
  },
  texteStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
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
  input: {},
  textStyle: {
    fontSize: 20,

    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
};
export default AjouterPv;
