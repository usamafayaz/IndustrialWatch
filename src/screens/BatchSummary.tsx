import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ButtonComponent from '../components/ButtonComponent';
import TextField from '../components/TextField';
import SecondaryAppBar from '../components/SecondaryAppBar';

const BatchSummary = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SecondaryAppBar text="Batch#11320051123" />
      <View style={[styles.rowWrapper, {marginTop: '10%'}]}>
        <Text style={styles.textStyle}>Product#:</Text>
        <View style={styles.boxStyle}>
          <Text style={styles.boxTextStyle}>P#21215415512</Text>
        </View>
      </View>
      <View style={styles.rowWrapper}>
        <Text style={styles.textStyle}>Expected Yield:</Text>
        <View style={styles.boxStyle}>
          <Text style={styles.boxTextStyle}>956 </Text>
        </View>
      </View>
      <View style={styles.rowWrapper}>
        <Text style={styles.textStyle}>Output Yield:</Text>
        <View style={styles.boxStyle}>
          <Text style={styles.boxTextStyle}>915 </Text>
        </View>
      </View>

      <View style={styles.buttonWrapper}>
        <ButtonComponent
          title="Defects"
          onPress={() => navigation.navigate('Defects' as never)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },

  rowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: '4%',
    marginBottom: 15,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  },
  boxStyle: {
    flex: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#E5E5E5',
    marginLeft: 15,
    paddingLeft: 20,
  },
  boxTextStyle: {color: 'grey'},
  buttonWrapper: {
    alignItems: 'center',
    width: '70%',
    marginTop: '90%',
  },
});

export default BatchSummary;
