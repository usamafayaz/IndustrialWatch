import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CardComponent from '../components/CardComponent';
import {useNavigation} from '@react-navigation/native';

const EmployeeProductivity = () => {
  const navigation = useNavigation();
  const CardList = [
    {
      name: 'Productivity Rules',
      onPress: () => {
        navigation.navigate('Productivity Rules' as never);
      },
    },
    {
      name: 'Add Employee',
      onPress: () => {
        navigation.navigate('Add Employee' as never);
      },
    },
    {
      name: 'Employee Record',
      onPress: () => {
        navigation.navigate('Employee Record' as never);
      },
    },
  ];
  return (
    <View style={styles.containerStyle}>
      <View style={styles.cardsWrapper}>
        {CardList.map((item, index) => (
          <CardComponent key={index} title={item.name} onPress={item.onPress} />
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerStyle: {alignItems: 'center', flex: 1, backgroundColor: '#2E81FE'},
  cardsWrapper: {
    marginTop: '20%',
    paddingTop: '30%',
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: 'center',
  },
});
export default EmployeeProductivity;
