import React, { useState } from 'react';

import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import InputText from '../components/InputText/index';
import styles from './styles';
import { emailValidation } from '../utils/validation';
import { userLogin } from '../queryHelper';
import Logo from '../assets/logo.png';

const SignInScreen = () => {
  const [userCreds, setUserCreds] = useState({
    username: '',
    password: '',
  });
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const handleSubmit = async () => {
    if (isValid()) {
      try {
        const response = await userLogin(
          userCreds.username,
          userCreds.password,
        );
        if (response.status === 200) {
          Alert.alert('Login Successful');
          setUserCreds({ ...userCreds, username: '', password: '' });
        }
      } catch (e) {
        Alert.alert('Username or password is incorrect');
      }
    }
  };

  /*
  If input is less than 2 setPasswordValid to false. 
  Otherwise, setPasswordValid to true
  */

  //TODO Fix isValid Logic & CheckLength Logic
  const checkLength = input => input.length < 2;

  const isValid = () => {
    setEmailValid(emailValidation.test(userCreds.username));
    setPasswordValid(checkLength(userCreds.password));
    console.log(checkLength(userCreds.password));
    return (
      emailValidation.test(userCreds.username) &&
      checkLength(userCreds.password)
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.logoText}>Sign In</Text>
      </View>

      <KeyboardAwareScrollView>
        <View style={styles.subContainer}>
          <InputText
            title="Username"
            value={userCreds.username}
            onChangeText={e => {
              setUserCreds({ ...userCreds, username: e });
              /*Invalidate if the user deletes all info from the field*/
              e.length === 0 ? setEmailValid(false) : setEmailValid(true);
            }}
            autoComplete="off"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            errorMessage={'Invalid email'}
            error={!emailValid}
          />
        </View>
        <View style={styles.subContainer}>
          <InputText
            title="Password"
            value={userCreds.password}
            onChangeText={e => {
              setUserCreds({ ...userCreds, password: e });
              /*Invalidate if the password is under two characters*/
              e.length < 2 ? setPasswordValid(false) : setPasswordValid(true);
            }}
            autoComplete="off"
            autoCorrect={false}
            autoCapitalize="none"
            errorMessage={'Passwords must be a minimum of two characters'}
            error={!passwordValid}
          />
        </View>
      </KeyboardAwareScrollView>
      <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignInScreen;
