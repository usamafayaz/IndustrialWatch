import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, FlatList, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import API_URL from '../../apiConfig';
import PrimaryAppBar from '../components/PrimaryAppBar';
import MultiSelectComponent from '../components/MultiSelectComponent';
import ButtonComponent from '../components/ButtonComponent';

const ChooseStock = ({navigation, route}) => {
  const {raw_material_id} = route.params;

  const [inventoryDetailList, setInventoryDetailList] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    fetchStock();
  }, []);

  const fetchStock = async () => {
    const response = await fetch(
      `${API_URL}/Production/GetStockDetailOfRawMaterial?id=${raw_material_id}`,
    );
    const data = await response.json();
    console.log(data);
    setInventoryDetailList(data);
  };

  const handleDone = () => {
    console.warn('gv');
    const selectedStocks = inventoryDetailList.filter((_, index) =>
      selectedItems.includes(index),
    );
    console.log('bhejty waqt', selectedStocks);
    navigation.navigate('Add Batch', {selectedStocks});
  };

  return (
    <View style={styles.container}>
      <PrimaryAppBar text={'Choose Stock'} />
      <View style={[styles.tableStyle, {marginTop: 20}]}>
        <Text style={[styles.headerStyle, {flex: 1.8}]}>Stock Number</Text>
        <Text style={[styles.headerStyle, {flex: 0.7}]}>Qty</Text>
        <Text style={[styles.headerStyle, {flex: 1}]}>Price/kg</Text>
        <Text style={[styles.headerStyle, {flex: 1}]}>Date</Text>
      </View>
      <FlatList
        data={inventoryDetailList}
        renderItem={({item, index}) => {
          return (
            <View style={[styles.tableStyle]}>
              <Text style={[styles.columnStyle, {flex: 2.4}]}>
                {item.stock_number}
              </Text>
              <Text style={[styles.columnStyle, {flex: 1}]}>
                {item.quantity} KG
              </Text>
              <Text style={[styles.columnStyle, {flex: 1}]}>
                {parseInt(parseFloat(item.price_per_kg))}
              </Text>
              <Text style={[styles.columnStyle, {flex: 1}]}>
                {item.purchased_date}
              </Text>
              <CheckBox
                value={selectedItems.includes(index)}
                tintColors={{true: '#2196F3', false: 'black'}}
                onValueChange={newValue => {
                  setSelectedItems(prevSelectedItems => {
                    if (newValue) {
                      // If newValue is true, add the index to the selectedItems array
                      return [...prevSelectedItems, index];
                    } else {
                      // If newValue is false, remove the index from the selectedItems array
                      return prevSelectedItems.filter(item => item !== index);
                    }
                  });
                  console.log(selectedItems);
                }}
              />
            </View>
          );
        }}
      />
      <View style={styles.buttonWrapper}>
        <ButtonComponent title="Done" onPress={handleDone} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  tableStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  columnStyle: {
    fontSize: 13,
    color: 'black',
    marginRight: 5,
  },
  headerStyle: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginRight: 5,
  },
  buttonWrapper: {
    alignSelf: 'center',
    width: '70%',
    justifyContent: 'flex-end',
    marginBottom: 15,
  },
});

export default ChooseStock;
