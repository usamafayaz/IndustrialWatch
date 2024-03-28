import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import PrimaryAppBar from '../components/PrimaryAppBar';

const SectionDetails = () => {
  const RulesList = [
    {title: 'Smoking', fine: 500, allowedTime: '5:00', checkBox: true},
    {title: 'On Phone', fine: 300, allowedTime: '10:00', checkBox: false},
    {title: 'Gossiping', fine: 200, allowedTime: '20:00', checkBox: true},
  ];
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <PrimaryAppBar text="Packing" />
      <Text style={styles.textStyle}>Rules Included</Text>
      <FlatList
        data={RulesList}
        renderItem={({item, index}) => {
          return (
            <>
              <Card
                title={item.title}
                fine={item.fine}
                allowedTime={item.allowedTime}
                ruleNumber={index + 1}
              />
              <View style={styles.horizontalLineStyle}></View>
            </>
          );
        }}
      />

      <View style={styles.buttonWrapper}>
        <ButtonComponent
          title="Edit Section"
          onPress={() => navigation.navigate('Edit Section' as never)}
        />
      </View>
    </View>
  );
};

const Card = (props: {
  title: string;
  fine: Number;
  allowedTime: string;
  ruleNumber: Number;
}) => {
  return (
    <View style={styles.cardWrapper}>
      <Text style={styles.numberingStyle}>{props.ruleNumber.toString()}.</Text>
      <View>
        <Text style={styles.ruleTextStyle}>{props.title}</Text>
        <Text style={styles.timeStyle}>
          Time: {props.allowedTime.toString()}
        </Text>
      </View>
      <Text style={styles.ruleTextStyle}>Rs. {props.fine.toString()}</Text>
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
});
export default SectionDetails;
