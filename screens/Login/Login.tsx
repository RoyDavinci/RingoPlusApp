/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {ImageBackground, Text, View, TouchableOpacity} from 'react-native';
import {Logo} from '../../assets/';
import {Input} from '../../components';
import {CustomButton} from '../../components/button/CustomButton';
import {SIGNUP} from '../../constants';
import styles from './styles';

export const Login = ({navigation}: any) => {
  const [userDetail, setUserDetail] = useState({email: '', password: ''});
  const [isSecure, setIsSecure] = useState(true);
  const checkSubmit = async () => {
    if (userDetail.email === '' || userDetail.password === '') {
      return console.log('Missing input Fields');
    }
    console.log(userDetail);
    console.log('user');
    setUserDetail({email: '', password: ''});
  };

  return (
    <View style={styles.loginContainer}>
      <ImageBackground
        source={Logo}
        resizeMode="cover"
        style={{width: '100%', height: '100%'}}>
        <View style={styles.header}>
          <Input
            style={styles.title}
            label="Email"
            secure={false}
            value={userDetail.email}
            placeholderTextColor="#000"
            placeholder="Enter Your Email"
            onChangeText={text => setUserDetail({...userDetail, email: text})}
          />
          <Input
            style={styles.title}
            placeholder="Enter Your Password"
            label="Password"
            placeholderTextColor="#000"
            secure={isSecure}
            value={userDetail.password}
            onChangeText={text =>
              setUserDetail({...userDetail, password: text})
            }
            icon={
              <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
                <Text>{isSecure ? 'Show' : 'Hide'}</Text>
              </TouchableOpacity>
            }
            iconPosition="right"
          />
          <CustomButton
            disabled={false}
            title="Login"
            primary
            onPress={checkSubmit}
          />
          <View style={styles.auth}>
            <Text style={styles.authText}> Forgot Password?</Text>
            <Text
              style={styles.authText}
              onPress={() => navigation.navigate(SIGNUP)}>
              Register Now!
            </Text>
          </View>
          <Text style={styles.support}>Contact Support</Text>
        </View>
      </ImageBackground>
    </View>
  );
};
