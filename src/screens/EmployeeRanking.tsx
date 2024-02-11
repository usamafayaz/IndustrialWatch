import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
//🥇🥈🥉
const EmployeeRanking = () => {
  const SectionsList = [
    {key: '1', value: 'Manufactring'},
    {key: '2', value: 'Packing'},
    {key: '3', value: 'Management'},
    {key: '4', value: 'Shipping'},
    {key: '5', value: 'Marketing'},
  ];
  const employees = [
    {
      id: 1,
      name: 'Walter White',
      position: 'Chemist',
      productivity: '100% ',
      image: require('../../assets/images/employee.jpg'),
    },
    {
      id: 2,
      name: 'Omar Khan',
      position: 'Engineer',
      productivity: '95% ',
      image: require('../../assets/images/employee.jpg'),
    },
    {
      id: 3,
      name: 'Fatima Ali',
      position: 'Designer',
      productivity: '92% ',
      image: require('../../assets/images/employee.jpg'),
    },
    {
      id: 4,
      name: 'Zainab Hassan',
      position: 'Technician',
      productivity: '90% ',
      image: require('../../assets/images/employee.jpg'),
    },
    {
      id: 5,
      name: 'Yusuf Ahmed',
      position: 'Electrician',
      productivity: '86% ',
      image: require('../../assets/images/employee.jpg'),
    },
    {
      id: 6,
      name: 'Ahmed Malik',
      position: 'Mechanic',
      productivity: '85% ',
      image: require('../../assets/images/employee.jpg'),
    },
  ];

  const [selectedSection, setSelectedSection] = useState('');

  return (
    <View style={styles.container}>
      <View style={{width: '86%', marginTop: '2%'}}>
        <SelectList
          setSelected={(val: any) => setSelectedSection(val)}
          data={SectionsList}
          save="value" // also set save to key.
          onSelect={() => {
            console.warn(selectedSection);
          }}
          searchPlaceholder="Search Section"
          dropdownTextStyles={{color: 'black'}}
          boxStyles={styles.selectListStyle}
          placeholder="Select Section"
          inputStyles={styles.selectListInput}
        />
      </View>
      <FlatList
        data={employees}
        renderItem={({item, index}) => (
          <View style={styles.rowContainer}>
            {index < 3 && ( // Show badge only for first 3 employees
              <Text style={styles.badgeStyle}>🥇</Text>
            )}
            <Image
              resizeMode="center"
              source={item.image}
              style={styles.image}
              borderRadius={30}
            />
            <Text style={styles.nameStyle}>{item.name}</Text>
            <Text style={styles.productivityStyle}>{item.productivity}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  selectListStyle: {
    backgroundColor: '#E5E5E5',
    borderColor: '#E5E5E5',
    borderRadius: 20,
    marginTop: '2%',
  },
  selectListInput: {color: 'black', fontSize: 18},
  rowContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5%',
    paddingHorizontal: '5%', // Add padding to control spacing
    justifyContent: 'space-evenly', // Adjust justification to start
  },
  image: {
    width: 50,
    height: 50,
    marginRight: '10%', // Adjust margin for proper spacing
  },
  productivityStyle: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 'auto',
  },
  nameStyle: {
    fontSize: 19,
    color: 'black',
    fontWeight: 'bold',
    marginRight: '30%', // Adjust margin for proper spacing
  },
  badgeStyle: {
    fontSize: 30,
    position: 'absolute',
    left: 20,
  },
});

export default EmployeeRanking;
