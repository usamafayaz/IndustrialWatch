import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {API_URL} from '../../apiConfig';
import {useNavigation, useRoute} from '@react-navigation/native';

const EmployeeMonitoring = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const {mode} = route.params;

  const handleCameraPress = () => {
    const options = {
      mediaType: mode === 'attendance' ? 'photo' : 'video',
      quality: mode === 'attendance' ? 1 : 0.8,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera picker');
      } else if (response.errorCode) {
        console.error('ImagePicker Error:', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        if (uri) {
          uploadFile(uri);
        }
      }
    });
  };

  const handleBrowsePress = () => {
    const options = {
      mediaType: mode === 'attendance' ? 'photo' : 'video',
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.error('ImagePicker Error:', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        if (uri) {
          uploadFile(uri);
        }
      }
    });
  };

  const uploadFile = async uri => {
    const formData = new FormData();
    if (mode == 'attendance') {
      formData.append('file', {
        uri,
        type: 'image/jpeg',
        name: 'image.jpg',
      });
    } else {
      formData.append('files', {
        uri,
        type: 'video/mp4',
        name: 'video.mp4',
      });
    }

    const uploadUrl =
      mode === 'attendance'
        ? `${API_URL}/Employee/MarkAttendance`
        : `${API_URL}/Automation/PredictEmployeeViolation`;

    ToastAndroid.show('Uploading the file', ToastAndroid.LONG);
    setLoading(true);

    try {
      const response = await fetch(uploadUrl, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const result = await response.json();
      if (response.ok) {
        if (mode === 'attendance') {
          console.log(result.message);
          ToastAndroid.show(result.message, ToastAndroid.LONG);
        } else {
          navigation.navigate('Violation Summary', {result});
        }
      } else {
        console.log(result.message);

        ToastAndroid.show(
          result.message || 'Unknown error',
          ToastAndroid.SHORT,
        );
      }
    } catch (error) {
      console.error('Upload failed:', error);
      ToastAndroid.show('Upload failed', ToastAndroid.SHORT);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#2196F3" />
      ) : (
        <>
          <TouchableOpacity onPress={handleCameraPress} style={styles.button}>
            <Icon name="camera-outline" size={60} color="black" />
            <Text style={styles.buttonText}>
              {mode === 'attendance' ? 'Capture Photo' : 'Record Video'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleBrowsePress} style={styles.button}>
            <Icon name="folder-open-outline" size={60} color="black" />
            <Text style={styles.buttonText}>
              Browse {mode === 'attendance' ? 'Photo' : 'Video'}
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    marginTop: 10,
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default EmployeeMonitoring;
