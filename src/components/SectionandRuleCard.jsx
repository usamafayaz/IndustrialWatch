import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const SectionandRuleCard = ({id, title, editRequired, onDelete}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardText}>{title}</Text>
      <View style={styles.iconContainer}>
        {editRequired && (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Edit Section', {id: id, SectionName: title});
            }}>
            <Icon name="edit" size={23} color="black" style={styles.icon} />
          </TouchableOpacity>
        )}
        {onDelete ? (
          <TouchableOpacity onPress={onDelete}>
            <Icon name="delete" size={23} color="#050505" style={styles.icon} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '90%',
    height: 55,
    backgroundColor: '#DDDDDD',
    borderRadius: 20,
    paddingLeft: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '4%',
  },
  cardText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    flex: 1,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 15,
  },
});

export default SectionandRuleCard;
