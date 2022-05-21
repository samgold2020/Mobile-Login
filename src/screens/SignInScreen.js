import React, { useState } from 'react';

import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  // ActivityIndicator,
  Image,
} from 'react-native';

import InputText from '../components/InputText/index';
import styles from './styles';
import { emailValidation, passValidation } from '../utils/validation';
import { userLogin } from '../../queryHelper';
import ProKeepLogo from '../assets/logo.png';

const SignInScreen = () => {
  const [userCreds, setUserCreds] = useState({
    username: '',
    password: '',
  });
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  /*TODO:
  1. Make API call with username and Password
  2. Set isLoading state to true
  3. Get Response
  3.a On successful response set loading to false and "Submit" button to "Success"
  3.a.1 Reset state
  3.b On unsuccessful response show Alert for error and try again later
   */
  const handleSubmit = async () => {
    const response = await userLogin(userCreds.username, userCreds.password);
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
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
