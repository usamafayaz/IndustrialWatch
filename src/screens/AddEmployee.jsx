import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Text,
  Button,
  Image,
} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import TextField from '../components/TextField';
import {SelectList} from 'react-native-dropdown-select-list';
import {RadioButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const AddEmployee = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [checkedGender, setCheckedGender] = React.useState('Male');
  const [checkedJobType, setCheckedJobType] = React.useState('Full Time');
  const [image, setImage] = React.useState('');

  const SectionsList = [
    {key: '1', value: 'Manufactring'},
    {key: '2', value: 'Packing'},
    {key: '3', value: 'Management'},
    {key: '4', value: 'Shipping'},
    {key: '5', value: 'Marketing'},
  ];
  const RolesList = [
    {key: '1', value: 'Manager'},
    {key: '2', value: 'Cashier'},
    {key: '3', value: 'Welder'},
    {key: '4', value: 'Assembler'},
    {key: '5', value: 'Electrician'},
    {key: '6', value: 'Industrial Designer'},
    {key: '7', value: 'Quality Control Inspector'},
  ];
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

      if (response.didCancel) {
        console.log('User cancelled image picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        console.log('Camera not available on the device');
        return;
      } else if (response.errorCode == 'permission') {
        console.log('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        console.log(response.errorMessage);
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
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <View style={styles.design}></View>
          <View style={styles.whiteDesign}></View>
          <View style={styles.imageContainer}>{renderImageContent()}</View>

          <TextField
            placeHolder="Name"
            value={name}
            onChangeText={text => setName(text)}
          />
          <TextField
            placeHolder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextField
            placeHolder="Password"
            eyeIcon={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <View style={{width: '86%'}}>
            <SelectList
              setSelected={val => setSelectedSection(val)}
              data={SectionsList}
              save="value" // also set save to key.
              onSelect={() => {
                console.warn(selectedSection);
              }}
              searchPlaceholder="Search Section"
              dropdownTextStyles={{color: 'black'}}
              boxStyles={styles.selectListStyle}
              placeholder="Select Section"
              inputStyles={styles.selectListInput}
            />
          </View>
          <View style={{width: '86%', marginTop: '2%'}}>
            <SelectList
              setSelected={val => setSelectedRole(val)}
              data={RolesList}
              save="value" // also set save to key.
              onSelect={() => {
                console.warn(selectedRole);
              }}
              searchPlaceholder="Search Role"
              dropdownTextStyles={{color: 'black'}}
              boxStyles={styles.selectListStyle}
              placeholder="Select Section"
              inputStyles={styles.selectListInput}
            />
          </View>
          <View style={styles.radioContainer}>
            <Text style={styles.titleStyle}>Gender</Text>
            <View style={styles.rowContainer}>
              <RadioButton
                value="Male"
                status={checkedGender === 'Male' ? 'checked' : 'unchecked'}
                onPress={() => setCheckedGender('Male')}
                color="#2E81FE"
              />
              <Text style={styles.optionStyle}>Male</Text>
              <RadioButton
                value="Female"
                status={checkedGender === 'Female' ? 'checked' : 'unchecked'}
                onPress={() => setCheckedGender('Female')}
                color="#2E81FE"
              />
              <Text style={styles.optionStyle}>Female</Text>
            </View>
          </View>

          <View style={styles.radioContainer}>
            <Text style={styles.titleStyle}>Job Type</Text>
            <View style={styles.rowContainer}>
              <RadioButton
                value="Full Time"
                status={
                  checkedJobType === 'Full Time' ? 'checked' : 'unchecked'
                }
                onPress={() => setCheckedJobType('Full Time')}
                color="#2E81FE"
              />
              <Text style={styles.optionStyle}>Full Time</Text>
              <RadioButton
                value="Part Time"
                status={
                  checkedJobType === 'Part Time' ? 'checked' : 'unchecked'
                }
                onPress={() => setCheckedJobType('Part Time')}
                color="#2E81FE"
              />
              <Text style={styles.optionStyle}>Part Time</Text>
            </View>
          </View>

          <View style={styles.buttonWrapper}>
            <ButtonComponent
              title="Add"
              onPress={() => {
                console.warn('Employee Added');
                navigation.navigate('Employee Productivity');
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
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
  },
  selectListStyle: {
    backgroundColor: '#E5E5E5',
    borderColor: '#E5E5E5',
    borderRadius: 20,
    marginTop: '2%',
  },
  selectListInput: {color: 'black', fontSize: 18},
  titleStyle: {
    color: 'black',
    marginLeft: '9%',
    marginVertical: '4%',
    fontSize: 19,
    fontWeight: 'bold',
  },
  optionStyle: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 10,
    width: 100,
  },
  radioContainer: {
    width: '100%',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    backgroundColor: '#c5e3e1',
    padding: 30,
    borderRadius: 600,
    position: 'absolute',
    top: 40,
    height: 100,
    width: 100,
  },
  design: {
    backgroundColor: '#2E81FE',
    height: 92,
    width: '100%',
    borderBottomRightRadius: 60000,
    borderBottomLeftRadius: 60000,
    marginBottom: 55,
  },
  whiteDesign: {
    backgroundColor: 'white',
    borderRadius: 600,
    position: 'absolute',
    height: 110,
    width: 110,
    top: 35,
  },
});
export default AddEmployee;
