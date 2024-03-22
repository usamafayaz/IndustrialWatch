import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const EmployeeAttendance = () => {
  const dates = [
    '2024-02-01',
    '2024-02-02',
    '2024-02-03',
    '2024-02-04',
    '2024-02-05',
    '2024-02-05',
    '2024-02-05',
    '2024-02-05',
    '2024-02-05',
  ];

  const calculateVerticalLineHeight = () => {
    const VerticalLineHeight = dates.length * 43.4 + 38;
    return VerticalLineHeight;
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={[styles.tableHeading, {marginLeft: '10%'}]}>Date</Text>
        <Text style={[styles.tableHeading, {marginRight: '5%'}]}>Status</Text>
      </View>
      <View
        style={[
          styles.verticalLineStyle,
          {height: calculateVerticalLineHeight()},
        ]}></View>
      <FlatList
        data={dates}
        renderItem={({item}) => (
          <>
            <View style={styles.horizontalLineStyle}></View>
            <View
              style={[
                styles.headerContainer,
                {justifyContent: 'space-evenly'},
              ]}>
              <Text style={[styles.dateTextStyle, {marginRight: '35%'}]}>
                {item}
              </Text>
              <Text style={styles.statusTextStyle}>P</Text>
            </View>
          </>
        )}
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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    width: '100%',
    paddingVertical: '1%',
  },
  tableHeading: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
  },
  dateTextStyle: {color: 'grey', fontSize: 20},
  statusTextStyle: {color: 'grey', fontSize: 20, fontWeight: 'bold'},
  horizontalLineStyle: {
    width: '100%',
    backgroundColor: 'grey',
    marginTop: '2%',
    height: 1.5,
    opacity: 0.5,
  },
  verticalLineStyle: {
    width: 1.5,
    backgroundColor: 'grey',
    marginTop: '2%',
    position: 'absolute',
    top: '5%',
    left: '60%',
  },
});

export default EmployeeAttendance;
