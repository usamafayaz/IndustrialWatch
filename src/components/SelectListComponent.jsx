import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
const SelectListComponent = ({data, setSelected, placeholder, customStyle}) => {
  return (
    <View>
      <SelectList
        setSelected={setSelected}
        data={data}
        save="key"
        dropdownTextStyles={{color: 'black'}}
        dropdownStyles={{width: '86%', alignSelf: 'center'}}
        boxStyles={
          customStyle
            ? {...styles.selectListStyle, ...customStyle}
            : styles.selectListStyle
        }
        placeholder={placeholder}
        inputStyles={styles.selectListInput}
      />
    </View>
  );
};

export default SelectListComponent;

const styles = StyleSheet.create({
  selectListStyle: {
    backgroundColor: '#E5E5E5',
    borderColor: '#E5E5E5',
    borderRadius: 20,
    margin: '2%',
    width: '86%',
    alignSelf: 'center',
  },
  selectListInput: {color: 'black', fontSize: 18},
});
