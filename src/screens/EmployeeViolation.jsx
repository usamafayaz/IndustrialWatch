import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import ViolationCard from '../components/ViolationCard';
import {useNavigation} from '@react-navigation/native';
import PrimaryAppBar from '../components/PrimaryAppBar';
import {API_URL} from '../../apiConfig';

const EmployeeViolation = props => {
  const [employeeViolations, setEmployeeViolations] = useState([]);

  useEffect(() => {
    fetchEmployeeViolations();
  }, []);
  const navigation = useNavigation();
  const fetchEmployeeViolations = async () => {
    try {
      const response = await fetch(
        `${API_URL}/Employee/GetAllViolations?employee_id=${props.route.params.employee.employee_id}`,
      );
      const data = await response.json();
      setEmployeeViolations(data);
    } catch (error) {
      ToastAndroid.show(
        'Error fetching employee Violations:',
        ToastAndroid.SHORT,
      );
    }
  };

  const formatDate = date => {
    const formattedDate = new Date(date);
    return formattedDate.toDateString();
  };

  return (
    <View style={styles.container}>
      <PrimaryAppBar text={props.route.params.employee.name} />

      <Text style={styles.headingStyle}>Violations</Text>
      <FlatList
        data={employeeViolations}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Violation Details');
              }}>
              <ViolationCard
                name={item.rule_name}
                date={formatDate(item.date)}
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
    backgroundColor: '#FFFFFF',
  },
  headingStyle: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
    marginRight: '60%',
    marginTop: '6%',
  },
});

export default EmployeeViolation;
