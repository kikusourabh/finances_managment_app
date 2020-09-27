import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Income from '../screen/Income';
import Expenses from '../screen/Expenses';
import Savings from '../screen/Savings';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FIcon from 'react-native-vector-icons/FontAwesome5';
import COLORS from '../config/COLORS';
import {Image, StatusBar, Text, View} from 'react-native';
import STYLES_CONSTANT from '../config/STYLES';
import {money} from '../assets';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function HomeNav() {
  return (
    <View style={STYLES_CONSTANT.mainContainer}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.acent} />
      <View
        style={{
          backgroundColor: COLORS.acent,
          height: '15%',
          borderBottomEndRadius: 22,
          borderBottomStartRadius: 22,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 4,
          flexDirection: 'row',
        }}>
        <View style={{flex: 3, justifyContent: 'center', paddingStart: 16}}>
          {/* content */}
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Balance</Text>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>10,000</Text>
            <Icon name="currency-inr" size={25} color={COLORS.primary} />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingEnd: 16,
          }}>
          {/* image */}
          <Image source={money} />
        </View>
      </View>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'wallet';
              return <MCIcon name={iconName} size={size} color={color} />;
            } else if (route.name === 'Income') {
              iconName = 'payments';
              return <MIcon name={iconName} size={size} color={color} />;
            } else if (route.name === 'Expenses') {
              iconName = 'payment';
              return <MIcon name={iconName} size={size} color={color} />;
            } else if (route.name === 'Savings') {
              iconName = 'piggy-bank';
              return <FIcon name={iconName} size={size} color={color} />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: COLORS.primary,
          inactiveTintColor: COLORS.secondary,
          labelStyle: {
            fontSize: 16,
            marginBottom: 16,
          },
          iconStyle: {
            marginTop: 16,
          },
          style: {
            height: 80,
            borderTopStartRadius: 40,
            borderTopEndRadius: 40,
          },
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Income" component={Income} />
        <Tab.Screen name="Expenses" component={Expenses} />
        <Tab.Screen name="Savings" component={Savings} />
      </Tab.Navigator>
    </View>
  );
}

export default HomeNav;
