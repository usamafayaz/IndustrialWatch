import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import PrimaryAppBar from '../components/PrimaryAppBar';
import API_URL from '../../apiConfig';

const SectionDetails = props => {
  const navigation = useNavigation();
  const title = props.route.params.SectionName;
  const id = props.route.params.id;

  const [rulesList, setRulesList] = useState([]);

  useEffect(() => {
    fetchProductivityRules();
  }, []);

  const fetchProductivityRules = async () => {
    try {
      const response = await fetch(
        `${API_URL}/Section/GetSectionDetail?section_id=${id}`,
      );
      const data = await response.json();
      setRulesList(data.rules);
      console.log(data);
    } catch (error) {
      console.error('Error fetching productivity rules:', error);
    }
  };

  return (
    <View style={styles.container}>
      <PrimaryAppBar text={title} />
      <Text style={styles.textStyle}>Rules Included</Text>
      {rulesList.length > 0 ? (
        <FlatList
          data={rulesList}
          renderItem={({item, index}) => {
            return (
              <>
                <Card
                  title={item.rule_name}
                  fine={item.fine}
                  allowedTime={item.allowed_time}
                  ruleNumber={index + 1}
                />
                <View style={styles.horizontalLineStyle}></View>
              </>
            );
          }}
        />
      ) : (
        <View style={styles.noRuleWrapper}>
          <Text style={styles.noRuleText}>No rule assigned</Text>
        </View>
      )}
      <View style={styles.buttonWrapper}>
        <ButtonComponent
          title="Edit Section"
          onPress={() =>
            navigation.navigate('Edit Section', {id: id, SectionName: title})
          }
        />
      </View>
    </View>
  );
};

const Card = ({title, fine, allowedTime, ruleNumber}) => {
  return (
    <View style={styles.cardWrapper}>
      <Text style={styles.numberingStyle}>{ruleNumber.toString()}.</Text>
      <View>
        <Text style={styles.ruleTextStyle}>{title}</Text>
        <Text style={styles.timeStyle}>Time: {allowedTime.toString()}</Text>
      </View>
      <Text style={styles.ruleTextStyle}>Rs. {fine.toString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  cardWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  textStyle: {
    fontSize: 23,
    fontWeight: '600',
    color: 'black',
    margin: 22,
  },
  ruleTextStyle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  timeStyle: {fontSize: 18, fontWeight: '400', color: 'grey'},
  numberingStyle: {fontSize: 22, fontWeight: '800', color: 'black'},
  horizontalLineStyle: {
    width: '100%',
    height: 1,
    backgroundColor: 'grey',
    opacity: 0.5,
  },
  noRuleWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noRuleText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    fontStyle: 'italic',
  },
});

export default SectionDetails;
