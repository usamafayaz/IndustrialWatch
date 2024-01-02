import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  Text,
  FlatList,
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const EmployeeCard = (props: {employees: any}) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={props.employees}
        renderItem={({item}) => {
          return (
            <View style={styles.employeeContainer}>
              <View style={styles.imageContainer}>
                <Image
                  resizeMode="center"
                  source={item.image}
                  style={styles.image}
                />
              </View>
              <View style={styles.textContainer}>
                <View>
                  <Text style={styles.nameStyle}>{item.name}</Text>
                  <Text style={styles.positionStyle}>{item.position}</Text>
                </View>
                <View style={styles.productivityContainer}>
                  <FontAwesome5Icon
                    name="clock"
                    color={'#FFB800'}
                    size={15}></FontAwesome5Icon>
                  <Text style={styles.productivityStyle}>
                    {item.productivity}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.grid}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: '3%',
    marginTop: 15,
  },
  grid: {
    justifyContent: 'space-between',
  },
  employeeContainer: {
    width: '46%',
    backgroundColor: 'white',
    padding: 5,
    margin: 5,
    borderWidth: 2,
    borderColor: '#CAC4D0',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5, // Adjust the radius as needed
    elevation: 2, // Android shadow elevation
  },
  imageContainer: {
    backgroundColor: '#F2F2F2', // Background color for the image
    width: 155,
    height: 105,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Clip the image within the rounded corners
  },
  image: {width: 140, height: 90, borderRadius: 10},
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameStyle: {
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
  },
  positionStyle: {
    color: '#616161',
    fontSize: 14,
  },
  productivityStyle: {
    color: 'black',
    fontSize: 15,
    marginLeft: 5,
  },
  productivityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default EmployeeCard;
