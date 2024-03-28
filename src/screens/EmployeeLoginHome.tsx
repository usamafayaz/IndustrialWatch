import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import * as Progress from 'react-native-progress';
import CardComponent from '../components/CardComponent';
import {useNavigation} from '@react-navigation/native';
import PrimaryAppBar from '../components/PrimaryAppBar';

const EmployeeLoginHome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <PrimaryAppBar text="Home" />
      <Progress.Circle
        progress={0.75}
        size={170}
        showsText={true}
        color="#02DE12"
        thickness={15}
        unfilledColor="#D4D4D4"
        borderColor="#D4D4D4"
        style={{marginBottom: '22%', marginTop: '10%'}}
        textStyle={styles.progressText}
        formatText={() => `75%\nProductivity`}
      />
      <View style={styles.fineContainer}>
        <Text style={styles.fineHeading}>Total Fine</Text>
        <Text style={styles.fineAmount}>2500</Text>
      </View>
      <View style={styles.fineContainer}>
        <Text style={styles.fineHeading}>Total Attendance</Text>
        <Text style={styles.fineAmount}>25/30</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  fineContainer: {
    width: '90%',
    paddingVertical: '4%',
    alignItems: 'center',
    marginTop: '5%',
    shadowColor: 'black',
    elevation: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20.01,
  },
  progressText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },

  fineHeading: {color: '#4E4E4E', fontWeight: 'bold', fontSize: 20},
  fineAmount: {color: 'black', fontWeight: '900', fontSize: 28},
});

export default EmployeeLoginHome;
