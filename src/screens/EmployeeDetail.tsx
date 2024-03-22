import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import * as Progress from 'react-native-progress';
import CardComponent from '../components/CardComponent';
import {useNavigation} from '@react-navigation/native';

const EmployeeDetail = () => {
  const navigation = useNavigation();
  const CardList = [
    {
      name: 'Attendance',
      onPress: () => {
        navigation.navigate('Attendance' as never);
      },
    },
    {
      name: 'Violation',
      onPress: () => {
        navigation.navigate('Employee Violation' as never);
      },
    },
    {
      name: 'Summary',
      onPress: () => {
        navigation.navigate('Employee Summary' as never);
      },
    },
  ];
  return (
    <View style={styles.container}>
      <Progress.Circle
        progress={0.75}
        size={170}
        showsText={true}
        color="#02DE12"
        thickness={15}
        unfilledColor="#D4D4D4"
        borderColor="#D4D4D4"
        textStyle={{
          fontSize: 19,
          fontWeight: 'bold',
          color: 'black',
          textAlign: 'center',
        }}
        formatText={() => `75%\nProductivity`}
      />
      <View style={styles.fineContainer}>
        <Text style={styles.fineHeading}>Total Fine</Text>
        <Text style={styles.fineAmount}>2500</Text>
      </View>
      <FlatList
        style={{width: '100%'}}
        data={CardList}
        renderItem={({item}) => {
          return (
            <CardComponent
              onPress={item.onPress}
              title={item.name}></CardComponent>
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
    paddingTop: '12%',
    backgroundColor: '#FFFFFF',
  },
  fineContainer: {
    paddingHorizontal: '34%',
    paddingVertical: '4%',
    alignItems: 'center',
    marginVertical: '10%',
    shadowColor: 'black',
    elevation: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: 'green',
  },

  fineHeading: {color: '#4E4E4E', fontWeight: 'bold', fontSize: 20},
  fineAmount: {color: 'black', fontWeight: '900', fontSize: 28},
});

export default EmployeeDetail;
