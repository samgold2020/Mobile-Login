import { StyleSheet } from 'react-native';

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
  },
  logoText: {
    padding: 20,
    width: '50%',
    color: Colors.darkBlue,
    textAlign: 'center',
  },
  subContainer: {
    marginHorizontal: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: Colors.darkBlue,
    justifyContent: 'center',
    borderRadius: 5,
    height: 40,
  },
  buttonText: {
    color: Colors.mustard,
    fontSize: 24,
  },
});

export default styles;
