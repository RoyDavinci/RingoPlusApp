/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ImageBackground, View} from 'react-native';
import {Logo} from '../../assets';

export const Container = ({children}: any) => {
  return (
    <View>
      <ImageBackground
        source={Logo}
        resizeMode="cover"
        style={{width: '100%', height: '100%'}}>
        {children}
      </ImageBackground>
    </View>
  );
};
