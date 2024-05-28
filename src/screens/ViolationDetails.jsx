import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import PrimaryAppBar from '../components/PrimaryAppBar';
import {API_URL} from '../../apiConfig';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

const ViolationDetails = props => {
  const [employeeViolationDetail, setEmployeeViolationDetail] = useState(null);

  const formatDate = dateStr => {
    const date = new Date(dateStr);
    const options = {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
  };

  const {item, name} = props.route.params;
  useEffect(() => {
    console.log('billie', item);
    fetchViolationDetails();
  }, []);
  const fetchViolationDetails = async () => {
    try {
      console.log(item.violation_id);
      const response = await fetch(
        `${API_URL}/Employee/GetViolationDetails?violation_id=${item.violation_id}`,
      );
      const data = await response.json();
      setEmployeeViolationDetail(data);
    } catch (error) {
      ToastAndroid.show(
        'Error fetching employee Violations:',
        ToastAndroid.SHORT,
      );
    }
  };
  return (
    <View style={styles.container}>
      <PrimaryAppBar text={name} />
      {employeeViolationDetail && employeeViolationDetail.images && (
        <View style={styles.swiperContainer}>
          <SwiperFlatList index={0}>
            {employeeViolationDetail.images.map((image, index) => (
              <View style={styles.slide} key={index}>
                <Image
                  resizeMode="contain"
                  source={{
                    uri: `${API_URL}/ViolationImages/${encodeURIComponent(
                      image.image_url.replace(/\\/g, '/'),
                    )}`,
                  }}
                  style={styles.imageStyle}
                />
                <Text style={styles.dateStyle}>{image.capture_time}</Text>
              </View>
            ))}
          </SwiperFlatList>
        </View>
      )}
      {employeeViolationDetail && (
        <View style={styles.detailsContainer}>
          <Text style={[styles.dateStyle, {fontWeight: 'bold'}]}>
            {employeeViolationDetail.rule_name}
          </Text>
          <Text style={styles.dateStyle}>
            {formatDate(employeeViolationDetail.date)}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  imageStyle: {width: 393, height: 300, borderRadius: 20, marginTop: 10},
  titleStlye: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginTop: 10,
  },
  dateStyle: {
    fontSize: 17,
    color: 'black',
    textAlign: 'center',
  },
  swiperContainer: {
    height: 350, // Adjust the height as needed
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ViolationDetails;
