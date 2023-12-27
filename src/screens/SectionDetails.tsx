import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import {useNavigation} from '@react-navigation/native';

const SectionDetails = () => {
  const RulesList = [
    {title: 'Smoking', fine: 500, checkBox: true},
    {title: 'On Phone', fine: 300, checkBox: false},
    {title: 'Gossiping', fine: 200, checkBox: true},
  ];
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{margin: 22}}>
        <Text style={styles.textStyle}>Rules Included</Text>
      </View>
      <View style={styles.centeredView}>
        <FlatList
          data={RulesList}
          renderItem={({item, index}) => {
            return (
              <>
                <Card
                  title={item.title}
                  fine={item.fine}
                  ruleNumber={index + 1}
                />
                <View style={styles.horizontalLineStyle}></View>
              </>
            );
          }}
        />
      </View>

      <View style={styles.buttonWrapper}>
        <ButtonComponent
          title="Edit Section"
          onPress={() => navigation.navigate('Edit Section' as never)}
        />
      </View>
    </View>
  );
};

const Card = (props: {title: string; fine: Number; ruleNumber: Number}) => {
  return (
    <View style={styles.cardWrapper}>
      <Text style={styles.ruleTextStyle}>{props.ruleNumber.toString()}.</Text>
      <Text style={styles.ruleTextStyle}>{props.title}</Text>
      <Text style={styles.ruleTextStyle}>Rs. {props.fine.toString()}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    alignItems: 'center',
  },
  cardWrapper: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  },
  ruleTextStyle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    margin: 20,
  },
  horizontalLineStyle: {
    width: '100%',
    height: 1,
    backgroundColor: 'grey',
    opacity: 0.5,
  },
});
export default SectionDetails;
