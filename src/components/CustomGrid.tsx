import React from 'react';
import {
  FlatList,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const CustomGrid = (props: {renderGrid: any}) => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={props.renderGrid}
        keyExtractor={item => item.name}
        numColumns={2}
        renderItem={({item}) => {
          let firstLine = '';
          let secondLine = '';
          const words = item.name.split(' ');
          if (words.length > 1) {
            firstLine = words[0];
            secondLine = words[1];
          } else {
            firstLine = item.name;
          }
          return (
            <TouchableOpacity style={styles.gridItem} onPress={item.onPress}>
              <Image source={item.image} style={styles.imageStyle} />
              <Text style={styles.nameStyle}>{firstLine}</Text>
              {secondLine !== '' && (
                <Text style={[styles.nameStyle, {marginVertical: 0}]}>
                  {secondLine}
                </Text>
              )}
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    height: 155,
    width: 155,
    margin: 12,
    paddingTop: 6,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 20,
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
  nameStyle: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: '#616161',
  },
});

export default CustomGrid;
