import React, {useState, useCallback} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  ToastAndroid,
  RefreshControl,
} from 'react-native';
import SectionandRuleCard from '../components/SectionandRuleCard';
import ButtonComponent from '../components/ButtonComponent';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import API_URL from '../../apiConfig';

const Sections = () => {
  const navigation = useNavigation();
  const [sectionsList, setSectionList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchSections = async () => {
    try {
      const response = await fetch(`${API_URL}/Section/GetAllSections`);
      const data = await response.json();
      setSectionList(data);
    } catch (error) {
      ToastAndroid.show('Error fetching sections', ToastAndroid.SHORT);
      console.error('Error fetching sections:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useFocusEffect(
    // useCallback prevent unnecessary re-renders caused by creating a new
    // function instance on every render.
    useCallback(() => {
      fetchSections();
    }, []),
  );

  const onRefresh = () => {
    setRefreshing(true);
    fetchSections();
  };

  // const handleDeleteSection = async idToDelete => {
  //   try {
  //     const response = await fetch(
  //       `${API_URL}/Section/DeleteSection/?id=${idToDelete}`,
  //       {
  //         method: 'DELETE',
  //       },
  //     );

  //     if (response.ok) {
  //       // Remove the deleted section from the state
  //       setSectionList(prevSections =>
  //         prevSections.filter(section => section.id !== idToDelete),
  //       );
  //     } else {
  //       console.error('Error deleting section:', response.status);
  //     }
  //   } catch (error) {
  //     console.error('Error deleting section:', error);
  //   }
  // };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2196F3" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.flatListContainer}>
        <FlatList
          style={styles.flatList}
          data={sectionsList}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Section Detail', {
                  SectionName: item.name,
                  id: item.id,
                })
              }>
              <SectionandRuleCard
                id={item.id}
                title={item.name}
                editRequired={true}
                onDelete={null}
              />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={['#2196F3']}
            />
          }
        />
      </View>

      <View style={styles.buttonWrapper}>
        <ButtonComponent
          title="Add Section"
          onPress={() => navigation.navigate('Add Section')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
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
