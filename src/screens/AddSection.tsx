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
  const ApiUrl = 'http://192.168.1.8:5000/api/Section';

  const RulesList = [
    {id: 1, title: 'Smoking', fine: 0, checkBox: false},
    {id: 2, title: 'On Phone', fine: 0, checkBox: false},
    // { id: 3, title: 'Gossiping', fine: 0, checkBox: false },
  ];

  const navigation = useNavigation();

  const handleConfirmSection = async () => {
    try {
      const requestData = {
        name: inputText,
        // rules: RulesList.map(rule => ({id: rule.id, fine: rule.fine})),
      };

      const response = await fetch(
        `${ApiUrl}/InsertSection?name=${inputText}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inputText),
        },
      );

      if (response.ok) {
        navigation.navigate('Sections' as never);
      } else {
        console.error('Error adding section:', response.status);
      }
    } catch (error) {
      console.error('Error adding section:', error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={{height: 20}}></View>
        <TextField
          placeHolder="Section Name"
          value={inputText}
          onChangeText={(text: any) => {
            setInputText(text);
          }}
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
            onPress={handleConfirmSection}
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
