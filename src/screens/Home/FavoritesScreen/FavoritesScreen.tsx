//import liraries
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MyThemeColors} from '../../../theme/Theme';

// create a component
const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>FavoritesScreen</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MyThemeColors.whiteRedish,
  },
});

//make this component available to the app
export default FavoritesScreen;
