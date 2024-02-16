import React from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import EmployeeAttendance from './EmployeeAttendance';
import EmployeeViolation from './EmployeeViolation';
import EmployeeLoginHome from './EmployeeLoginHome';
import EmployeeProfile from './EmployeeProfile';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const EmployeeLogin = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerTintColor: 'white',
          headerTransparent: false,
          headerStyle: {
            backgroundColor: '#2E81FE',
            height: 70,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          },
          headerRight: () => {
            return (
              <Image
                style={{marginRight: 12}}
                source={require('../../assets/images/employeeImage.png')}
              />
            );
          },
          headerTitleStyle: {fontSize: 19},
          tabBarStyle: {height: 55},
          tabBarIcon: ({color}) => {
            let iconName;
            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'Attendance') iconName = 'event';
            else if (route.name === 'Violations') iconName = 'block';
            else if (route.name === 'Profile') iconName = 'person';

            return <Icon name={iconName} size={22} color={color} />;
          },
        })}
        tabBarOptions={{
          showLabel: false,
          activeTintColor: '#2367CE',
          inactiveTintColor: 'grey',
        }}>
        <Tab.Screen name="Home" component={EmployeeLoginHome} />
        <Tab.Screen name="Attendance" component={EmployeeAttendance} />
        <Tab.Screen name="Violations" component={EmployeeViolation} />
        <Tab.Screen
          name="Profile"
          component={EmployeeProfile}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
      <TouchableOpacity
        style={styles.floatingButtonStyle}
        onPress={() => {
          navigation.navigate('Employee Summary');
        }}>
        <Icon
          name="summarize"
          size={25}
          color="white"
          onPress={() => {
            navigation.navigate('Employee Summary');
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  floatingButtonStyle: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#2367CE',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 38,
    right: '43%',
  },
});

export default EmployeeLogin;
