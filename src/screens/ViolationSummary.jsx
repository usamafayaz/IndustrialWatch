import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

const ViolationSummary = props => {
  const {result} = props.route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Violation Summary</Text>
      <FlatList
        data={result}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <View style={styles.rowStyle}>
              <Text style={styles.label}>Violated Rule:</Text>
              <Text style={styles.value}>{item.rule_name}</Text>
            </View>
            <View style={styles.rowStyle}>
              <Text style={styles.label}>Violation Time:</Text>
              <Text style={styles.value}>{item.total_time} s</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 40,
  },
  itemContainer: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  value: {
    fontSize: 16,
    color: '#555',
  },
});

export default ViolationSummary;
