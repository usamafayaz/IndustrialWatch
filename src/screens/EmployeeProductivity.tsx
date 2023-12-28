import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CardComponent from '../components/CardComponent';
import {useNavigation} from '@react-navigation/native';
import CustomGrid from '../components/CustomGrid';

const EmployeeProductivity = () => {
  const navigation = useNavigation();
  const CardList = [
    {
      name: 'Productivity Rules',
      image: require('../../assets/icons/rules.png'),
      onPress: () => {
        navigation.navigate('Productivity Rules' as never);
      },
    },
    {
      name: 'Add Employee',
      image: require('../../assets/icons/add_employee.png'),
      onPress: () => {
        navigation.navigate('Add Employee' as never);
      },
    },
    {
      name: 'Employee Record',
      image: require('../../assets/icons/employee_record.png'),
      onPress: () => {
        navigation.navigate('Employee Record' as never);
      },
    },
    {
      name: 'Employees Ranking',
      image: require('../../assets/icons/employees_ranking.png'),
      onPress: () => {
        navigation.navigate('Employee Record' as never);
      },
    },
  ];
  return (
    <View style={styles.containerStyle}>
      <View style={styles.cardsWrapper}>
        <CustomGrid renderGrid={CardList} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerStyle: {alignItems: 'center', flex: 1, backgroundColor: '#2E81FE'},
  cardsWrapper: {
    marginTop: '20%',
    paddingTop: '30%',
    backgroundColor: '#F3F3F3',
    flex: 1,
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: 'center',
  },
});
export default EmployeeProductivity;
