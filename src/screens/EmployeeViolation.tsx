import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ViolationCard from '../components/ViolationCard';
import {useNavigation} from '@react-navigation/native';

const EmployeeViolation = () => {
  const navigation = useNavigation();
  const Violations = [
    {name: 'Mobile Usage', date: '10 August 2023', time: '12 : 00 AM'},
    {name: 'Smoking', date: '23 August 2023', time: '10 : 33 AM'},
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.headingStyle}>Violations</Text>
      <FlatList
        data={Violations}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Violation Details' as never);
              }}>
              <ViolationCard
                name={item.name}
                date={item.date}
                time={item.time}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '10%',
    backgroundColor: '#FFFFFF',
  },
  headingStyle: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
    marginRight: '60%',
  },
});

export default EmployeeViolation;
