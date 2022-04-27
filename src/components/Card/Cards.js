import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function Cards(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 36,
    elevation: 10,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 5,
    marginVertical: 5,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    height: 500,
  },
  cardContent: {
    marginHorizontal: 72,
    marginVertical: 36,
  },
});
