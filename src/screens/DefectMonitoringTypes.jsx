import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import ButtonComponent from '../components/ButtonComponent';

const DefectMonitoringTypes = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/defect_monitoring.png')}
        style={styles.imageStyle}
      />
      <ButtonComponent
        title="Batch Monitoring"
        onPress={() => {
          navigation.navigate('Batch Defect Monitoring');
        }}
      />
      <ButtonComponent
        title="Multiple Angle Monitoring"
        onPress={() => {
          navigation.navigate('Multiple Angle Monitoring');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  imageStyle: {
    backgroundColor: 'white',
    height: 350,
    width: 350,
    margin: '15%',
    marginBottom: '30%',
  },
});

export default DefectMonitoringTypes;
