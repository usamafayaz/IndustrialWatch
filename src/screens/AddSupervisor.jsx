import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ToastAndroid,
} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import TextField from '../components/TextField';
import {MultipleSelectList} from 'react-native-dropdown-select-list';
import API_URL from '../../apiConfig';

const AddSupervisor = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedSections, setSelectedSections] = useState([]);
  const [sectionList, setSectionList] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    populateSectionDropdown();
  }, []);

  const populateSectionDropdown = async () => {
    try {
      const response = await fetch(`${API_URL}/Section/GetAllSections`);
      const data = await response.json();
      const sectionsList = data.map(section => ({
        key: `${section.id}`,
        value: section.name,
      }));
      setSectionList(sectionsList);
    } catch (error) {
      console.error('Error populating section dropdown:', error);
    }
  };

  const handleAddSupervisor = async () => {
    try {
      if (!name.trim() || !username.trim() || !password.trim()) {
        ToastAndroid.show(
          'Please provide necessary credentials.',
          ToastAndroid.SHORT,
        );
        return;
      }
      const selectedSectionList = [];
      console.log(selectedSections, 'selected ');
      console.log(sectionList, 'all ');
      sectionList.forEach(element => {
        console.log(element);
        if (selectedSections.includes(element.key)) {
          selectedSectionList.push({
            section_id: element.key,
            name: element.value,
          });
        }
      });
      console.log('Final List is ', selectedSectionList);
      const newSupervisor = {
        name: name,
        username: username,
        password: password,
        role: 'Supervisor',
        sections: selectedSectionList,
      };

      const response = await fetch(`${API_URL}/Supervisor/insert_supervisor`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSupervisor),
      });

      if (response.ok) {
        ToastAndroid.show('Account Created', ToastAndroid.SHORT);
        navigation.navigate('Supervisors');
      } else {
        ToastAndroid.show(
          'Error creating supervisor account:',
          ToastAndroid.SHORT,
        );
      }
    } catch (error) {
      console.error('Error creating supervisor account:', error);
      navigation.navigate('Supervisors');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <TextField
          placeHolder="Name"
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextField
          placeHolder="Username"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TextField
          placeHolder="Password"
          eyeIcon={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <View style={{width: '84%'}}>
          <MultipleSelectList
            setSelected={setSelectedSections}
            data={sectionList}
            save="key"
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
            onPress={handleAddSupervisor}
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
