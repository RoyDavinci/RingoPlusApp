import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {LOGIN, SIGNUP, WELCOME} from '../constants';
import {Login} from '../screens';
import {SignUp} from '../screens/SignUp/SignUp';
import {Welcome} from '../screens/welcome/Welcome';

export const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator
      initialRouteName="Welcome"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={WELCOME} component={Welcome} />
      <AuthStack.Screen name={LOGIN} component={Login} />
      <AuthStack.Screen name={SIGNUP} component={SignUp} />
    </AuthStack.Navigator>
  );
};
