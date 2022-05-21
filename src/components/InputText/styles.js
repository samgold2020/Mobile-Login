import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

import { Colors } from '../../constants';

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: RFPercentage(2),
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
    fontSize: RFPercentage(1.5),
  },
});

export default styles;
