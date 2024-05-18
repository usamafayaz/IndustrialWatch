import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import PrimaryAppBar from '../components/PrimaryAppBar';
import {API_URL} from '../../apiConfig';

const ViolationDetails = props => {
  const formatDate = date => {
    const [day, month, year] = date.split('-').map(Number);
    const formattedDate = new Date(year, month - 1, day);
    return formattedDate.toDateString();
  };
  const {item, name} = props.route.params;
  return (
    <View style={styles.container}>
      <PrimaryAppBar text={name} />
      <Image
        resizeMode="center"
        source={{
          uri: `${API_URL}/EmployeeViolationImage/${encodeURIComponent(
            item.images[0],
          )}`,
        }}
        style={styles.imageStyle}
      />
      <Text style={styles.titleStlye}>{item.rule_name}</Text>
      <Text style={styles.timeStyle}>{item.time}</Text>
      <Text style={styles.timeStyle}>{formatDate(item.date)}</Text>
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
