import React, { useState } from 'react';

import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Alert,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import InputText from '../components/InputText/index';
import styles from './styles';
import { emailValidation, passValidation } from '../utils/validation';
import { createUser } from '../../queryHelper';
import ProKeepLogo from '../assets/logo.png';
import { Colors } from '../constants';

const SignInScreen = () => {
  const [userCreds, setUserCreds] = useState({
    username: '',
    password: '',
  });
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (isValid()) {
      setIsLoading(true);
      const response = await createUser(userCreds.username, userCreds.password);
      if (response.status === 200) {
        setIsLoading(false);
        Alert.alert('Your user has been successfully created');
        setUserCreds({ ...userCreds, username: '', password: '' });
      } else {
        Alert.alert('We have encountered an issue. Please try again later.');
      }
    }
  };

  const isValid = () => {
    setEmailValid(emailValidation.test(userCreds.username));
    setPasswordValid(passValidation.test(userCreds.password));
    return (
      emailValidation.test(userCreds.username) &&
      passValidation.test(userCreds.password)
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Image source={ProKeepLogo} style={styles.logo} />
        <Text style={styles.logoText}>Create Your Profile</Text>
      </View>

      <KeyboardAwareScrollView>
        <View style={styles.subContainer}>
          <InputText
            title="Username"
            value={userCreds.username}
            onChangeText={e => {
              setUserCreds({ ...userCreds, username: e });
              /*Invalidate if the user deletes all info from the field*/
              if (e.length === 0) {
                setEmailValid(false);
              }
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
              /*Invalidate if the user deletes all info from the field*/
              if (e.length === 0) {
                setPasswordValid(false);
              }
            }}
            autoComplete="off"
            autoCorrect={false}
            autoCapitalize="none"
            errorMessage={
              'Passwords must be at least eight characters including at least one letter, one number and one special character'
            }
            error={!passwordValid}
          />
        </View>
      </KeyboardAwareScrollView>
      <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
        {isLoading ? (
          <Text style={styles.buttonText}>
            <Text>
              <ActivityIndicator size="small" color={Colors.mustard} />
            </Text>
            {' Submitting'}
          </Text>
        ) : (
          <Text style={styles.buttonText}>Submit</Text>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignInScreen;
