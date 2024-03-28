import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import CustomGrid from '../components/CustomGrid';

const SupervisorDashboard = () => {
  const navigation = useNavigation();
  const [modalVisibility, setModalVisibility] = useState(false);

  const CardList = [
    {
      name: 'Employee Monitoring',
      image: require('../../assets/icons/employee_monitoring.png'),
      onPress: () => {
        navigation.navigate('Employee Monitoring' as never);
      },
    },
    {
      name: 'Defect Monitoring',
      image: require('../../assets/icons/defect_monitoring.png'),
      onPress: () => {
        navigation.navigate('Defect Monitoring' as never);
      },
    },
    {
      name: 'My Attendance',
      image: require('../../assets/icons/attendance.png'),
      onPress: () => {
        navigation.navigate('Attendance' as never);
      },
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require('../../assets/icons/dashboard_bg.png')}
          style={styles.imageBackground}
          resizeMode="cover">
          <SafeAreaView style={styles.safeAreaView}>
            <Text style={styles.headerStyle}>Supervisor Dashboard</Text>
            <Text style={styles.welcomeStyle}>Welcome</Text>
            <Text style={styles.nameStyle}>Anwar Ali </Text>
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={() => setModalVisibility(true)}>
              <Icon name="logout" size={25} color="white" />
            </TouchableOpacity>
          </SafeAreaView>
        </ImageBackground>
      </View>
      <View style={styles.cardsWrapper}>
        <CustomGrid renderGrid={CardList} />
      </View>

      <Modal isVisible={modalVisibility}>
        <View style={styles.modalWrapper}>
          <Text style={styles.confirmationMessage}>
            Do you really want to Logout?
          </Text>
          <View style={styles.modalButtonWrapper}>
            <TouchableOpacity onPress={() => setModalVisibility(false)}>
              <Text style={styles.cancelStyle}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setModalVisibility(false);
                navigation.navigate('Login' as never);
              }}>
              <Text style={styles.OKStyle}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },
  imageContainer: {
    height: '37%',
    width: '100%',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
  },
  safeAreaView: {
    marginBottom: 20,
    marginLeft: 30,
  },
  confirmationMessage: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginTop: '10%',
  },
  headerStyle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginTop: '6%',
  },
  welcomeStyle: {
    fontSize: 23,
    color: 'white',
    marginTop: '23%',
  },
  nameStyle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  cardsWrapper: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: 'center',
    paddingTop: '16%',
  },
  logoutButton: {
    position: 'absolute',
    marginTop: '4%',
    right: 20,
    padding: 10,
  },
  modalWrapper: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: '20%',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 30,
  },
  modalButtonWrapper: {
    flexDirection: 'row',
    marginLeft: '43%',
    marginTop: '12%',
  },
  cancelStyle: {
    color: '#2196F3',
    marginRight: 10,
    paddingVertical: '5%',
  },
  OKStyle: {
    color: 'white',
    backgroundColor: '#2196F3',
    borderRadius: 20,
    paddingHorizontal: '10%',
    paddingVertical: '5%',
  },
});
export default SupervisorDashboard;
