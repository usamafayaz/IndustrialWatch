import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TextComponent, View} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import SupervisorCard from '../components/SupervisorCard';
import Modal from 'react-native-modal';
import TextField from '../components/TextField';

const Supervisors = () => {
  const [modalView, setModalView] = useState(false);
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (text: string) => {
    setUsername(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const updateSupervisor = () => {
    // Updation Logic
    setModalView(false);
    setPassword('');
    setUsername('');
    console.warn('Supervisor Updated.');
  };
  const showEditModal = () => {
    setModalView(true);
  };
  const SupervisorList = [
    {
      name: 'Abdullah Mustafa',
      password: 'Abd1025',
    },
    {
      name: 'Muhammad Anees',
      password: 'Annu4852',
    },
    {
      name: 'Adeel Shahid',
      password: 'Khan302',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.flatListContainer}>
        <FlatList
          data={SupervisorList}
          renderItem={({item}) => {
            return (
              <SupervisorCard
                name={item.name}
                password={item.password}
                onEditPress={showEditModal}
              />
            );
          }}
        />
      </View>
      <Modal isVisible={modalView}>
        <View style={styles.modalWrapper}>
          <Text style={styles.textStyle}>New Credentials for</Text>
          <Text style={styles.nameStyle}>Abdullah Mustafa</Text>
          <TextField
            placeHolder="Username"
            value={username}
            onChangeText={handleUsernameChange}
          />
          <TextField
            placeHolder="Password"
            eyeIcon={true}
            value={password}
            onChangeText={handlePasswordChange}
          />
          <View style={styles.modalButtonWrapper}>
            <TouchableOpacity
              onPress={() => {
                setModalView(false);
                setPassword('');
                setUsername('');
              }}>
              <Text style={styles.cancelStyle}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                updateSupervisor();
              }}>
              <Text style={styles.updateStyle}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.buttonWrapper}>
        <ButtonComponent
          title="Add Supervisor"
          onPress={() => navigation.navigate('Add Supervisor' as never)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {fontSize: 16, marginTop: 24, color: 'grey'},
  nameStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 12,
  },
  modalWrapper: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: 290,
    width: 300,
    alignSelf: 'center',
    borderRadius: 30,
  },
  modalButtonWrapper: {
    flexDirection: 'row',
    marginLeft: '35%',
    marginTop: '7%',
  },
  cancelStyle: {
    color: '#2E81FE',
    marginRight: 10,
    paddingVertical: '5%',
  },
  updateStyle: {
    color: 'white',
    backgroundColor: '#2E81FE',
    borderRadius: 20,
    paddingHorizontal: '10%',
    paddingVertical: '5%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  flatListContainer: {flex: 1, width: '100%'},
  buttonWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '70%',
  },
});
export default Supervisors;
