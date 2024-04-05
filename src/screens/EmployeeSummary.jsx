import React, {useState} from 'react';
import {Button, Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import * as Progress from 'react-native-progress';
import PrimaryAppBar from '../components/PrimaryAppBar';
import DatePicker from 'react-native-modern-datepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const EmployeeSummary = () => {
  const [showModal, setShowModal] = useState(false);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [activePicker, setActivePicker] = useState(null);

  const handleFromDateChange = date => {
    setFromDate(date);
  };

  const handleToDateChange = date => {
    setToDate(date);
  };

  const handleSaveDate = () => {
    // Do something with the selected dates, like save them to state or perform other actions
    console.log('From Date:', fromDate);
    console.log('To Date:', toDate);

    // Close the modal
    setShowModal(false);
  };

  const openDatePicker = pickerType => {
    setActivePicker(pickerType);
    setShowModal(true);
  };

  return (
    <View style={styles.container}>
      <PrimaryAppBar text={'Muhammad Anees'} />

      <View style={{paddingHorizontal: 20}}>
        <Text style={styles.headerText}>Summary</Text>
        <Text style={styles.label}>From:</Text>
        <TouchableOpacity
          onPress={() => openDatePicker('from')}
          style={styles.row}>
          <Icon
            name="calendar-month"
            size={20}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.dateStyle}>
            {fromDate ? fromDate : 'Select Date'}
          </Text>
        </TouchableOpacity>
        <View style={styles.horizontalLineStyle}></View>

        <Text style={styles.label}>To:</Text>
        <TouchableOpacity
          onPress={() => openDatePicker('to')}
          style={styles.row}>
          <Icon
            name="calendar-month"
            size={20}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.dateStyle}>
            {toDate ? toDate : 'Select Date'}
          </Text>
        </TouchableOpacity>

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

      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Date</Text>
            <DatePicker
              mode="date"
              selected={activePicker === 'from' ? fromDate : toDate}
              onDateChange={
                activePicker === 'from'
                  ? handleFromDateChange
                  : handleToDateChange
              }
            />
            <Button title="Set Date" onPress={handleSaveDate} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: '8%',
    marginTop: '5%',
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '4%',
    paddingLeft: '25%',
  },
  label: {fontSize: 18, marginRight: 10, color: '#4C4C4C'},
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
    width: '100%',
    height: '11%',
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default EmployeeSummary;
