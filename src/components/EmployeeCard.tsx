import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  Text,
  FlatList,
} from 'react-native';

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
    marginLeft: '4.5%',
    marginTop: 15,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  employeeContainer: {
    width: '46%',
    backgroundColor: '#f2f0e9',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2, // Adjust the opacity as needed
    shadowRadius: 2, // Adjust the radius as needed
    elevation: 3, // Android shadow elevation
  },
  imageContainer: {
    backgroundColor: 'lightgray', // Background color for the image
    borderRadius: 10,
    alignItems: 'center',
    overflow: 'hidden', // Clip the image within the rounded corners
  },
  image: {width: 120, height: 120},
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
    color: 'black',
    fontSize: 14,
  },
  productivityContainer: {
    alignSelf: 'flex-end',
  },
  productivityStyle: {
    color: 'black',
    fontSize: 15,
  },
});

export default EmployeeCard;
