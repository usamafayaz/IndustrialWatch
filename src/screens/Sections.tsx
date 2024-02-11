import React, {useState, useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import SectionandRuleCard from '../components/SectionandRuleCard';
import ButtonComponent from '../components/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

interface Section {
  id: number;
  name: string;
}

const Sections = () => {
  const navigation = useNavigation();
  const [sectionsList, setSectionList] = useState<Section[]>([]);
  const [loading, setLoading] = useState(true);
  const ApiUrl = 'http://192.168.1.8:5000/api/Section';

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const response = await fetch(`${ApiUrl}/GetAllSections`);
        const data = await response.json();
        setSectionList(data);
      } catch (error) {
        console.error('Error fetching sections:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSections();
  }, []);

  const handleDeleteSection = async (idToDelete: number) => {
    try {
      const response = await fetch(
        `${ApiUrl}/DeleteSection/?id=${idToDelete}`,
        {
          method: 'DELETE',
        },
      );

      if (response.ok) {
        // Remove the deleted section from the state
        setSectionList(prevSections =>
          prevSections.filter(section => section.id !== idToDelete),
        );
      } else {
        console.error('Error deleting section:', response.status);
      }
    } catch (error) {
      console.error('Error deleting section:', error);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.flatListContainer}>
        <FlatList
          style={styles.flatList}
          data={sectionsList}
          renderItem={({item}: {item: Section}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Section Detail' as never)}>
              <SectionandRuleCard
                title={item.name}
                editRequired={true}
                onDelete={() => handleDeleteSection(item.id)}
              />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Sections;
