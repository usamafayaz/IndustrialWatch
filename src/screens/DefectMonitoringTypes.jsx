import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const DefectMonitoringTypes = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Batch Defect Monitoring');
        }}>
        <Image
          source={require('../../assets/icons/batch_monitoring.png')}
          style={styles.batchStyle}
        />
        <Text style={styles.buttonText}>Batch Monitoring</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Multiple Angle Monitoring');
        }}>
        <Image
          source={require('../../assets/icons/product_monitoring.png')}
          style={styles.angleStyle}
        />
        <Text style={styles.buttonText}>Multiple Angle Monitoring</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    marginTop: 10,
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
  batchStyle: {height: 70, width: 70},
  angleStyle: {height: 60, width: 60},
});

export default DefectMonitoringTypes;
