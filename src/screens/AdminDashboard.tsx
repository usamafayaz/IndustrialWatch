import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import CardComponent from '../components/CardComponent';
import {useNavigation} from '@react-navigation/native';

const AdminDashboard = () => {
  const navigation = useNavigation();
  const CardList = [
    {
      name: 'Sections',
      onPress: () => {
        navigation.navigate('Sections' as never);
      },
    },
    {
      name: 'Supervisor',
      onPress: () => {
        navigation.navigate('Supervisors' as never);
      },
    },
    {
      name: 'Production',
      onPress: () => {
        navigation.navigate('Production' as never);
      },
    },
    {
      name: 'Employee Productivity',
      onPress: () => {
        navigation.navigate('Employee Productivity' as never);
      },
    },
  ];
  const [isLogoutModalVisible, setLogoutModalVisible] = React.useState(false);

  // Function to handle the logout action
  const handleLogout = () => {
    // Add your logout logic here (e.g., clearing user data, navigating to the login screen)
    // After performing the logout action, close the modal
    setLogoutModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.containerStyle}>
      <Text style={styles.welcomeStyle}>Welcome</Text>
      <Text style={styles.nameStyle}>Usama Fayyaz</Text>
      <View style={styles.cardsWrapper}>
        {CardList.map((item, index) => (
          <CardComponent key={index} title={item.name} onPress={item.onPress} />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageStyle: {width: 300, height: 300},
  welcomeStyle: {fontSize: 23, color: 'white', marginTop: 80},
  nameStyle: {color: 'white', fontSize: 30, fontWeight: 'bold'},
  containerStyle: {alignItems: 'center', flex: 1, backgroundColor: '#2E81FE'},
  cardsWrapper: {
    marginTop: '28%',
    paddingTop: '16%',
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: 'center',
  },
  logoutButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
  },
  logoutText: {
    fontSize: 16,
    color: 'white',
  },

  // Styles for the logout modal
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalText: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
});
export default AdminDashboard;
