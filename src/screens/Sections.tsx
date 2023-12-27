import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import SectionandRuleCard from '../components/SectionandRuleCard';
import ButtonComponent from '../components/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

const Sections = () => {
  const navigation = useNavigation();
  const [sectionsList, setSectionList] = useState([
    {id: 1, name: 'Packing'},
    {id: 2, name: 'Manufacturing'},
    {id: 3, name: 'Management'},
  ]);

  const handleDeleteSection = (indexToDelete: number) => {
    const updatedSectionList = [...sectionsList];
    updatedSectionList.splice(indexToDelete, 1);
    setSectionList(updatedSectionList);
  };
  return (
    <View style={styles.container}>
      <View style={styles.flatListContainer}>
        <FlatList
          style={styles.flatList}
          data={sectionsList}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('Section Detail' as never)}>
                <SectionandRuleCard
                  title={item.name}
                  editRequired={true}
                  onDelete={() => handleDeleteSection(index)}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <View style={styles.buttonWrapper}>
        <ButtonComponent
          title="Add Section"
          onPress={() => navigation.navigate('Add Section' as never)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  flatListContainer: {
    flex: 1,
    marginLeft: '9%',
    width: '100%',
  },
  flatList: {
    width: '100%',
  },
  buttonWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '70%',
  },
});

export default Sections;
