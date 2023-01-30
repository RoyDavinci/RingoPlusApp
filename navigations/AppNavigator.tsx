import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator} from './AuthNavigator';
import {HomeNavigator} from './HomeNavigator';
import {AuthContext} from '../contexts/AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppNavigator = () => {
  const {isLoggedIn} = useContext(AuthContext);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log(isLoggedIn, isAuthenticated);

  useEffect(() => {
    const getUser = async () => {
      const user = await AsyncStorage.getItem('user');
      user && setIsAuthenticated(true);
    };
    getUser();
    return () => {
      console.log('isAuthenticated');
    };
  });
  return (
    <NavigationContainer>
      {!isLoggedIn || isAuthenticated ? <AuthNavigator /> : <HomeNavigator />}
    </NavigationContainer>
  );
};
