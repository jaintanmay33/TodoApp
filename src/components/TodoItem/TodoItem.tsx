import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import todoItemStyles from './TodoItemStyles';
import {TodoItemProps} from '../../utilities/types';

export default function TodoItem({item}: TodoItemProps) {
  return (
    <View key={item.key} style={todoItemStyles.todoItemContainer}>
      <Text style={todoItemStyles.todoItemText}>{item.text}</Text>
    </View>
  );
}
