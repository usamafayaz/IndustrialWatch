import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import TextField from '../components/TextField';
import RuleComponent from '../components/RuleComponent';
import {useNavigation} from '@react-navigation/native';

const EditSection = () => {
  const [inputText, setInputText] = useState('');
  const handleInputChange = (text: any) => {
    setInputText(text);
  };
  const RulesList = [
    {title: 'Smoking', fine: 500, checkBox: true},
    {title: 'On Phone', fine: 0, checkBox: false},
    {title: 'Gossiping', fine: 300, checkBox: true},
  ];
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{height: 20}}></View>
      <TextField
        placeHolder="Packing"
        value={inputText}
        onChangeText={handleInputChange}
      />
      <Text style={styles.textStyle}>Rules</Text>
      <FlatList
        data={RulesList}
        renderItem={({item}) => {
          return (
            <View>
              <RuleComponent
                title={item.title}
                checkBox={item.checkBox}
                fine={item.fine}
              />
              <View style={styles.horizontalLineStyle}></View>
            </View>
          );
        }}></FlatList>

      <View style={styles.buttonWrapper}>
        <ButtonComponent
          title="Update Section"
          onPress={() => navigation.navigate('Sections' as never)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '70%',
  },
  textStyle: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
  },
  horizontalLineStyle: {
    width: '90%',
    height: 1,
    backgroundColor: 'black',
    alignSelf: 'center',
  },
});
export default EditSection;
