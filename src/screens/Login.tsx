import React, {useState} from 'react';
import {
  Image,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  ToastAndroid,
} from 'react-native';
import TextField from '../components/TextField';
import ButtonComponent from '../components/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native';
import {Text} from 'react-native';
const Login = () => {
  const [usernameEmail, setUsernameEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameEmailChange = (text: string) => {
    setUsernameEmail(text); // Update the username/email state with the input text
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text); // Update the password state with the input text
  };

  const navigation = useNavigation();
  const handleLoginPress = () => {
    if (usernameEmail === '' && password === '') {
      navigation.navigate('Admin Dashboard' as never);
      setUsernameEmail('');
      setPassword('');
    } else {
      ToastAndroid.show(
        'Incorrect credentials. Please try again.',
        ToastAndroid.LONG,
      );
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.containerStyle}>
          <View style={styles.imageContainer}>
            <Image source={require('../../assets/images/front.jpg')} />
            <Text style={styles.titleStyle}>Industrial Watch</Text>
          </View>
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
          <ButtonComponent title="Login" onPress={handleLoginPress} />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 300,
    height: 250,
    marginTop: 100,
    marginBottom: 50,
    alignItems: 'center',
  },
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  titleStyle: {fontSize: 30, color: 'black', fontWeight: 'bold'},
});
export default Login;
