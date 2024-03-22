import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ButtonComponent = (props: {title: string; onPress: () => void}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '86%',
    backgroundColor: '#2E81FE',

    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 40,
    textShadowRadius: 5,
    shadowColor: 'black',
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ButtonComponent;
