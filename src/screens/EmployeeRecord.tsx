import React from 'react';
import {StyleSheet, View, TouchableOpacity, FlatList, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBarComponent from '../components/SearchBarComponent';
import EmployeeCard from '../components/EmployeeCard';

const EmployeeRecord = () => {
  const navigation = useNavigation();

  const handleSearch = (text: string) => {
    // Searched text is returned. use it however you want!
    console.warn(text);
  };
  const employees = [
    {
      id: 1,
      name: 'Ahmed Malik',
      position: 'Mechanic',
      productivity: '50% ',
      image: require('../../assets/images/employee.jpg'),
    },
    {
      id: 2,
      name: 'Omar Khan',
      position: 'Engineer',
      productivity: '75% ',
      image: require('../../assets/images/employee.jpg'),
    },
    {
      id: 3,
      name: 'Fatima Ali',
      position: 'Designer',
      productivity: '60% ',
      image: require('../../assets/images/employee.jpg'),
    },
    {
      id: 4,
      name: 'Zainab Hassan',
      position: 'Technician',
      productivity: '55% ',
      image: require('../../assets/images/employee.jpg'),
    },
    {
      id: 5,
      name: 'Yusuf Ahmed',
      position: 'Electrician',
      productivity: '65% ',
      image: require('../../assets/images/employee.jpg'),
    },
    {
      id: 6,
      name: 'Amina Sheikh',
      position: 'Supervisor',
      productivity: '70% ',
      image: require('../../assets/images/employee.jpg'),
    },
    {
      id: 7,
      name: 'Khalid Shah',
      position: 'Plumber',
      productivity: '45% ',
      image: require('../../assets/images/employee.jpg'),
    },
    {
      id: 8,
      name: 'Sana Rehman',
      position: 'Welder',
      productivity: '55%',
      image: require('../../assets/images/employee.jpg'),
    },
    {
      id: 9,
      name: 'Ayesha Khan',
      position: 'Painter',
      productivity: '60% ',
      image: require('../../assets/images/employee.jpg'),
    },
    {
      id: 10,
      name: 'Imran Ali',
      position: 'Carpenter',
      productivity: '65% ',
      image: require('../../assets/images/employee.jpg'),
    },
    // You can add more employees as needed
  ];

  return (
    <View style={styles.container}>
      <SearchBarComponent
        onSearch={handleSearch}
        placeHolder="Search Employee"
      />
      <EmployeeCard employees={employees} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '##FFFFFF',
    paddingTop: '4%',
  },
});

export default EmployeeRecord;
