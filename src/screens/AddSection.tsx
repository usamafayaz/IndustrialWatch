import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import TextField from '../components/TextField';
import RuleComponent from '../components/RuleComponent';
import {useNavigation} from '@react-navigation/native';
import API_URL from '../../apiConfig';

interface Rule {
  id: number;
  title: string;
  checkBox: boolean;
  fine: Number;
  allowedTime: string;
  // Add more properties if necessary
}
const AddSection = () => {
  const [inputText, setInputText] = useState('');

  const [rulesList, setRulesList] = useState<Rule[]>([]);

  const navigation = useNavigation();
  useEffect(() => {
    fetchProductivityRules();
  }, []);
  const fetchProductivityRules = async () => {
    try {
      const response = await fetch(`${API_URL}/Rule/GetAllRule`);
      const data = await response.json();
      console.log(data);

      setRulesList(
        data.map((item: any) => ({
          id: item.id,
          title: item.name,
          fine: null,
          checkBox: false,
        })),
      );
      console.log(rulesList);
    } catch (error) {
      // ToastAndroid.show('Error fetching Productivity Rules', ToastAndroid.LONG);
      console.error('Error fetching Productivity Rules:', error);
    } finally {
    }
  };
  const handleConfirmSection = async () => {
    if (inputText != '') {
      try {
        const requestData = {
          name: inputText,
          // rules: RulesList.map(rule => ({id: rule.id, fine: rule.fine})),
        };
        const response = await fetch(
          `${API_URL}/Section/InsertSection?name=${inputText}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputText),
          },
        );

        if (response.ok) {
          ToastAndroid.show('Section Added Successfully', ToastAndroid.LONG);
          navigation.navigate('Sections' as never);
        } else {
          ToastAndroid.show(
            'Error occured while adding Section.',
            ToastAndroid.LONG,
          );
        }
      } catch (error) {
        ToastAndroid.show(
          'Error occured while adding Section.',
          ToastAndroid.LONG,
        );
      }
    } else {
      ToastAndroid.show("Section Name Can't be empty", ToastAndroid.LONG);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
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
            data={rulesList}
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
    paddingTop: 15,
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
