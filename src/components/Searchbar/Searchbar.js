import * as React from 'react';
import {Searchbar} from 'react-native-paper';
import {StyleSheet} from 'react-native';

const seachbar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      style={styles.search}
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};
const styles = StyleSheet.create({
  search: {
    width: 340,
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
  },
});

export default seachbar;
