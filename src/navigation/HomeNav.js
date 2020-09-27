import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Income from '../screen/Income';
import Expenses from '../screen/Expenses';
import Savings from '../screen/Savings';

const Tab = createBottomTabNavigator();

function HomeNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Income" component={Income} />
      <Tab.Screen name="Expenses" component={Expenses} />
      <Tab.Screen name="Savings" component={Savings} />
    </Tab.Navigator>
  );
}

export default HomeNav;
