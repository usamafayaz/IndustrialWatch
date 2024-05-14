import AsyncStorage from '@react-native-async-storage/async-storage';
import {ToastAndroid} from 'react-native';

let API_URL = '';

const fetchIPAddress = async () => {
  try {
    const ipAddress = await AsyncStorage.getItem('IPAddress');
    if (ipAddress) {
      API_URL = `http://${ipAddress}:5000/api`;
    }
  } catch (error) {
    ToastAndroid.show('Error fetching IP address:', ToastAndroid.SHORT);
  }
};

fetchIPAddress();

const updateAPIUrl = async () => {
  await fetchIPAddress();
};

export {API_URL, updateAPIUrl};
