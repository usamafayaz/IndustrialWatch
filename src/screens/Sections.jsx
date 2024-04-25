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
import ButtonComponent from '../components/ButtonComponent';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import API_URL from '../../apiConfig';
import PrimaryAppBar from '../components/PrimaryAppBar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SectionandMaterialCard from '../components/SectionandMaterialCard';

const Sections = () => {
  const navigation = useNavigation();
  const [sectionsList, setSectionList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchSections = async () => {
    try {
      const response = await fetch(
        `${API_URL}/Section/GetAllSections?status=${1}`,
      );
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

  const changeSectionAcitivityStatus = async id => {
    try {
      const response = await fetch(
        `${API_URL}/Section/ChangeSectionAcitivityStatus?section_id=${id}`,
      );
      if (response.ok) {
        ToastAndroid.show(
          'Section Successfully Deactivated',
          ToastAndroid.SHORT,
        );
        fetchSections();
      }
    } catch (error) {
      ToastAndroid.show('Error while deactivating section', ToastAndroid.SHORT);
      console.error('Error while deactivating section:', error);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2196F3" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <PrimaryAppBar text="Sections" />
      <View style={styles.flatListContainer}>
        <Icon
          name="archive"
          size={26}
          color="white"
          style={styles.archiveButtonStyle}
          onPress={() => {
            navigation.navigate('Deactivated Sections');
          }}
        />
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
              <SectionandMaterialCard
                id={item.id}
                title={item.name}
                archiveRequired={true}
                onArchivePress={() => changeSectionAcitivityStatus(item.id)}
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
  icon: {
    marginRight: 15,
  },
  archiveButtonStyle: {
    position: 'absolute',
    bottom: '103.5%',
    left: '80%',
    zIndex: 1,
  },
});

export default Sections;
