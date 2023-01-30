import React from 'react';
import {Text, View} from 'react-native';
import {Container} from '../../components/Container/Container';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

export const Home = () => {
  return (
    <View>
      <Container>
        <View style={styles.headerContainer}>
          <View style={styles.headerView}>
            <Text>Hi, Michael</Text>
            <Text>ID: 9876554</Text>
          </View>
          <View style={styles.headerView}>
            <View>
              <Text>
                <AntDesign name="reload1" /> ₦11.00
              </Text>
              <Text>Com: ₦0.00</Text>
            </View>
            <View>
              <MaterialIcon name="logout" />
              <Text>LogOut</Text>
            </View>
          </View>
        </View>
      </Container>
    </View>
  );
};
