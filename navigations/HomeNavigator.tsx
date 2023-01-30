/* eslint-disable react/no-unstable-nested-components */
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {ACCOUNT, HISTORY, HOME, WALLET} from '../constants';
import {Home} from '../screens/Home/Home';
import {Account} from '../screens/Account/Account';
import {Wallet} from '../screens/Wallet/Wallet';
import {History} from '../screens/history/History';
import {MyTabBar} from '../components/TabBar/TabBar';

function HomeTabs() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={HISTORY} component={History} />
      <Tab.Screen name={WALLET} component={Wallet} />
      <Tab.Screen name={ACCOUNT} component={Account} />
    </Tab.Navigator>
  );
}
export const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="HomeTabs" component={HomeTabs} />
    </HomeStack.Navigator>
  );
};
