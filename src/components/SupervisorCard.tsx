import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

const SupervisorCard = (props: {
  name: string;
  password: string;
  onEditPress: () => void;
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.cardContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.cardText}>{props.name}</Text>
        <Text style={styles.passwordText}>{props.password}</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => {
            props.onEditPress();
          }}>
          <FontAwesome5
            name="pen"
            size={19}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.warn('Delete Pressed!');
          }}>
          <FontAwesome5
            name="trash"
            size={19}
            color="#050505"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '90%',
    height: 75,
    backgroundColor: '#E5E5E5',
    borderRadius: 20,
    paddingLeft: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '4%',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  cardText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
  },
  passwordText: {
    color: 'gray',
    fontSize: 16,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 15,
  },
});

export default SupervisorCard;
