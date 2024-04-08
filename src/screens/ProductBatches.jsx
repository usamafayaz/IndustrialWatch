import React, {useState, useCallback} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Text,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import API_URL from '../../apiConfig';
import ButtonComponent from '../components/ButtonComponent';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import PrimaryAppBar from '../components/PrimaryAppBar';

const ProductBatches = props => {
  const {item} = props.route.params;
  const product_number = item.product_number;
  const product_name = item.name;

  const [batchesList, setBatchesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      fetchBatches();
    }, []),
  );

  const fetchBatches = async () => {
    try {
      const response = await fetch(
        `${API_URL}/Production/GetAllBatches?product_number=${encodeURIComponent(
          product_number,
        )}`,
      );
      const data = await response.json();
      setBatchesList(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching batches:', error);
    }
  };

  return (
    <View style={styles.container}>
      <PrimaryAppBar text={product_name} />
      {loading ? (
        <ActivityIndicator animating={loading} style={{flex: 1}} size={30} />
      ) : (
        <>
          {batchesList.length === 0 ? (
            <Text style={styles.noBatchesText}>No batches found.</Text>
          ) : (
            <FlatList
              style={{width: '100%', marginTop: 20}}
              data={batchesList}
              renderItem={({item}) => {
                return (
                  <View>
                    <TouchableOpacity
                      style={{
                        backgroundColor: item.status == 0 ? 'pink' : '#FFFFFF',
                        margin: 3,
                        borderRadius: 10,
                      }}
                      onPress={() => {
                        navigation.navigate('Batch Detail', {
                          item: item,
                        });
                      }}>
                      <View style={styles.BatchesContainer}>
                        <Text style={styles.productsStyle}>
                          {item.batch_number}
                        </Text>
                        <Icon name="arrow-forward-ios" size={20} color="#555" />
                      </View>
                    </TouchableOpacity>
                    <View style={styles.horizontalLineStyle}></View>
                  </View>
                );
              }}
            />
          )}
        </>
      )}
      <View style={styles.buttonWrapper}>
        <ButtonComponent
          title="Create Batch"
          onPress={() => navigation.navigate('Add Batch', {item: item})}
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
  buttonWrapper: {
    alignSelf: 'center',
    width: '70%',
    justifyContent: 'flex-end',
    marginBottom: 15,
  },
  noBatchesText: {
    flex: 1,
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    fontStyle: 'italic',
    marginTop: '80%',
  },
});

export default ProductBatches;
