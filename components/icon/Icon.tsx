import React from 'react';
import {View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

interface IconInterface {
  name: string;
}

export const Icon: React.FC<IconInterface> = ({name}) => {
  return (
    <View>
      {name === 'Home' && <FontAwesome name="home" size={23} color="#222" />}
      {name === 'Account' && (
        <MaterialIcon name="account-balance" size={23} color="#222" />
      )}
      {name === 'Wallet' && <AntDesign name="wallet" size={23} color="#222" />}
      {name === 'History' && (
        <MaterialIcon name="history" size={23} color="#222" />
      )}
    </View>
  );
};
