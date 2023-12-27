import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

const CustomGrid = (props: {title: string; onPress: any}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.cardContainer} onPress={props.onPress}>
          <Text style={styles.cardText}>{props.title}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer} onPress={props.onPress}>
          <Text style={styles.cardText}>{props.title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '40%',
    height: 110,
    backgroundColor: 'lightgrey',
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

export default CustomGrid;
