import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

import { Colors } from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: Colors.lightBlue,
  },
  logo: {
    width: 325,
    height: undefined,
    aspectRatio: 3.8 / 1,
    borderRadius: 5,
    marginTop: '50%',
  },
  logoText: {
    padding: 20,
    width: '75%',
    color: Colors.darkBlue,
    textAlign: 'center',
    fontSize: RFPercentage(3),
  },
  subContainer: {
    marginHorizontal: 20,
  },
  button: {
    marginHorizontal: 20,
    alignItems: 'center',
    backgroundColor: Colors.darkBlue,
    justifyContent: 'center',
    borderRadius: 5,
    height: 40,
  },
  buttonText: {
    color: Colors.mustard,
    fontSize: RFPercentage(3),
  },
});

export default styles;
