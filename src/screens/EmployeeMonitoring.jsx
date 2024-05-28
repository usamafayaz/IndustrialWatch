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
import {useNavigation} from '@react-navigation/native';

const EmployeeMonitoring = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const handleCameraPress = () => {
    const options = {
      mediaType: 'video',
      videoQuality: 'high',
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera picker');
      } else if (response.errorCode) {
        console.error('ImagePicker Error:', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const videoUri = response.assets[0].uri;
        if (videoUri) {
          uploadVideo(videoUri);
        }
      }
    });
  };

  const handleBrowsePress = () => {
    const options = {
      mediaType: 'video',
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.error('ImagePicker Error:', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const videoUri = response.assets[0].uri;
        if (videoUri) {
          uploadVideo(videoUri);
        }
      }
    });
  };

  const uploadVideo = async uri => {
    const formData = new FormData();
    formData.append('files', {
      uri,
      type: 'video/mp4', // Adjust the MIME type as needed
      name: 'video.mp4',
    });
    ToastAndroid.show('Uploading the Video', ToastAndroid.LONG);
    setLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/Automation/PredictEmployeeViolation`,
        {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      const result = await response.json();
      if (!response.ok) {
        ToastAndroid.show('Unknown face', ToastAndroid.SHORT);
        setLoading(false);
      } else {
        setLoading(false);
        navigation.navigate('Violation Summary', {result});
      }
    } catch (error) {
      console.error('Upload failed:', error);
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
            <Text style={styles.buttonText}>Record Video</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleBrowsePress} style={styles.button}>
            <Icon name="folder-open-outline" size={60} color="black" />
            <Text style={styles.buttonText}>Browse Video</Text>
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
