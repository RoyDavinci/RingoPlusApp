/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {LOGIN, SIGNUP} from '../../constants';
import {items} from '../../helpers/welcome';
import styles from './styles';

export const Welcome = ({navigation}: any) => {
  const [detail, setDetail] = useState<number>(0);

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (detail === items.length - 1) {
        setDetail(0);
      } else {
        setDetail(prev => prev + 1);
      }
    }, 2000);

    return () => {
      clearInterval(myInterval);
    };
  }, [detail]);

  return (
    <View>
      <Image source={items[detail].image} style={styles.image} />
      <View style={styles.viewContainer}>
        <View>
          <Text style={styles.count}>{`${detail + 1} of ${items.length}`}</Text>
          <Text style={styles.ringo}>{items[detail].title}</Text>
          <Text>{items[detail].subtitle}</Text>
          <View>
            {/* <Text />
          <Text />
          <Text /> */}
          </View>
        </View>
        <TouchableOpacity
          style={styles.create}
          onPress={() => navigation.navigate(SIGNUP)}>
          <Text style={{color: '#fff', textAlign: 'center', fontSize: 16}}>
            Create An Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.login}
          onPress={() => {
            navigation.navigate(LOGIN);
            console.log('cliekced');
          }}>
          <Text style={{color: '#000', textAlign: 'center', fontSize: 16}}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
