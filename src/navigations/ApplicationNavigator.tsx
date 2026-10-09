import React, { useEffect } from 'react';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { useAppDispatch, useAppSelector } from '../hooks/store.hooks';
import { getHomeDataServerAction } from '../store/reducers/home/home.actions';
import { getDifferenceInDays } from '../utils/DateTimeFunctions';
import { MainStack } from './StackNavigator';

// @refresh reset
function ApplicationNavigator() {
  const lastUpdateHomeState = useAppSelector(state => state.home.lastUpdate);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (lastUpdateHomeState != null) {
      console.log(
        'lastUpdateHomeState diffDays',
        getDifferenceInDays(lastUpdateHomeState, new Date().toString()),
      );
      if (getDifferenceInDays(lastUpdateHomeState, new Date().toString()) > 1) {
        dispatch(getHomeDataServerAction());
      }
    } else {
      dispatch(getHomeDataServerAction());
    }
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
});
export default ApplicationNavigator;
