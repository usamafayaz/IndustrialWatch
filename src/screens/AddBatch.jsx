import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import PrimaryAppBar from '../components/PrimaryAppBar';
import {StyleSheet} from 'react-native';
import TextField from '../components/TextField';
import API_URL from '../../apiConfig';
import ButtonComponent from '../components/ButtonComponent';
import {useNavigation, useFocusEffect} from '@react-navigation/native';

const AddBatch = props => {
  const {item} = props.route.params;
  const product_number = item.product_number;
  const product_name = item.name;
  const [batchPerDay, setBatchPerDay] = useState();
  const [materialList, setMaterialList] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    fetchProductFormula();
  }, []);
  const fetchProductFormula = async () => {
    const response = await fetch(
      `${API_URL}/Production/GetFormulaOfProduct?product_number=${encodeURIComponent(
        product_number,
      )}`,
    );
    const data = await response.json();
    console.log(data);
    setMaterialList(data);
  };

  return (
    <View style={styles.container}>
      <PrimaryAppBar text={product_name} />
      <Text style={styles.hintText}>Batch/Day</Text>
      <TextField
        placeHolder="e.g  200"
        value={batchPerDay}
        onChangeText={setBatchPerDay}
      />

      <View style={[styles.tableStyle, {width: '55%'}]}>
        <Text style={styles.headerStyle}>#</Text>
        <Text style={styles.headerStyle}>Material</Text>
        <Text style={styles.headerStyle}>Quantity</Text>
      </View>
      <FlatList
        data={materialList}
        renderItem={({item, index}) => {
          return (
            <View style={[styles.tableStyle, {width: '87%'}]}>
              <Text style={styles.columnStyle}>{index + 1}</Text>
              <Text style={styles.columnStyle}>{item.name}</Text>
              <Text style={styles.columnStyle}>{item.quantity}</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Choose Stock', {
                    raw_material_id: item.raw_material_id,
                  });
                }}>
                <Text style={styles.detailLink}>Choose Stock</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <View style={styles.buttonWrapper}>
        <ButtonComponent title="Add Stock" onPress={() => setModalView(true)} />
      </View>
    </View>
  );
};

export default AddBatch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  hintText: {
    color: 'grey',
    fontWeight: '700',
    fontSize: 18,
    marginLeft: 35,
    marginTop: 10,
  },
  tableStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  columnStyle: {
    fontSize: 18,
    color: 'black',
  },
  headerStyle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  detailLink: {
    color: '#105F9E',
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  buttonWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
    marginBottom: 20,
  },
});
