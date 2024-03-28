import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Button,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import TextField from '../components/TextField';
import Modal from 'react-native-modal';
import SecondaryAppBar from '../components/SecondaryAppBar';

const AddBatch = () => {
  const [modalView, setModalView] = useState(false);
  const [batchNumber, setBatchNumber] = useState('');
  const [tolerance, setTolerance] = useState('');
  const [angles, setAngles] = useState('');

  const [materialName, setMaterialName] = useState('');
  const [materialQuantity, setMaterialQuantity] = useState('');
  const [quantityPerItem, setQuantityPerItem] = useState('');
  const [materialPrice, setMaterialPrice] = useState('');

  const [materialsList, setMaterialsList] = useState([
    {name: 'Iron', quantity: '16 KG', price: '1500', quantityPerItem: '100 G'},
    {name: 'Copper', quantity: '4 KG', price: '5000', quantityPerItem: '500 G'},
    {name: 'Silver', quantity: '2 KG', price: '2000', quantityPerItem: '100 G'},
  ]);

  function addBatch() {
    materialsList.push({
      name: materialName,
      quantity: materialQuantity,
      price: materialPrice,
      quantityPerItem: quantityPerItem,
    });
    setMaterialName('');
    setMaterialQuantity('');
    setMaterialPrice('');
    setQuantityPerItem('');
    setModalView(false);
  }

  const data = [
    {key: '1', value: 'Mobiles', disabled: true},
    {key: '2', value: 'Appliances'},
    {key: '3', value: 'Cameras'},
    {key: '4', value: 'Computers', disabled: true},
    {key: '5', value: 'Vegetables'},
    {key: '6', value: 'Diary Products'},
    {key: '7', value: 'Drinks'},
  ];

  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <SecondaryAppBar text="" />
        <TouchableOpacity
          style={{position: 'absolute', top: '2.5%', left: '58%'}}
          onPress={() => {
            setModalView(true);
          }}>
          <Text style={styles.buttonTextStyle}>Add Material</Text>
        </TouchableOpacity>
        <TextField
          placeHolder="Batch#"
          value={batchNumber}
          onChangeText={(text: any) => setBatchNumber(text)}
        />
        <TextField
          placeHolder="Number of angles"
          value={angles}
          onChangeText={(text: any) => setAngles(text)}
        />
        <TextField
          placeHolder="Tolerance %"
          value={tolerance}
          onChangeText={(text: any) => setTolerance(text)}
        />
        <Text style={styles.headingStyle}>Raw Materials</Text>
        <View style={styles.tableStyle}>
          <Text style={styles.columnStyle}>Name</Text>
          <Text style={styles.columnStyle}>Quantity</Text>
          <Text style={styles.columnStyle}>Price</Text>
          <Text style={styles.columnStyle}>Quantity perItem</Text>
        </View>
        <View style={styles.horizontalLineStyle}></View>

        <View style={{width: '100%'}}>
          <FlatList
            // numColumns={}
            data={materialsList}
            renderItem={({item}) => {
              return (
                <View>
                  <View style={styles.tableStyle}>
                    <Text style={styles.columnStyle}>{item.name}</Text>
                    <Text style={styles.columnStyle}>{item.quantity}</Text>

                    <Text style={styles.columnStyle}>{item.price}</Text>
                    <Text style={styles.columnStyle}>
                      {item.quantityPerItem}
                    </Text>
                  </View>
                  <View style={styles.horizontalLineStyleThin}></View>
                </View>
              );
            }}
          />
        </View>
        <Modal isVisible={modalView}>
          <View style={styles.modalWrapper}>
            <Text style={styles.nameStyle}>New Material</Text>
            <TextField
              placeHolder="Material Name"
              value={materialName}
              onChangeText={(text: any) => setMaterialName(text)}
            />
            <TextField
              placeHolder="Quantity"
              value={materialQuantity}
              onChangeText={(text: any) => setMaterialQuantity(text)}
            />
            <TextField
              placeHolder="Quantity per Item"
              value={quantityPerItem}
              onChangeText={(text: any) => setQuantityPerItem(text)}
            />
            <TextField
              placeHolder="Price"
              value={materialPrice}
              onChangeText={(text: any) => setMaterialPrice(text)}
            />

            <View style={styles.modalButtonWrapper}>
              <TouchableOpacity
                onPress={() => {
                  setModalView(false);
                  setMaterialName('');
                  setMaterialQuantity('');
                  setMaterialPrice('');
                  setQuantityPerItem('');
                }}>
                <Text style={styles.cancelStyle}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  addBatch();
                }}>
                <Text style={styles.addStyle}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={styles.buttonWrapper}>
          <ButtonComponent
            title="Add Batch"
            onPress={() => {
              console.warn('Batch Added.');
              navigation.navigate('Production' as never);
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '70%',
  },
  buttonTextStyle: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 19,
    paddingVertical: 8,
    fontSize: 18,
    textAlign: 'right',
    borderRadius: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  headingStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'black',
  },
  columnStyle: {
    fontSize: 16,
    margin: 12,
    color: 'black',
  },
  tableStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  nameStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: 5,
  },
  modalWrapper: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: 369,
    width: '94%',
    alignSelf: 'center',
    borderRadius: 30,
  },
  modalButtonWrapper: {
    flexDirection: 'row',
    marginLeft: '48%',
    marginTop: '3%',
  },
  cancelStyle: {
    color: '#2196F3',
    marginRight: 10,
    paddingVertical: '5%',
    fontWeight: 'bold',
  },
  addStyle: {
    color: 'white',
    backgroundColor: '#2196F3',
    borderRadius: 20,
    paddingHorizontal: '10%',
    paddingVertical: '5%',
    fontWeight: 'bold',
  },

  horizontalLineStyle: {
    width: '88%',
    height: 2,
    backgroundColor: 'black',
    alignSelf: 'center',
  },
  horizontalLineStyleThin: {
    width: '88%',
    height: 0.5,
    backgroundColor: 'black',
    alignSelf: 'center',
  },
});
export default AddBatch;
