import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Income from '../screen/Income';
import Expenses from '../screen/Expenses';
import Savings from '../screen/Savings';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FIcon from 'react-native-vector-icons/FontAwesome5';
import COLORS from '../config/COLORS';
import {Image, Pressable, StatusBar, Text, View} from 'react-native';
import STYLES_CONSTANT from '../config/STYLES';
import {money} from '../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

function HomeNav({navigation}) {
  const Tabs = {
    Home: 'Home',
    Income: 'Income',
    Expenses: 'Expenses',
    Savings: 'Savings',
  };

  const [activeTab, setActiveTab] = useState(Tabs.Home);

  const updateState = (name) => {
    setActiveTab(name);
  };
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
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>10,000</Text>
            <MCIcon name="currency-inr" size={25} color={COLORS.primary} />
          </View>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Balance</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingEnd: activeTab == Tabs.Home ? 16 : 0,
          }}>
          {activeTab === Tabs.Home ? (
            <Image source={money} />
          ) : (
            <View
              style={{
                padding: 10,
                borderBottomStartRadius: 56 / 2,
                borderTopStartRadius: 56 / 2,
                backgroundColor: COLORS.grey,
              }}>
              <Pressable>
                <View
                  style={{
                    height: 35,
                    width: 35,
                    borderRadius: 40 / 2,
                    backgroundColor: COLORS.acent,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <MIcon name="add" size={30} color={COLORS.primary} />
                </View>
              </Pressable>
            </View>
          )}
        </View>
      </View>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === Tabs.Home) {
              iconName = 'wallet';
              return <MCIcon name={iconName} size={size} color={color} />;
            } else if (route.name === Tabs.Income) {
              iconName = 'payments';
              return <MIcon name={iconName} size={size} color={color} />;
            } else if (route.name === Tabs.Expenses) {
              iconName = 'payment';
              return <MIcon name={iconName} size={size} color={color} />;
            } else if (route.name === Tabs.Savings) {
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
        <Tab.Screen
          name={Tabs.Home}
          component={Home}
          listeners={{
            tabPress: (e) => {
              updateState(Tabs.Home);
              // Prevent default action
              // e.preventDefault();
            },
          }}
        />
        <Tab.Screen
          name={Tabs.Income}
          component={Income}
          listeners={{
            tabPress: (e) => {
              updateState(Tabs.Income);
            },
          }}
        />
        <Tab.Screen
          name={Tabs.Expenses}
          component={Expenses}
          listeners={{
            tabPress: (e) => {
              updateState(Tabs.Expenses);
            },
          }}
        />
        <Tab.Screen
          name={Tabs.Savings}
          component={Savings}
          listeners={{
            tabPress: (e) => {
              updateState(Tabs.Savings);
            },
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

export default HomeNav;
