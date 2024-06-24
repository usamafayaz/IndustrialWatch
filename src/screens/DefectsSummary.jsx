import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import SecondaryAppBar from '../components/SecondaryAppBar';

const DefectSummary = props => {
  const {result} = props.route.params;

  return (
    <View style={styles.container}>
      <View style={styles.summaryContainer}>
        <View style={styles.rowStyle}>
          <Text style={styles.label}>Total Items</Text>
          <Text style={styles.value}>{result.total_items}</Text>
        </View>
        <View style={styles.rowStyle}>
          <Text style={styles.label}>Defected Items</Text>
          <Text style={styles.value}>{result.total_defected_items}</Text>
        </View>
      </View>
      <Text style={styles.sectionHeading}>Defect Details</Text>
      <FlatList
        data={result.defects}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) =>
          Object.values(item)[0] > 0 ? (
            <View style={styles.itemContainer}>
              <View style={styles.rowStyle}>
                <Text style={styles.label}>Defect Name</Text>
                <Text style={styles.value}>{Object.keys(item)[0]}</Text>
              </View>
              <View style={styles.rowStyle}>
                <Text style={styles.label}>Defect Count</Text>
                <Text style={styles.value}>{Object.values(item)[0]}</Text>
              </View>
            </View>
          ) : null
        }
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
  summaryContainer: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#f1f1f1',
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  itemContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
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

export default DefectSummary;
