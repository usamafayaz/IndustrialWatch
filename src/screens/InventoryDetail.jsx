import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, FlatList} from 'react-native';
import {View} from 'react-native';
import API_URL from '../../apiConfig';
import PrimaryAppBar from '../components/PrimaryAppBar';

const InventoryDetail = props => {
  const id = props.route.params.item.raw_material_id;
  const name = props.route.params.item.raw_material_name;
  const [inventoryDetailList, setInventoryDetailList] = useState([]);
  useEffect(() => {
    fetchStock();
  }, []);

  const fetchStock = async () => {
    const response = await fetch(
      `${API_URL}/Production/GetStockDetailOfRawMaterial?id=${id}`,
    );
    const data = await response.json();
    console.log(data);
    setInventoryDetailList(data);
  };
  return (
    <View style={styles.container}>
      <PrimaryAppBar text={name} />
      <View style={[styles.tableStyle, {width: '85%'}]}>
        <Text style={styles.headerStyle}>Stock Number</Text>
        <Text style={styles.headerStyle}>Quantity</Text>
        <Text style={styles.headerStyle}>Price/KG</Text>
        <Text style={styles.headerStyle}>Date</Text>
      </View>
      <FlatList
        data={inventoryDetailList}
        renderItem={({item, index}) => {
          return (
            <View style={[styles.tableStyle, {width: '87%'}]}>
              <Text style={styles.columnStyle}>{item.stock_number}</Text>
              <Text style={styles.columnStyle}>{item.quantity} KG</Text>
              <Text style={styles.columnStyle}>
                {parseInt(parseFloat(item.price_per_kg))}
              </Text>
              <Text style={styles.columnStyle}>{item.purchased_date}</Text>
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
    margin: 20,
  },
  columnStyle: {
    fontSize: 15,
    color: 'black',
  },
  headerStyle: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
});
export default InventoryDetail;
