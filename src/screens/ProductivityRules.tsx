import React, {useState} from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import SectionandRuleCard from '../components/SectionandRuleCard';
import ButtonComponent from '../components/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import TextField from '../components/TextField';

const ProductivityRules = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [inputText, setInputText] = useState('');
  const [rulesList, setRulesList] = useState([
    {title: 'Smoking'},
    {title: 'On Phone'},
    {title: 'Gossiping'},
  ]);
  const handleInputChange = (text: any) => {
    setInputText(text);
  };
  const handleDeleteRule = (indexToDelete: number) => {
    const updatedRulesList = [...rulesList];
    updatedRulesList.splice(indexToDelete, 1);
    setRulesList(updatedRulesList);
  };

  const navigation = useNavigation();
  function addRule() {
    rulesList.push({title: inputText});
    setModalVisibility(false);
    setInputText(''); // Clear the input field
  }
  return (
    <View style={styles.container}>
      <View style={styles.flatListContainer}>
        <FlatList
          style={styles.flatList}
          data={rulesList}
          renderItem={({item, index}) => {
            return (
              <SectionandRuleCard
                title={item.title}
                editRequired={false}
                onDelete={() => handleDeleteRule(index)}
              />
            );
          }}
        />
      </View>
      <Modal isVisible={modalVisibility}>
        <View style={styles.modalWrapper}>
          <Text style={styles.modalHeaderStyle}>Add Rule</Text>
          <TextField
            placeHolder="Rule Name.."
            value={inputText}
            onChangeText={handleInputChange}
          />
          <View style={styles.modalButtonWrapper}>
            <TouchableOpacity onPress={() => setModalVisibility(false)}>
              <Text style={styles.cancelStyle}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={addRule}>
              <Text style={styles.OKStyle}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.buttonWrapper}>
        <ButtonComponent
          title="Add Rule"
          onPress={() => setModalVisibility(true)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  flatListContainer: {
    flex: 1, // This container will take up the available vertical space
    marginLeft: '9%',
    width: '100%',
  },
  flatList: {
    width: '100%',
  },
  buttonWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '70%',
  },
  modalHeaderStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 12,
    alignSelf: 'flex-start',
    marginTop: '5%',
    marginLeft: '9%',
  },
  modalWrapper: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: 200,
    width: 300,
    alignSelf: 'center',
    borderRadius: 30,
  },
  modalButtonWrapper: {
    flexDirection: 'row',
    marginLeft: '43%',
    marginTop: '7%',
  },
  cancelStyle: {
    color: '#2E81FE',
    marginRight: 10,
    paddingVertical: '5%',
  },
  OKStyle: {
    color: 'white',
    backgroundColor: '#2E81FE',
    borderRadius: 20,
    paddingHorizontal: '10%',
    paddingVertical: '5%',
  },
});

export default ProductivityRules;
