import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

import { Colors } from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: Colors.netflixRed,
  },
  logo: {
    width: 375,
    height: undefined,
    aspectRatio: 2.5 / 1,
    borderRadius: 5,
    marginTop: '25%',
  },
  logoText: {
    color: Colors.black,
    fontSize: RFPercentage(3),
    fontWeight: '700',
  },
  subContainer: {
    marginHorizontal: 20,
  },
  button: {
    marginHorizontal: 20,
    alignItems: 'center',
    backgroundColor: Colors.netflixGrey,
    justifyContent: 'center',
    borderRadius: 5,
    height: 50,
    // borderColor: Colors.netflixGrey,
    // borderWidth: 1,
  },
  buttonText: {
    color: Colors.white,
    fontSize: RFPercentage(3),
    fontWeight: '700',
  },
});

export default styles;
