import React, {useState} from 'react';
import {
  Image,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  ToastAndroid,
  Dimensions,
} from 'react-native';
import TextField from '../components/TextField';
import ButtonComponent from '../components/ButtonComponent';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {ScrollView} from 'react-native';
import {Text} from 'react-native';
import API_URL from '../../apiConfig';

const {width, height} = Dimensions.get('window');

const Login = () => {
  const [usernameEmail, setUsernameEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLoginPress = async () => {
    try {
      if (!usernameEmail.trim() || !password.trim()) {
        ToastAndroid.show(
          'Please provide necessary credentials.',
          ToastAndroid.SHORT,
        );
        return;
      }

      const response = await fetch(
        `${API_URL}/Employee/Login?username=${usernameEmail.trim()}&password=${password.trim()}`,
      );

      if (!response.ok) {
        ToastAndroid.show(
          'Incorrect credentials. Please try again.',
          ToastAndroid.SHORT,
        );
        return;
      }

      const data = await response.json();
      let role = data.user_role.toLowerCase();

      if (role === 'supervisor') {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'Supervisor Dashboard', params: {name: data.name}}],
          }),
        );
      } else if (role === 'employee') {
        navigation.navigate('Employee Login');
      } else if (role === 'admin') {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'Admin Dashboard', params: {name: data.name}}],
          }),
        );
      } else {
        ToastAndroid.show(
          'Incorrect credentials. Please try again.',
          ToastAndroid.SHORT,
        );
        return;
      }
      setUsernameEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error occurred during login:', error);
    }
  };

  const handleUsernameEmailChange = text => {
    setUsernameEmail(text);
  };

  const handlePasswordChange = text => {
    setPassword(text);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/front.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.titleStyle}>Industrial Watch</Text>
        </View>
        <View style={styles.formContainer}>
          <TextField
            placeHolder="Username/Email"
            value={usernameEmail}
            onChangeText={handleUsernameEmailChange}
          />
          <TextField
            placeHolder="Password"
            eyeIcon={true}
            value={password}
            onChangeText={handlePasswordChange}
          />
          <View style={styles.buttonWrapper}>
            <ButtonComponent title="Login" onPress={handleLoginPress} />
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  imageContainer: {
    alignItems: 'center',
    marginTop: height * 0.1,
    marginBottom: height * 0.05,
  },
  image: {
    width: width * 0.8,
    height: height * 0.27,
  },
  titleStyle: {
    fontSize: width * 0.08,
    color: 'black',
    fontWeight: 'bold',
  },
  formContainer: {
    alignItems: 'center',
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
});

export default Login;
