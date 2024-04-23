import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Text,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import PrimaryAppBar from '../components/PrimaryAppBar';
import RNFetchBlob from 'rn-fetch-blob';
import ButtonComponent from '../components/ButtonComponent';
import API_URL from '../../apiConfig';

const ProductBatches = props => {
  const {product_number, name: product_name} = props.route.params.item;

  const [batchesList, setBatchesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetchBatches();
  }, []);

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

  const downloadImages = async productNumber => {
    const dirs = RNFetchBlob.fs.dirs;
    const downloadDir = dirs.DownloadDir;
    try {
      const folderPath = `${downloadDir}/DefectedImages`;

      // Check if the folder exists, create it if not
      const isFolderExists = await RNFetchBlob.fs.isDir(folderPath);
      if (!isFolderExists) {
        await RNFetchBlob.fs.mkdir(folderPath); // Create the folder
      }

      // Construct the file path within the folder
      const filePath = `${folderPath}/${productNumber}.zip`;

      RNFetchBlob.config({
        // addAndroidDownloads: {
        //   useDownloadManager: false,
        //   notification: true,
        //   mime: 'application/zip',
        //   title: 'Defected Images',
        //   description: 'Downloading Defected Images',
        // },
        // fileCache: true,
        path: filePath,
      })
        .fetch(
          'GET',
          `${API_URL}/Production/GetAllDefectedImages?product_number=${encodeURIComponent(
            productNumber,
          )}`,
          {
            'Content-Type': 'application/zip',
            timeout: 600000, // Set timeout in milliseconds (e.g., 600 seconds)
          },
        )
        .then(res => {
          ToastAndroid.show('Download Successful.', ToastAndroid.SHORT);
          console.log('The file saved to ', res.path());
        });
    } catch (error) {
      console.error('Download failed:', error);
      ToastAndroid.show('Download Failed.', ToastAndroid.SHORT);
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
            <>
              <TouchableOpacity
                style={styles.downloadButton}
                onPress={() => {
                  downloadImages(product_number);
                }}>
                <Icon name="cloud-download" size={30} color="#FFFFFF" />
                <Text style={styles.downloadButtonText}>Defected Batches</Text>
              </TouchableOpacity>
              <FlatList
                style={{width: '100%', marginTop: 20}}
                data={batchesList}
                renderItem={({item}) => {
                  return (
                    <View>
                      <TouchableOpacity
                        style={{
                          backgroundColor:
                            item.status === 1
                              ? 'pink'
                              : item.status === 2
                              ? 'transparent'
                              : '#FFFFFF',
                          margin: 3,
                          marginHorizontal: 10,
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
                          <Icon
                            name="arrow-forward-ios"
                            size={20}
                            color="#555"
                          />
                        </View>
                      </TouchableOpacity>
                      <View style={styles.horizontalLineStyle}></View>
                    </View>
                  );
                }}
              />
            </>
          )}
        </>
      )}
      <View style={styles.buttonWrapper}>
        <ButtonComponent
          title="Create Batch"
          onPress={() =>
            navigation.navigate('Add Batch', {product_name, product_number})
          }
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
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4F4F4F',
    alignSelf: 'flex-end',
    marginRight: '5%',
    marginTop: '5%',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  downloadButtonText: {color: 'white', fontWeight: 'bold', marginLeft: 20},
});

export default ProductBatches;
