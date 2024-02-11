import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

//          Replaced By Custom Grid in AdminDashboard.
//          <CardComponent key={index} title={item.name} onPress={item.onPress} />

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
    alignSelf: 'center',
    textShadowRadius: 5,
    shadowColor: 'black',
    elevation: 5,
  },
  cardText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CardComponent;
