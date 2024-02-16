import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const SectionandRuleCard = (props: {
  title: string;
  editRequired?: boolean;
  onDelete: () => void;
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardText}>{props.title}</Text>
      <View style={styles.iconContainer}>
        {props.editRequired && (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Edit Section' as never);
            }}>
            <Icon name="edit" size={23} color="black" style={styles.icon} />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() => {
            props.onDelete();
          }}>
          <Icon name="delete" size={23} color="#050505" style={styles.icon} />
        </TouchableOpacity>
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
