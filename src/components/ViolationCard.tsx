import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';

const ViolationCard = (props: {name: string; date: string; time: string}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image
          resizeMode="center"
          source={require('../../assets/images/Violation.png')}
          style={styles.imageStyle}
        />
        <View>
          <Text style={styles.nameTextStyle}>{props.name}</Text>
          <Text style={styles.timeTextStyle}>{props.time}</Text>
          <Text style={styles.timeTextStyle}>{props.date}</Text>
        </View>
      </View>
      <View style={styles.horizontalLineStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '5%',
    backgroundColor: '#FFFFFF',
  },
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingRight: '14%',
    alignItems: 'center',
  },
  imageStyle: {width: 100, height: 100, marginRight: 40},
  nameTextStyle: {color: 'black', fontSize: 22, fontWeight: 'bold'},
  timeTextStyle: {color: 'grey', fontSize: 18},
  horizontalLineStyle: {
    width: '100%',
    backgroundColor: 'grey',
    marginTop: '2%',
    height: 1,
    opacity: 0.5,
  },
});

export default ViolationCard;
