import React from 'react';

import { Text, TextInput } from 'react-native';

import styles from './styles';

const InputText = ({ error, errorMessage, title, style, ...rest }) => (
  <>
    <Text style={styles.titleStyle}>{title}</Text>
    <TextInput {...rest} style={[styles.inputStyle, { ...style }]} />
    {error && <Text style={styles.errorStyle}>{errorMessage}</Text>}
  </>
);

export default InputText;
