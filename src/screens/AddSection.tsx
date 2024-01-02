import React, {useState} from 'react';
import {
  FlatList,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import TextField from '../components/TextField';
import RuleComponent from '../components/RuleComponent';
import {useNavigation} from '@react-navigation/native';

const AddSection = () => {
  const [inputText, setInputText] = useState('');
  const handleInputChange = (text: any) => {
    setInputText(text);
  };
  const RulesList = [
    {title: 'Smoking', fine: 0, checkBox: false},
    {title: 'On Phone', fine: 0, checkBox: false},
    // {title: 'Gossiping', fine: 0, checkBox: false},
  ];
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={{height: 20}}></View>
        <TextField
          placeHolder="Section Name"
          value={inputText}
          onChangeText={handleInputChange}
        />
        <Text style={styles.textStyle}>Rules</Text>
        <View style={styles.flatListContainer}>
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
            }}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <ButtonComponent
            title="Confirm Section"
            onPress={() => navigation.navigate('Sections' as never)}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  flatListContainer: {flex: 1},
  buttonWrapper: {
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
export default AddSection;
