import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ViolationDetails = () => {
  return (
    <View style={styles.container}>
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
    paddingTop: '10%',
  },
  imageStyle: {width: 250, height: 150, borderRadius: 20},
  titleStlye: {
    fontWeight: '600',
    fontSize: 20,
    color: 'black',
    marginTop: '20%',
  },
  timeStyle: {fontSize: 17, fontWeight: '400', color: 'black'},
});
export default ViolationDetails;
