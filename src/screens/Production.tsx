import React from 'react';
import {StyleSheet, View, TouchableOpacity, FlatList, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ButtonComponent from '../components/ButtonComponent';
import SearchBarComponent from '../components/SearchBarComponent';

const Production = () => {
  const navigation = useNavigation();

  const handleSearch = (text: string) => {
    // Searched text is returned. use it however you want!
    console.warn(text);
  };

  const BatchList = [
    {batchNumber: 'Batch#11320051123'},
    {batchNumber: 'Batch#21320011023'},
    {batchNumber: 'Batch#31320251123'},
    {batchNumber: 'Batch#31320251545'},
    {batchNumber: 'Batch#31320254444'},
  ];

  return (
    <View style={styles.container}>
      <SearchBarComponent onSearch={handleSearch} placeHolder="Search Batch" />
      <FlatList
        style={{width: '100%'}}
        data={BatchList}
        renderItem={({item}) => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Batch Detail' as never);
                }}>
                <View style={styles.BatchesContainer}>
                  <Text style={styles.BatchesStyle}>{item.batchNumber}</Text>

                  <Icon name="arrow-forward-ios" size={21} color="black" />
                </View>
              </TouchableOpacity>
              <View style={styles.horizontalLineStyle}></View>
            </View>
          );
        }}
      />
      <View style={styles.buttonWrapper}>
        <ButtonComponent
          title="Create Batch"
          onPress={() => {
            navigation.navigate('Create Batch' as never);
          }}
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
    paddingTop: '4%',
  },
  buttonWrapper: {
    alignItems: 'center',
    width: '70%',
  },
  BatchesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 17,
    marginHorizontal: 28,
    paddingRight: 13,
  },
  horizontalLineStyle: {
    width: '88%',
    height: 1,
    backgroundColor: 'black',
    alignSelf: 'center',
  },
  BatchesStyle: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
  },
});

export default Production;
