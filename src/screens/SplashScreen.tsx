import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {View, Image, StyleSheet} from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login' as never);
    }, 2500);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/launcher.png')}
        style={styles.logo}
      />
      <Text style={styles.titleStyle}>Industrial Watch</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 220,
    height: 220,
  },
  titleStyle: {fontSize: 28, color: '#0E0C0A', fontWeight: 'bold', margin: 10},
});

export default SplashScreen;
