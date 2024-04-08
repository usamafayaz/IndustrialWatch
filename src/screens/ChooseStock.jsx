import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, FlatList, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import API_URL from '../../apiConfig';
import PrimaryAppBar from '../components/PrimaryAppBar';

const ChooseStock = props => {
  const raw_material_id = props.route.params.raw_material_id;

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

  return (
    <View style={styles.container}>
      <PrimaryAppBar text={'Choose Stock'} />
      <View style={[styles.tableStyle, {width: '110%'}]}>
        <Text style={[styles.headerStyle, {flex: 2}]}>Stock Number</Text>
        <Text style={[styles.headerStyle, {flex: 1}]}>Quantity</Text>
        <Text style={[styles.headerStyle, {flex: 1}]}>Price/KG</Text>
        <Text style={[styles.headerStyle, {flex: 2}]}>Date</Text>
      </View>
      <FlatList
        data={inventoryDetailList}
        renderItem={({item, index}) => {
          return (
            <View
              style={[
                styles.tableStyle,
                {width: '100%', alignItems: 'center'},
              ]}>
              <Text style={[styles.columnStyle, {flex: 3}]}>
                {item.stock_number}
              </Text>
              <Text style={[styles.columnStyle, {flex: 1}]}>
                {item.quantity} KG
              </Text>
              <Text style={[styles.columnStyle, {flex: 1}]}>
                {parseInt(parseFloat(item.price_per_kg))}
              </Text>
              <Text style={[styles.columnStyle, {flex: 1.5}]}>
                {item.purchased_date}
              </Text>
              <CheckBox
                style={styles.textInputStyle}
                value={selectedItems.includes(index)}
                onValueChange={newValue => {
                  if (newValue) {
                    setSelectedItems([...selectedItems, index]);
                  } else {
                    setSelectedItems(
                      selectedItems.filter(item => item !== index),
                    );
                  }
                }}
              />
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
    backgroundColor: '#FFFFFF',
  },
  tableStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  columnStyle: {
    fontSize: 15,
    color: 'black',
    marginRight: 5,
  },
  headerStyle: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginRight: 5,
  },
  textInputStyle: {
    fontSize: 16,
    marginTop: 5,
    width: 100,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
    color: 'black',
    justifyContent: 'center',
  },
});
export default ChooseStock;
