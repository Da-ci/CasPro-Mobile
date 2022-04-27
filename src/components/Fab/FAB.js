import * as React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {FAB} from 'react-native-paper';

const Fab = () => (
  <TouchableOpacity onPress={() => alert('FAB clicked')} style={styles.fab}>
    <Text style={styles.fabIcon}>+</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#03A9F4',
    borderRadius: 30,
    elevation: 8,
  },
  fabIcon: {
    fontSize: 40,
    color: 'white',
  },
});

export default Fab;
