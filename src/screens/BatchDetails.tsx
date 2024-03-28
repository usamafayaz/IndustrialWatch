import React from 'react';
import {StyleSheet, View, TouchableOpacity, FlatList, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchBarComponent from '../components/SearchBarComponent';
import SecondaryAppBar from '../components/SecondaryAppBar';

const BatchDetails = () => {
  const navigation = useNavigation();

  const handleSearch = (text: string) => {
    // Searched text is returned. use it however you want!
    console.warn(text);
  };

  const ProductList = [
    {productNumber: 'P#11320051123'},
    {productNumber: 'P#21320011023'},
    {productNumber: 'P#31320251123'},
    {productNumber: 'P#31320251111'},
    {productNumber: 'P#31320251894'},
  ];

  return (
    <View style={styles.container}>
      <SecondaryAppBar text="Batch#11320051123" />
      <SearchBarComponent
        onSearch={handleSearch}
        placeHolder="Search Product"
      />
      <FlatList
        style={{width: '100%'}}
        data={ProductList}
        renderItem={({item}) => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Batch Summary' as never);
                }}>
                <View style={styles.BatchesContainer}>
                  <Text style={styles.productsStyle}>{item.productNumber}</Text>

                  <Icon name="arrow-forward-ios" size={20} color="#555" />
                </View>
              </TouchableOpacity>
              <View style={styles.horizontalLineStyle}></View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
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
  productsStyle: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
  },
  batchHeaderStyle: {
    fontSize: 23,
    fontWeight: '600',
    color: 'black',
    marginVertical: 10,
  },
  horizontalLineHeader: {
    width: '65%',
    height: 2,
    backgroundColor: 'black',
    alignSelf: 'center',
    marginBottom: '7%',
  },
});

export default BatchDetails;
