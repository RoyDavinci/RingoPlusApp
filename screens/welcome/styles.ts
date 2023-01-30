import {StyleSheet} from 'react-native';
import {color} from '../../assets';

export default StyleSheet.create({
  ringo: {
    fontSize: 30,
    marginVertical: 10,
    fontWeight: '700',
  },
  image: {
    height: '60%',
  },
  count: {
    backgroundColor: '#0B369D',
    padding: 4,
    color: color.white,
    width: 60,
    textAlign: 'center',
    borderRadius: 50,
  },
  create: {
    backgroundColor: '#0B369D',
    padding: 15,
    color: color.white,
    borderRadius: 5,
    marginVertical: 15,
  },
  login: {
    padding: 15,
    color: color.white,
    borderRadius: 5,
    borderColor: '#0B369D',
    borderWidth: 2,
    marginVertical: 4,
  },
  viewContainer: {
    padding: 15,
  },
  header: {
    marginVertical: 10,
  },
});
