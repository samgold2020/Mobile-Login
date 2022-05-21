import React from 'react';

import { Text, TextInput, View } from 'react-native';

import styles from './styles';

const InputText = ({ error, errorMessage, title, style, ...rest }) => (
  <View style={{ marginBottom: 20 }}>
    <Text style={styles.titleStyle}>{title}</Text>
    <TextInput {...rest} style={[styles.inputStyle, { ...style }]} />
    {error && <Text style={styles.errorStyle}>{errorMessage}</Text>}
  </View>
);

export default InputText;
