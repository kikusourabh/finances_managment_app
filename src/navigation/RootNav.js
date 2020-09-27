import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeNav from './HomeNav';

const RootStack = createStackNavigator();

function RootNav() {
  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="HomeNav" component={HomeNav} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootNav;
