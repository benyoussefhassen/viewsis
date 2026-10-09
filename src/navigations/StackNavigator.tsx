import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';
import {CloseIcon, PolitisLogo} from '../assets/images';
import {
  EditionsScreen,
  FavoritesScreen,
  HomeScreen,
  KiosqueScreen,
  Login,
  PostDetailScreen,
  PostsListScreen,
  SignUp,
} from '../screens';
import {MyThemeColors} from '../theme/Theme';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({}) => ({
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,

          headerTitle: () => <PolitisLogo color={MyThemeColors.white} />,

          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
      <Stack.Screen
        name="KiosqueScreen"
        component={KiosqueScreen}
        options={({}) => ({
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,

          headerTitle: () => <PolitisLogo color={MyThemeColors.white} />,

          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
      <Stack.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={({}) => ({
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,

          headerTitle: () => <PolitisLogo color={MyThemeColors.white} />,

          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
      <Stack.Screen
        name="EditionsScreen"
        component={EditionsScreen}
        options={({}) => ({
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,

          headerTitle: () => <PolitisLogo color={MyThemeColors.white} />,
 
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
        /* options={({navigation}) => ({
          headerTitleAlign: 'center',

          headerTitle: () => <PolitisLogo color={MyThemeColors.white} />,
           headerRight: () => (
            <ProfileIcon onPress={() => navigation.navigate('Login')} />
          ),
          //  headerLeft: () => <ProfileIconWhite />,
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}*/
      />
      <Stack.Screen
        name="PostsListScreen"
        component={PostsListScreen}
        options={({route}: any) => ({
          headerTitleAlign: 'center',
          title: route.params.titre,
          headerBackTitleVisible: false,

          // title: '',
          /*headerTitle: () => <PolitisLogo color={MyThemeColors.white} />,
          headerRight: () => (
            <ProfileIcon onPress={() => navigation.navigate('Login')} />
          ),*/
          //  headerLeft: () => <ProfileIconWhite />,
          headerStyle: {
            backgroundColor: MyThemeColors.brown,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={({navigation}:any) => ({
          headerTitleAlign: 'center',
          headerTitle: () => <PolitisLogo color={MyThemeColors.black} />,
          headerRight: () => <CloseIcon onPress={() => navigation.goBack()} />,
          //  headerLeft: () => <ProfileIconWhite />,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: MyThemeColors.white,
          },
          headerTintColor: MyThemeColors.black,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
      <Stack.Screen
        name="PostDetailScreen"
        component={PostDetailScreen}
        options={({}) => ({
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,

          headerTitle: () => <PolitisLogo color={MyThemeColors.white} />,

          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
    </Stack.Navigator>
  );
};
export type RootStackParamList = {
  HomeScreen: undefined;
  KiosqueScreen: undefined;
  PostsListScreen: PostsListParams | undefined;
  FavoritesScreen: undefined;
  Login: undefined;
  PostDetailScreen: DetailPostParams | undefined;
};

export interface DetailPostParams {
  id: string;
  title: string;
}
export interface PostsListParams {
  id: string;
  titre: string;
  type: string;
}

export type HomeScreenProp = StackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

export {MainStack};
