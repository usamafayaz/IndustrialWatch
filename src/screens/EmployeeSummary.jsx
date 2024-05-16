import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import * as Progress from 'react-native-progress';
import PrimaryAppBar from '../components/PrimaryAppBar';
import MonthPicker from 'react-native-month-year-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const EmployeeSummary = () => {
  const [date, setDate] = useState(new Date());
  const [pickerVisibility, setPickerVisibility] = useState(false);
  const [displayedMonthYear, setDisplayedMonthYear] = useState('');

  useEffect(() => {
    setDisplayedMonthYear(getDisplayedMonthYear(date));
  }, [date]);

  const showPicker = () => setPickerVisibility(true);

  const onValueChange = (event, newDate) => {
    const selectedDate = new Date(date);
    selectedDate.setMonth(newDate.getMonth());
    selectedDate.setFullYear(newDate.getFullYear());
    setPickerVisibility(false);
    setDate(selectedDate);
  };

  const getDisplayedMonthYear = date => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${month} ${year}`;
  };

  return (
    <View style={styles.container}>
      <PrimaryAppBar text={'Summary'} />
      <View style={{paddingHorizontal: 20}}>
        <Text style={styles.label}>Select Month:</Text>
        <TouchableOpacity style={styles.dateRow} onPress={showPicker}>
          <Icon name="calendar-month" color={'#000000'} size={30} />
          <Text style={styles.dateStyle}>{displayedMonthYear}</Text>
          <Icon name="arrow-right" color={'#000000'} size={30} />
        </TouchableOpacity>
        {pickerVisibility && (
          <MonthPicker
            onChange={onValueChange}
            value={date}
            minimumDate={new Date(2000, 1)}
            maximumDate={new Date(2025, 5)}
            locale="en"
          />
        )}
        <View style={styles.horizontalLineStyle}></View>

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  label: {fontSize: 18, color: '#4C4C4C', marginTop: '12%'},
  horizontalLineStyle: {
    alignSelf: 'center',
    width: '58%',
    backgroundColor: 'grey',
    marginTop: '2%',
    height: 0.8,
    opacity: 0.5,
  },
  progessContainer: {alignItems: 'center', marginVertical: '10%'},
  bottomContainer: {
    marginBottom: '6%',
    width: '100%',
    height: '13%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    elevation: 1,
    borderRadius: 20,
  },
  headingStyle: {fontSize: 18, fontWeight: '700', color: '#4E4E4E'},
  amountStyle: {fontSize: 20, fontWeight: '900', color: 'black'},
  dateStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  dateRow: {
    marginTop: 30,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EmployeeSummary;
