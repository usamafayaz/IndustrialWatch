import React, {useState} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';
const EmployeeProfile = () => {
  const navigation = useNavigation();
  const [modalVisibility, setModalVisibility] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.design}>
        <View style={styles.rowContainer}>
          <Text style={styles.headerText}>Profile</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Edit Profile' as never);
            }}>
            <Icon name="edit" size={23} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.whiteDesign}></View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/employeevector.jpg')}
          style={styles.imageStyle}
        />
      </View>
      <Text style={styles.nameStyle}>Usama Fayyaz</Text>
      <Text style={styles.roleStyle}>Mechanic</Text>
      <View style={styles.rowField}>
        <Icon name="mail" size={20} color={'#2E81FE'} />
        <Text style={styles.textStyle}>Usama Fayyaz</Text>
      </View>
      <View style={styles.rowField}>
        <Icon name="factory" size={20} color={'#2E81FE'} />
        <Text style={styles.textStyle}>Manufacturing</Text>
      </View>
      <View style={styles.rowField}>
        <Icon name="schedule" size={20} color={'#2E81FE'} />
        <Text style={styles.textStyle}>Full Time</Text>
      </View>
      <TouchableOpacity
        style={styles.rowField}
        onPress={() => {
          setModalVisibility(true);
        }}>
        <Icon name="logout" size={22} color="#2E81FE" />
        <Text style={styles.textStyle}>Logout</Text>
      </TouchableOpacity>
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
    alignItems: 'center',
    backgroundColor: 'white',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 18,
  },
  headerText: {color: 'white', fontSize: 18, fontWeight: 'bold'},
  imageContainer: {
    backgroundColor: '#c5e3e1',
    padding: 30,
    borderRadius: 600,
    position: 'absolute',
    top: 90,
    height: 100,
    width: 100,
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 60,
    position: 'absolute',
  },
  design: {
    backgroundColor: '#2E81FE',
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
    height: 105,
    width: 105,
    top: 90,
  },
  nameStyle: {color: 'black', fontSize: 24, fontWeight: 'bold'},
  roleStyle: {color: 'black', fontSize: 18, marginBottom: '10%'},
  rowField: {
    backgroundColor: '#F6F6F6',
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    height: '7%',
    marginBottom: '3%',
  },
  textStyle: {color: 'black', fontSize: 18, marginLeft: 20},
  confirmationMessage: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginTop: '10%',
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
    color: '#2E81FE',
    marginRight: 10,
    paddingVertical: '5%',
  },
  OKStyle: {
    color: 'white',
    backgroundColor: '#2E81FE',
    borderRadius: 20,
    paddingHorizontal: '10%',
    paddingVertical: '5%',
  },
});
export default EmployeeProfile;
