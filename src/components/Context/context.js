import {StyleSheet, View} from 'react-native';
import React, {createContext, useState} from 'react';

export const Auth = createContext();

const Context = props => {
  const {children} = props;
  const [account, setAccount] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const updateAccount = val => {
    console.log('second', val);
    setAccount(val);
  };
  const updateEmail = val => {
    console.log('second', val);
    setEmail(val);
  };
  const updatePassword = val => {
    console.log('second', val);
    setPassword(val);
  };
  const state = {
    AllContextValues: {
      account,
      updateAccount,
      email,
      updateEmail,
      password,
      updatePassword,
    },
  };
  return (
    <Auth.Provider value={state.AllContextValues}>{children}</Auth.Provider>
  );
};

export default Context;
