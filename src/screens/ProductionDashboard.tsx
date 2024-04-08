import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomGrid from '../components/CustomGrid';
import PrimaryAppBar from '../components/PrimaryAppBar';

const ProductionDashboard = () => {
  const navigation = useNavigation();
  const CardList = [
    {
      name: 'Raw Materials',
      image: require('../../assets/icons/raw_materials.png'),
      onPress: () => {
        navigation.navigate('Raw Material' as never);
      },
    },
    {
      name: 'Add Product',
      image: require('../../assets/icons/add_product.png'),
      onPress: () => {
        navigation.navigate('Add Product' as never);
      },
    },
    {
      name: 'Inventory',
      image: require('../../assets/icons/inventory.png'),
      onPress: () => {
        navigation.navigate('Inventory' as never);
      },
    },
    {
      name: 'Products',
      image: require('../../assets/icons/products.png'),
      onPress: () => {
        navigation.navigate('Products' as never);
      },
    },
  ];
  return (
    <View style={styles.containerStyle}>
      <View style={styles.cardsWrapper}>
        <CustomGrid renderGrid={CardList} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerStyle: {flex: 1, backgroundColor: '#2196F3'},
  cardsWrapper: {
    marginTop: '15%',
    paddingTop: '30%',
    backgroundColor: '#F3F3F3',
    flex: 1,
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: 'center',
  },
});
export default ProductionDashboard;
