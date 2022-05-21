import { StyleSheet } from 'react-native';

import { Colors } from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: Colors.lightBlue,
  },
  logoText: {
    padding: 20,
    width: '50%',
    color: Colors.mustard,
    textAlign: 'center',
  },
  subContainer: {
    marginHorizontal: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: Colors.darkBlue,
    padding: 10,
    borderRadius: 5,
    height: 40,
  },
  buttonText: {
    color: Colors.mustard,
    fontSize: 16,
  },
});

export default styles;
