import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

const ViolationSummary = props => {
  const {result} = props.route.params;

  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.value}>Employee: </Text>
        <Text style={styles.label}>{result.employee_name}</Text>
      </View>
      <FlatList
        data={result.rules}
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
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 10,
  },
  value: {
    fontSize: 18,
    color: '#555',
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
});

export default ViolationSummary;
