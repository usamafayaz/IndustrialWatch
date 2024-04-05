import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import TextField from '../components/TextField';
import RuleComponent from '../components/RuleComponent';
import {useNavigation} from '@react-navigation/native';
import API_URL from '../../apiConfig';

const EditSection = props => {
  const [inputText, setInputText] = useState(props.route.params.SectionName);

  const handleInputChange = text => {
    setInputText(text);
  };

  const RulesList = [
    {id: 1, title: 'Smoking', fine: 500, checkBox: true},
    {id: 2, title: 'On Phone', fine: 0, checkBox: false},
  ];

  const navigation = useNavigation();

  const handleUpdateSection = async () => {
    try {
      const response = await fetch(`${API_URL}/Section/UpdateSection`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: inputText,
          id: props.route.params.id,
          rules: RulesList.map(rule => ({id: rule.id, fine: rule.fine})),
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); // Handle the response data
        navigation.navigate('Sections');
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View style={styles.container}>
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
        <ButtonComponent title="Update Section" onPress={handleUpdateSection} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 15,
  },
  flatListContainer: {
    flex: 1,
  },
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
export default EditSection;
