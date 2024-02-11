import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import MonthPicker from 'react-native-month-year-picker';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import your preferred icon library
import * as Progress from 'react-native-progress';

const EmployeeSummary = () => {
  const [showFromPicker, setShowFromPicker] = useState(false);
  const [showToPicker, setShowToPicker] = useState(false);
  const [selectedFromMonth, setSelectedFromMonth] = useState(new Date());
  const [selectedToMonth, setSelectedToMonth] = useState(new Date());

  const toggleFromPicker = () => {
    setShowFromPicker(!showFromPicker);
  };

  const toggleToPicker = () => {
    setShowToPicker(!showToPicker);
  };

  const onFromMonthChange = (event: any, newDate: any) => {
    setSelectedFromMonth(newDate || new Date()); // Ensure newDate is valid
    setShowFromPicker(false); // Hide the picker after selecting a date
    console.log('From Date is Set to: ' + selectedFromMonth);
  };

  const onToMonthChange = (event: any, newDate: any) => {
    setSelectedToMonth(newDate || new Date()); // Ensure newDate is valid
    setShowToPicker(false); // Hide the picker after selecting a date
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Summary</Text>
      <Text style={styles.label}>From:</Text>
      <TouchableOpacity onPress={toggleFromPicker} style={styles.row}>
        <Icon name="calendar" size={20} color="black" style={styles.icon} />
        <Text style={styles.dateStyle}>
          {selectedFromMonth.toLocaleDateString('default', {
            month: 'long',
            year: 'numeric',
          })}
        </Text>
        <Text style={styles.arrow}>▶</Text>
      </TouchableOpacity>
      <View style={styles.horizontalLineStyle}></View>

      {showFromPicker && (
        <MonthPicker
          onChange={onFromMonthChange}
          value={selectedFromMonth}
          minimumDate={new Date('1900-01-01')}
          maximumDate={new Date()}
        />
      )}

      <Text style={styles.label}>To:</Text>
      <TouchableOpacity onPress={toggleToPicker} style={styles.row}>
        <Icon name="calendar" size={20} color="black" style={styles.icon} />
        <Text style={styles.dateStyle}>
          {selectedToMonth.toLocaleDateString('default', {
            month: 'long',
            year: 'numeric',
          })}
        </Text>
        <Text style={styles.arrow}>▶</Text>
      </TouchableOpacity>

      <View style={styles.horizontalLineStyle}></View>

      {showToPicker && (
        <MonthPicker
          onChange={onToMonthChange}
          value={selectedToMonth}
          minimumDate={new Date('1900-01-01')}
          maximumDate={new Date()}
        />
      )}
      <View style={styles.progessContainer}>
        <Progress.Circle
          progress={0.667}
          size={160}
          showsText={true}
          color="#02DE12"
          thickness={15}
          unfilledColor="#D4D4D4"
          borderColor="#D4D4D4"
          textStyle={{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'black',
            textAlign: 'center',
          }}
          formatText={() => `20/30\nAttendance`}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.headingStyle}>Fine</Text>
        <Text style={styles.amountStyle}>2500</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.headingStyle}>Violation</Text>
        <Text style={styles.amountStyle}>5</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  headerText: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: '8%',
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '4%',
    paddingLeft: '25%',
  },
  label: {fontSize: 16, marginRight: 10, color: 'black'},
  icon: {marginRight: 10},
  dateStyle: {fontSize: 18, fontWeight: '700', marginLeft: 10, color: 'black'},
  arrow: {marginLeft: 20},
  horizontalLineStyle: {
    alignSelf: 'center',
    width: '68%',
    backgroundColor: 'grey',
    marginTop: '2%',
    height: 1.5,
    opacity: 0.5,
  },
  progessContainer: {alignItems: 'center', marginVertical: '10%'},
  bottomContainer: {
    marginBottom: '6%',
    width: '90%',
    height: '12%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    elevation: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20.01,
  },
  headingStyle: {fontSize: 18, fontWeight: '700', color: '#4E4E4E'},
  amountStyle: {fontSize: 20, fontWeight: '900', color: 'black'},
});

export default EmployeeSummary;
