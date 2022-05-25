import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

import { Colors } from '../../constants';

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: RFPercentage(2),
    color: Colors.black,
    paddingBottom: 5,
    fontWeight: '700',
  },
  inputStyle: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: Colors.black,
  },
  errorStyle: {
    color: Colors.white,
    fontSize: RFPercentage(1.5),
    fontWeight: '700',
  },
});

export default styles;
