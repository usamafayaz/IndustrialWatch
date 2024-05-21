import React, {useCallback, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as Progress from 'react-native-progress';
import PrimaryAppBar from '../components/PrimaryAppBar';
import {API_URL} from '../../apiConfig';
import {useFocusEffect} from '@react-navigation/native';

const EmployeeLoginHome = props => {
  const {name, employee_id} = props.route.params.employee;

  useFocusEffect(
    useCallback(() => {
      fetchEmployeeDetails();
    }, []),
  );

  const [employeeDetail, setEmployeeDetail] = useState({});
  const fetchEmployeeDetails = async () => {
    const response = await fetch(
      `${API_URL}/Employee/GetEmployeeDetail?employee_id=${employee_id}`,
    );
    const data = await response.json();
    setEmployeeDetail(data);
  };

  return (
    <View style={styles.container}>
      <PrimaryAppBar text={name} arrowNotRequired={true} />
      <Progress.Circle
        progress={
          employeeDetail.productivity ? employeeDetail.productivity / 100 : 0
        }
        size={170}
        showsText={true}
        color="#02DE12"
        thickness={15}
        unfilledColor="#D4D4D4"
        borderColor="#D4D4D4"
        style={{marginBottom: '22%', marginTop: '10%'}}
        textStyle={styles.progressText}
        formatText={() =>
          employeeDetail.productivity
            ? `${employeeDetail.productivity}%\nProductivity`
            : 'No Record'
        }
      />
      <View style={styles.fineContainer}>
        <Text style={styles.fineHeading}>Total Fine</Text>
        <Text style={styles.fineAmount}>{employeeDetail.total_fine}</Text>
      </View>
      <View style={styles.fineContainer}>
        <Text style={styles.fineHeading}>Total Attendance</Text>
        <Text style={styles.fineAmount}>{employeeDetail.total_attendance}</Text>
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
