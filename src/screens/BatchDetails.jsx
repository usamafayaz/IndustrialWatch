import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import PrimaryAppBar from '../components/PrimaryAppBar';

const BatchDetails = props => {
  const name = props.route.params.item.batch_number;
  return (
    <View style={styles.container}>
      <PrimaryAppBar text={name} />
      <View style={styles.rowStyle}>
        <Text style={[styles.hintText, {marginTop: 30}]}>Status:</Text>
        <TouchableOpacity>
          <Text style={[styles.statusStyle, {backgroundColor: '#FF0000'}]}>
            Rejected
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowStyle}>
        <Text style={styles.hintText}>Dated:</Text>
        <Text style={styles.valueText}>20/04/2024</Text>
      </View>
      <View style={styles.rowStyle}>
        <Text style={styles.hintText}>Total Pieces:</Text>
        <Text style={styles.valueText}>200</Text>
      </View>
      <View style={styles.rowStyle}>
        <Text style={styles.hintText}>Defected Pieces:</Text>
        <Text style={styles.valueText}>20</Text>
      </View>
      <View style={styles.rowStyle}>
        <Text style={styles.hintText}>Rejection Tolorence:</Text>
        <Text style={styles.valueText}>2%</Text>
      </View>
      <View style={styles.rowStyle}>
        <Text style={styles.hintText}>Total Yield:</Text>
        <Text style={styles.valueText}>16%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  hintText: {
    fontSize: 20,
    color: 'grey',
    fontWeight: '500',
    marginHorizontal: 20,
    marginTop: 10,
  },
  valueText: {
    marginTop: 10,
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
  },
  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusStyle: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    color: '#FFFFFF',
    marginTop: 30,
  },
});

export default BatchDetails;
