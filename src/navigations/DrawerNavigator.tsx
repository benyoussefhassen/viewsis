//import liraries
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {HomeScreen} from '../screens';

const Drawer = createDrawerNavigator();

// create a component
function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
