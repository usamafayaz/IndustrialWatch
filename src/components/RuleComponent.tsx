import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const RuleComponent = (props: {
  title: string;
  fine: Number;
  checkBox: boolean;
}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(props.checkBox);

  const handleCheckBoxChange = () => {
    setToggleCheckBox(!toggleCheckBox);
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={{marginLeft: 20}}>
          <Text style={styles.textStyle}>{props.title}</Text>
          <TextInput
            placeholder={props.fine == 0 ? 'Enter Fine' : props.fine.toString()}
            style={styles.textInputStyle}
            keyboardType="numeric"
            placeholderTextColor={props.fine == 0 ? 'grey' : 'black'}
            editable={toggleCheckBox}
          />
        </View>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={handleCheckBoxChange}
          style={styles.boxStyle}
          tintColors={{true: '#2E81FE', false: 'black'}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 110,
    flexDirection: 'row',
  },
  boxStyle: {
    marginTop: 30,
    marginLeft: '54%',
    color: 'black',
  },
  textInputStyle: {
    fontSize: 16,
    marginTop: 5,
    width: 100,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
    color: 'black',
  },
  textStyle: {
    fontSize: 18,
    marginTop: 10,
    color: 'black',
  },
});

export default RuleComponent;
