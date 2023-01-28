import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {LOGIN, SIGNUP} from '../constants';
import {Login} from '../screens';
import {SignUp} from '../screens/SignUp/SignUp';

export const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={LOGIN} component={Login} />
      <AuthStack.Screen name={SIGNUP} component={SignUp} />
    </AuthStack.Navigator>
  );
};
