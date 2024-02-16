import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {launchCamera, CameraOptions} from 'react-native-image-picker';

const EmployeeMonitoring = () => {
  const handleCameraPress = () => {
    const options: CameraOptions = {
      mediaType: 'video' as 'photo' | 'video' | 'mixed', // Specify 'video' for capturing video
      videoQuality: 'high', // or 'low' for lower quality
      durationLimit: 30, // maximum duration of the video in seconds
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera picker');
      } else if (response.errorCode) {
        console.error('ImagePicker Error:', response.errorMessage);
      } else {
        // Video captured successfully, do something with it
        //   console.log('Video URI:', response.uri);
        // You can use the video URI to play the video or upload it to a server
      }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleCameraPress}>
        <Icon name="camera-outline" size={60} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default EmployeeMonitoring;
