//import liraries
import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {MyThemeColors} from '../../theme/Theme';

// create a component
const LoadingContainer = () => {
  return (
    <View style={styles.containerActivityIndicator}>
      <ActivityIndicator size={'large'} style={styles.activityIndicator} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  containerActivityIndicator: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MyThemeColors.whiteRedish,
  },
  activityIndicator: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: MyThemeColors.bleu,
  },
});

//make this component available to the app
export default LoadingContainer;
