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
          return (
            <TouchableOpacity style={styles.gridItem} onPress={item.onPress}>
              <Image source={item.image} style={styles.imageStyle} />
              <Text style={styles.nameStyle}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    height: 153,
    width: 153,
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
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
  },
});

export default CustomGrid;
