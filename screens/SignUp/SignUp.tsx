/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {Logo} from '../../assets';
import {Input} from '../../components';
import {CustomButton} from '../../components/button/CustomButton';
import {LOGIN} from '../../constants';
import styles from './styles';

export const SignUp = ({navigation}: any) => {
  const [userDetail, setUserDetail] = useState({
    email: '',
    password: '',
    phone: '',
    forgotPassword: '',
    first_name: '',
    last_name: '',
  });
  const [isSecure, setIsSecure] = useState({
    password: true,
    confirmPassword: true,
  });
  const checkSubmit = async () => {
    Object.values(userDetail).forEach(item => {
      if (item === '') {
        return console.log('Missing input Fields', item);
      }
    });

    console.log(userDetail);
    console.log('user');
    setUserDetail({
      email: '',
      password: '',
      phone: '',
      forgotPassword: '',
      first_name: '',
      last_name: '',
    });
  };

  return (
    <View>
      <ImageBackground
        source={Logo}
        resizeMode="cover"
        style={{width: '100%', height: '100%'}}>
        <View style={styles.header}>
          <Input
            style={styles.title}
            secure={false}
            value={userDetail.first_name}
            placeholderTextColor="#000"
            placeholder="First Name"
            onChangeText={text =>
              setUserDetail({...userDetail, first_name: text})
            }
          />
          <Input
            style={styles.title}
            secure={false}
            value={userDetail.last_name}
            placeholderTextColor="#000"
            placeholder="Last Name"
            onChangeText={text =>
              setUserDetail({...userDetail, last_name: text})
            }
          />
          <Input
            style={styles.title}
            secure={false}
            value={userDetail.phone}
            placeholderTextColor="#000"
            placeholder="Enter Your Number"
            onChangeText={text => setUserDetail({...userDetail, phone: text})}
          />
          <Input
            style={styles.title}
            secure={false}
            value={userDetail.email}
            placeholderTextColor="#000"
            placeholder="Enter Your Email"
            onChangeText={text => setUserDetail({...userDetail, email: text})}
          />
          <Input
            style={styles.title}
            placeholder="Enter Your Password"
            placeholderTextColor="#000"
            secure={isSecure.password}
            value={userDetail.password}
            onChangeText={text =>
              setUserDetail({...userDetail, password: text})
            }
            icon={
              <TouchableOpacity
                onPress={() =>
                  setIsSecure({...isSecure, password: !isSecure.password})
                }>
                <Text>{isSecure.password ? 'Show' : 'Hide'}</Text>
              </TouchableOpacity>
            }
            iconPosition="right"
          />
          <Input
            style={styles.title}
            placeholder="Confirm Password"
            placeholderTextColor="#000"
            secure={isSecure.confirmPassword}
            value={userDetail.forgotPassword}
            onChangeText={text =>
              setUserDetail({...userDetail, forgotPassword: text})
            }
            icon={
              <TouchableOpacity
                onPress={() =>
                  setIsSecure({
                    ...isSecure,
                    confirmPassword: !isSecure.confirmPassword,
                  })
                }>
                <Text>{isSecure.confirmPassword ? 'Show' : 'Hide'}</Text>
              </TouchableOpacity>
            }
            iconPosition="right"
          />
          <CustomButton
            disabled={false}
            title="SignUp"
            primary
            onPress={checkSubmit}
          />
          <Text
            style={styles.support}
            onPress={() => navigation.navigate(LOGIN)}>
            Login instead
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};
