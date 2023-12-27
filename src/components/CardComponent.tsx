import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const CardComponent = (props: {title: string; onPress: any}) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={props.onPress}>
      <Text style={styles.cardText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '90%',
    height: 70,
    backgroundColor: '#2E81FE',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '4%',
  },
  cardText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CardComponent;
