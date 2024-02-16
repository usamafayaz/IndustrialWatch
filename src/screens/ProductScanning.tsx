import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProductScanning = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.column}>
          <TouchableOpacity>
            <Icon name="camera-outline" size={60} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.column}>
          <TouchableOpacity>
            <Icon name="camera-outline" size={60} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <TouchableOpacity>
            <Icon name="camera-outline" size={60} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.column}>
          <TouchableOpacity>
            <Icon name="camera-outline" size={60} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProductScanning;
