import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MultipleSelectList} from 'react-native-dropdown-select-list';

const MultiSelectComponent = ({
  data,
  setSelected,
  placeholder,
  save,
  customStyle,
}) => {
  return (
    <View>
      <MultipleSelectList
        setSelected={setSelected}
        data={data}
        save={save}
        dropdownTextStyles={{color: 'black'}}
        labelStyles={{color: 'grey'}}
        label="Angles"
        dropdownStyles={{width: '86%', alignSelf: 'center'}}
        boxStyles={styles.multipleListStyle}
        placeholder={placeholder}
        inputStyles={styles.multipleListInput}
      />
    </View>
  );
};

export default MultiSelectComponent;

const styles = StyleSheet.create({
  multipleListStyle: {
    backgroundColor: '#E5E5E5',
    borderColor: '#E5E5E5',
    borderRadius: 20,
    marginTop: '2%',
    width: '86%',
    alignSelf: 'center',
  },
  multipleListInput: {color: 'grey', fontSize: 18},
});
