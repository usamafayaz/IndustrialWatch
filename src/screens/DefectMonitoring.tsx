import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

const DefectMonitoring = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/defectmonitoring.jpg')}
        style={styles.imageStyle}
      />
      <View style={styles.buttonWrapper}>
        <ButtonComponent
          title="Start Scanning"
          onPress={() => {
            navigation.navigate('Product Scanning' as never);
          }}
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
  imageStyle: {
    marginTop: '40%',
    width: 300,
    height: 300,
  },
  buttonWrapper: {width: '100%', alignItems: 'center', marginTop: 100},
});

export default DefectMonitoring;
