import { StyleSheet } from 'react-native';

import { Colors } from '../../constants';

const styles = StyleSheet.create({
  titleStyle: {
    //TODO: Remove hardcoded fontsize
    fontSize: 16,
    color: Colors.darkBlue,
    paddingBottom: 5,
  },
  inputStyle: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: Colors.darkBlue,
  },
  errorStyle: {
    color: Colors.errorRed,
    //TODO: Remove hardcoded fontsize
    fontSize: 12,
  },
});

export default styles;
