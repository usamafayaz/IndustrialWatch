import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import TextField from '../components/TextField';
import {MultipleSelectList} from 'react-native-dropdown-select-list';

const AddSupervisor = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selected, setSelected] = useState([]);
  const SectionsList = [
    {key: '1', value: 'Manufactring'},
    {key: '2', value: 'Packing'},
    {key: '3', value: 'Management'},
    {key: '4', value: 'Shipping'},
    {key: '5', value: 'Marketing'},
  ];
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <TextField
          placeHolder="Name"
          value={name}
          onChangeText={(text: any) => setName(text)}
        />
        <TextField
          placeHolder="Username"
          value={username}
          onChangeText={(text: any) => setUsername(text)}
        />
        <TextField
          placeHolder="Password"
          eyeIcon={true}
          value={password}
          onChangeText={(text: any) => setPassword(text)}
        />
        <View style={{width: '84%'}}>
          <MultipleSelectList
            setSelected={(val: any) => setSelected(val)}
            data={SectionsList}
            save="value" // also set save to key.
            onSelect={() => {
              console.warn(selected);
            }}
            searchPlaceholder="Search Section"
            dropdownTextStyles={{color: 'black'}}
            labelStyles={{color: 'grey'}}
            label="Sections"
            boxStyles={styles.multipleListStyle}
            placeholder="Select Section"
            inputStyles={styles.multipleListInput}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <ButtonComponent
            title="Create Account"
            onPress={() => {
              console.warn('Account Created');
              navigation.navigate('Supervisors' as never);
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: '5%',
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '70%',
  },
  multipleListStyle: {
    backgroundColor: '#E5E5E5',
    borderColor: '#E5E5E5',
    borderRadius: 20,
    marginTop: '2%',
  },
  multipleListInput: {color: 'grey', fontSize: 18},
});
export default AddSupervisor;
