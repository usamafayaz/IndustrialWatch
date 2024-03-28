import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import PrimaryAppBar from '../components/PrimaryAppBar';

const ViolationDetails = () => {
  return (
    <View style={styles.container}>
      <PrimaryAppBar text={'Muhammad Anees'} />
      <Image
        source={require('../../assets/images/Violation.png')}
        style={styles.imageStyle}
      />
      <Text style={styles.titleStlye}>Mobile Usage</Text>
      <Text style={styles.timeStyle}>10 : 00 AM</Text>
      <Text style={styles.timeStyle}>23 August 2023</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  imageStyle: {width: '60%', height: '20%', borderRadius: 20, marginTop: '8%'},
  titleStlye: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginTop: '8%',
  },
  timeStyle: {fontSize: 17, fontWeight: '600', color: 'black'},
});
export default ViolationDetails;
