import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  titleStyle: {
    //TODO: Remove hardcoded fontsize
    fontSize: 16,
  },
  inputStyle: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  errorStyle: {
    //TODO Add Red error to colors file
    color: 'red',
    //TODO: Remove hardcoded fontsize
    fontSize: 10,
  },
});

export default styles;
