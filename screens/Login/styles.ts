import {StyleSheet} from 'react-native';
import {color} from '../../assets';
// import color from '../../../assets/themes/color';

export default StyleSheet.create({
  header: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
    minHeight: '100%',
    width: '100%',
    color: '#fff',
  },
  imageContainer: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 50,
  },
  loginContainer: {},
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  title: {
    paddingTop: 20,
    fontSize: 21,
    fontWeight: '500',
    textAlign: 'center',
  },
  auth: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 10,
    color: color.white,
    fontSize: 16,
  },
  authText: {
    color: color.white,
    fontSize: 16,
  },
  support: {
    color: color.white,
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
  },
});
