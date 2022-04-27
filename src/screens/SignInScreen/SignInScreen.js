import React, {useState, useContext} from 'react';
import {View, Text, TextInput, Image, Button, StyleSheet} from 'react-native';
import Logo from '../../../assets/images/Logo1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import validator from 'validator';
import axios from 'axios';
import {NavigationContainer} from '@react-navigation/native';
import {Auth} from '../../components/Context/context';

export default function Home({navigation}) {
  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const {updateEmail, updatePassword} = useContext(Auth);
  const onSignInPressed = () => {
    axios
      .post('http://10.0.2.2:8000/api/login', {
        login: userEmail,
        password: userPassword,
      })
      .then(rsp => {
        console.log(rsp.data);
        if (rsp.data.message == 'Success') {
          if (rsp.data.type == 'Commercial') {
            updateEmail(userEmail);
            updatePassword(userPassword);
            navigation.navigate('MainContainer');
          } else if (rsp.data.type == 'Livreur') {
            updateEmail(userEmail);
            updatePassword(userPassword);
            navigation.navigate('Container');
          } else {
            alert('Compte Interdit');
          }
        } else {
          alert('Erreur de Mail ou Mots De Passe');
        }
      })
      .catch(error => {
        console.log('Login Failed !');
        console.log(error);
      });
  };

  return (
    <View style={styles.root}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
      <CustomInput placeholder="pseudo" value={userEmail} setValue={setEmail} />
      <CustomInput
        placeholder="Mot de Passe"
        value={userPassword}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomButton text="Connexion" onPress={onSignInPressed} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 30,
  },

  logo: {
    marginBottom: '15%',
    width: '100%',
    maxWidth: 800,
    height: 200,
  },
});
