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
    setIsLoading(true);
    const response = await createUser(userCreds.username, userCreds.password);
    if (response.status === 200) {
      setIsLoading(false);
      Alert.alert('Your user has been successfully created');
    } else {
      Alert.alert('We have encountered an issue. Please try again later.');
    }
  };

  const validate = () => {
    setEmailValid(emailValidation.test(userCreds.username));
    setPasswordValid(passValidation.test(userCreds.password));
    if (emailValid && passwordValid) {
      handleSubmit();
    }
  };

  //TODO add tooltip explaining password requirements
  //TODO: Impliment ref
  // const passwordInputEl = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Image source={ProKeepLogo} style={styles.logo} />
        <Text style={styles.logoText}>Create Your Profile</Text>
      </View>
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
          //TODO fix useRef onSubmitEditing={() => passwordInputEl.current.focus()}
        />
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
          //TODO fix ref={passwordInputEl}
        />
        {/* TODO: Pass isLoading prop to button and change button to success */}
        <TouchableOpacity style={styles.button} onPress={() => validate()}>
          {isLoading ? (
            <>
              <Text style={styles.buttonText}>
                <Text>
                  <ActivityIndicator size="small" color={Colors.mustard} />
                </Text>
                Submitting
              </Text>
            </>
          ) : (
            <Text style={styles.buttonText}>Submit</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
