import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
  View,
  ToastAndroid,
} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import SupervisorCard from '../components/SupervisorCard';
import Modal from 'react-native-modal';
import TextField from '../components/TextField';
import API_URL from '../../apiConfig';

interface Supervisor {
  id: number;
  name: string;
  username: string;
  password: string;
}
const Supervisors = () => {
  const [supervisorList, setSupervisorList] = useState<Supervisor[]>([]);
  const [selectedSupervisor, setSelectedSupervisor] =
    useState<Supervisor | null>(null);
  const [loading, setLoading] = useState(true);

  const [modalView, setModalView] = useState(false);
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useFocusEffect(
    useCallback(() => {
      fetchSupervisors();
    }, []),
  );

  const fetchSupervisors = async () => {
    try {
      const response = await fetch(`${API_URL}/Supervisor/GetAllSupervisors`);
      const data = await response.json();
      const formattedData = data.map((item: any) => ({
        id: item.id,
        name: item.name,
        username: item.username,
        password: item.password,
      }));
      setSupervisorList(formattedData);
    } catch (error) {
      ToastAndroid.show('Error fetching Supervisors', ToastAndroid.SHORT);
      console.error('Error fetching Supervisors:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteSupervisor = async (id: number) => {
    try {
      const response = await fetch(
        `${API_URL}/Supervisor/DeleteSupervisor/?id=${id}`,
        {
          method: 'DELETE',
        },
      );

      if (response.ok) {
        ToastAndroid.show(
          'Supervisor Deleted Successfully.',
          ToastAndroid.SHORT,
        );
        setSupervisorList(prevList =>
          prevList.filter(supervisor => supervisor.id !== id),
        );
      } else {
        ToastAndroid.show('Error Deleting Supervisor.', ToastAndroid.SHORT);
      }
    } catch (error) {
      console.error('Error Deleting Supervisor:', error);
    }
  };

  const handleUsernameChange = (text: string) => {
    setUsername(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const updateSupervisor = async () => {
    try {
      if (!username.trim() || !password.trim()) {
        ToastAndroid.show(
          'Please provide necessary credentials.',
          ToastAndroid.SHORT,
        );
        return;
      }
      const updatedSupervisor = {
        id: selectedSupervisor?.id,
        name: selectedSupervisor?.name,
        password: password,
        role: 'Supervisor',
        sections: [],
        username: username,
      };

      const response = await fetch(`${API_URL}/Supervisor/UpdateSupervisor`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedSupervisor),
      });

      if (response.ok) {
        ToastAndroid.show(
          'Supervisor Updated Successfully',
          ToastAndroid.SHORT,
        );
      } else {
        ToastAndroid.show('Failed to Update Supervisor', ToastAndroid.SHORT);
      }
    } catch (error) {
      console.error('Error updating Supervisor:', error);
    }
    setModalView(false);
    setPassword('');
    setUsername('');
    fetchSupervisors();
  };
  const showEditModal = (supervisor: Supervisor) => {
    setSelectedSupervisor(supervisor);
    setUsername(supervisor.username);
    setPassword(supervisor.password);
    setModalView(true);
  };
  const deleteSupervisorHandler = (id: number) => () => {
    deleteSupervisor(id);
  };
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2196F3" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.flatListContainer}>
        <FlatList
          data={supervisorList}
          renderItem={({item}) => {
            return (
              <SupervisorCard
                name={item.name}
                username={item.username}
                onEditPress={() => showEditModal(item)}
                onDeletePress={deleteSupervisorHandler(item.id)}
              />
            );
          }}
        />
      </View>
      <Modal isVisible={modalView}>
        <View style={styles.modalWrapper}>
          <Text style={styles.textStyle}>New Credentials for</Text>
          <Text style={styles.nameStyle}>{selectedSupervisor?.name}</Text>
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
    color: '#2196F3',
    marginRight: 10,
    paddingVertical: '5%',
  },
  updateStyle: {
    color: 'white',
    backgroundColor: '#2196F3',
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Supervisors;
