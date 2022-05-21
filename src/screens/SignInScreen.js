import React, { useState } from 'react';

import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

import InputText from '../components/InputText/index';
import styles from './styles';

const SignInScreen = () => {
  const [userCreds, setUserCreds] = useState({
    username: '',
    password: '',
  });

  //TODO hook up Error state
  const [error, setError] = useState({
    emailError: false,
    passwordError: false,
  });

  const isValid = () => {
    //TODO Hook up validity
    //1. Check for valid email with RegEx
    //2. Check for length of email
    //2.a optional - add tooltip and check for email with certain characters
  };

  const handleSumbit = () => {
    //TODO Hook up API
    //1. Show success for respons.200
    //1.a Reset state on successful submission
    //2. Show error if not 200
  };

  //TODO: Impliment ref
  // const passwordInputEl = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.logoText}>Login Test Form</Text>
      </View>
      <View style={styles.subContainer}>
        <InputText
          title="Email"
          value={userCreds.username}
          onChangeText={e => {
            setUserCreds({ ...userCreds, username: e });
          }}
          autoComplete="off"
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="next"
          errorMessage={'Invalid email'}
          //TODO - OnBlur to check validity
          //TODO - Set error state if invalid
          //TODO fix useRef onSubmitEditing={() => passwordInputEl.current.focus()}
        />
        <InputText
          title="Password"
          value={userCreds.password}
          onChangeText={e => {
            setUserCreds({ ...userCreds, password: e });
          }}
          autoComplete="off"
          autoCorrect={false}
          autoCapitalize="none"
          errorMessage={'Password must be at least 8 characters'}
          //TODO - OnBlur to check validity
          //TODO - Set error state if invalid
          //TODO fix ref={passwordInputEl}
        />
        <TouchableOpacity style={styles.button} onPress={isValid}>
          <Text style={styles.buttonText}>Press Here</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
