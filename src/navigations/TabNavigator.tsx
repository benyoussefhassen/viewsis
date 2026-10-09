//import liraries
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  DownLoadIcon,
  FavorisIcon,
  HomeIcon,
  KiosqueIcon,
} from '../assets/images';
import {MyThemeColors} from '../theme/Theme';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../utils/PixelSize';
import {MainStack} from './StackNavigator';

const Tab = createBottomTabNavigator();

// create a component
const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Accueil"
      screenOptions={{
        tabBarActiveTintColor: MyThemeColors.red,
        tabBarInactiveTintColor: MyThemeColors.black,

        tabBarLabelStyle: {
          textTransform: 'capitalize',
          fontSize: fontPixel(10),
          fontWeight: 'bold',
          fontFamily: 'Lato',
          alignSelf: 'center',
        },
        //tabBarIconStyle: {alignSelf: 'center'},

        tabBarStyle: {
          position: 'absolute',
          left: 10,
          bottom: 10,
          right: 10,
          backgroundColor: MyThemeColors.white,
          elevation: 5,
          //  borderCurve: 'circular',
          borderRadius: 70,
          paddingHorizontal: pixelSizeHorizontal(10),
          //paddingVertical: 10,
          paddingBottom: pixelSizeVertical(5),
          height: heightPixel(70),
          marginHorizontal: pixelSizeHorizontal(10),
        },
      }}
      // tabBar={props => <CustomTabBar props={props} />}
    >
      <Tab.Screen
        name="Accueil"
        component={MainStack}
        initialParams={{screen: 'HomeScreen'}}
        options={{
          headerShown: false,
          tabBarLabel: 'Accueil',
          tabBarIcon: ({focused}) => <HomeIcon focused={focused} />,
          //tabBarBadge: 0,
        }}
      />
      <Tab.Screen
        name="Kiosque"
        component={MainStack}
        initialParams={{screen: 'KiosqueScreen'}}
        options={{
          headerShown: false,
          tabBarLabel: 'Kiosque',
          tabBarIcon: ({focused}) => <KiosqueIcon focused={focused} />,
          //tabBarBadge: 0,
        }}
      />
      <Tab.Screen
        name="Mes favoris"
        component={MainStack}
        initialParams={{screen: 'FavoritesScreen'}}
        options={{
          headerShown: false,
          tabBarLabel: 'Mes favoris',
          tabBarIcon: ({focused}) => <FavorisIcon focused={focused} />,
          //tabBarBadge: 0,
        }}
      />
      <Tab.Screen
        name="Mes éditions"
        component={MainStack}
        initialParams={{screen: 'EditionsScreen'}}
        options={{
          headerShown: false,
          tabBarLabel: 'Mes éditions',
          tabBarIcon: ({focused}) => <DownLoadIcon focused={focused} />,
          //tabBarBadge: 0,
        }}
      />
    </Tab.Navigator>
  );
};

//make this component available to the app
export default TabNavigator;
