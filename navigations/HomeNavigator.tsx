import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {HOME} from '../constants';
import {Home} from '../screens/Home/Home';

export const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name={HOME} component={Home} />
    </HomeStack.Navigator>
  );
};
