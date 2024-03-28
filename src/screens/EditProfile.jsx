import React, {useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {launchImageLibrary} from 'react-native-image-picker';
import TextField from '../components/TextField';
import {Text} from 'react-native-paper';

const AddEmployee = () => {
  const [name, setName] = useState('Usama Fayyaz');
  const [username, setUsername] = useState('Usama@gmail.conm');
  const [password, setPassword] = useState('abc@123');
  const [image, setImage] = React.useState('');

  const openImagePicker = () => {
    let options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
      if (!response) {
        console.log('Invalid response from image picker');
        return;
      }
      if (
        response.assets &&
        response.assets.length > 0 &&
        response.assets[0].uri
      ) {
        console.log(response.assets[0].uri);
        setImage(response.assets[0].uri);
      } else {
        console.log('No valid image URI found in the response');
      }
    });
  };

  const renderImageContent = () => {
    if (image) {
      return (
        <Image
          source={{uri: image}}
          style={{
            width: 100,
            height: 100,
            borderRadius: 60,
            position: 'absolute',
          }}
        />
      );
    } else {
      return (
        <Icon
          name="add-a-photo"
          size={35}
          color="black"
          onPress={() => {
            openImagePicker();
          }}
        />
      );
    }
  };
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.design}></View>
      <View style={styles.whiteDesign}></View>
      <View style={styles.imageContainer}>{renderImageContent()}</View>
      <View style={{width: '100%', alignItems: 'center', marginTop: 80}}>
        <Text style={styles.hintStyle}>Name</Text>
        <TextField
          placeHolder=""
          value={name}
          onChangeText={text => setName(text)}
        />
        <Text style={styles.hintStyle}>Email</Text>
        <TextField
          placeHolder=""
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <Text style={styles.hintStyle}>Password</Text>

        <TextField
          placeHolder=""
          eyeIcon={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <ButtonComponent
          title="Update Profile"
          onPress={() => {
            console.warn('Profile Updated');
            navigation.navigate('Employee Profile');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '70%',
    marginBottom: 100,
  },
  imageContainer: {
    backgroundColor: '#c5e3e1',
    padding: 30,
    borderRadius: 600,
    position: 'absolute',
    top: 90,
    height: 100,
    width: 100,
  },
  design: {
    backgroundColor: '#2196F3',
    height: 140,
    width: '100%',
    borderBottomRightRadius: 140,
    borderBottomLeftRadius: 140,
    marginBottom: 55,
  },
  whiteDesign: {
    backgroundColor: 'white',
    borderRadius: 600,
    position: 'absolute',
    height: 112,
    width: 112,
    top: 84,
  },
  hintStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: '9%',
  },
});
export default AddEmployee;
